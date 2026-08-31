# [Swift] Dictionary lookup

**Author:** kjanowiecki
**Votes:** 0
**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solutions/3924001/](https://leetcode.com/problems/before-and-after-puzzle/solutions/3924001/)

---

# Intuition
Need to be able to compare first word of phrase with last word of other phrases. Dictionary should be efficient for lookup.

# Approach
Create a forward-looking dictionary that records the first word of each phrase. Create a backward-looking dictionary that records the last word of each phrase.

Loop over phrases and compare first word to last word (n^2 complexity here). Add the combined phrases to a Set in order to de-dupe answers. Sort the solution at the end to get lexicographic sort (nklog(n) complexity here where k is length of longest string in phrases)

# Code
```
class Solution {
    func beforeAndAfterPuzzles(_ phrases: [String]) -> [String] {
        var forward = [Int: String]()
        var backward = [Int: String]()

        // Record in dictionaries the first word and last word of phrase
        // for lookup later
        for (i, phrase) in phrases.enumerated() {
            let components = phrase.components(separatedBy: " ")
            let first = components.first!
            let last = components.last!
            forward[i] = first
            backward[i] = last
        }

        // Set to de-dupe
        var result = Set<String>()

        for i in 0..<phrases.count {
            for j in 0..<phrases.count {
                if i == j { continue }

                // If the first word matches the last word
                if forward[i] == backward[j] {
                    let left = phrases[j]
                    let str: String = phrases[i]
                    let remaining = str.components(separatedBy: " ").dropFirst().joined(separator: " ")

                    if remaining.isEmpty { result.insert(left) }
                    else { result.insert(left + " " + remaining) }
                    
                } 
            }
        }

        // Convert Set to array and sort lexicographically
        return Array(result).sorted()
    }
}
```