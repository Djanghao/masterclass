# [Swift] using bitmask

**Author:** chrisxu_
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1568852/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1568852/)

---

```
class Solution {
    func findNumOfValidWords(_ words: [String], _ puzzles: [String]) -> [Int] {
        // N is length of the words, L1 is the average length of words
        // M is the length of the puzzles, L2 is the average length of puzzles
        
        // Build the map.
        var map = [Int: Int]()
        for word in words{ // O(N * L1)
            // Transform it into a bitmask of its characters.
            let n = word.bitmask
            map[n, default: 0] += 1
        }
        
        func countOfValidWords(for puzzle: String) -> Int {            
            // Iterate over every possible submask containing the first letter in puzzle (puzzle[i][0]). 
            // A word is valid for a puzzle if its bitmask matches one of the puzzle's submasks.
            let firstBitmask = String(puzzle.first!).bitmask
            var submasks = [Int]()
            
            for submask in map.keys {
                if firstBitmask & submask > 0 {
                    submasks.append(submask)
                }
            }
            
            let mask = String(puzzle.dropFirst()).bitmask
            var submask = mask
            var count = map[firstBitmask] ?? 0
            while submask > 0 {
                let key = submask | firstBitmask
                count += map[key] ?? 0
                submask = (submask - 1) & mask
            }
            
            return count
        }
        
        var res = [Int]()
        
        // Find all counts of each puzzles
        for p in puzzles { // O(M)
            let count = countOfValidWords(for: p) // O(L2)
            res.append(count)
        }
        return res
    }
}

extension String {
    var bitmask: Int {
        return Array(self).reduce(0, { r, ch in
            let bit = ch.asciiValue! - Character("a").asciiValue!
            return r | (1 << bit)
        })
    }
}
```