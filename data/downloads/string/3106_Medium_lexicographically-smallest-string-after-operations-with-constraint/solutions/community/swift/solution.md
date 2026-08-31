# [ Swift ] O(n) solution

**Author:** icedcappuccino
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985914/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985914/)

---

# Intuition
Lexicographical order of s string is determined by the letters from left to right.

Therefore, we should prioritize making each letter in the string as lexographically small as possible, starting from the left.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$, excluding the space used for the answer

# Code
```
class Solution {
    func getSmallestString(_ s: String, _ k: Int) -> String {
        guard k > 0 else {
            return s
        }
        var ans: String = ""
        var remK: Int = k
        for c in s {
            if remK > 0 {
                let newC = lowestCharWithinK(c, remK)
                remK -= distanceBetween(newC, c)
                ans.append(newC)
            } else {
                ans.append(c)
            }
        }
        return ans
    }
    
    func charToInt(_ c: Character) -> Int {
        return Int(exactly: c.asciiValue!)! - 97
    }
    
    func intToChar(_ n: Int) -> Character {
        return Character(UnicodeScalar(n + 97)!) 
    }
    
    // Calculate cyclic distance between 2 chars
    func distanceBetween(_ a: Character, _ b: Character) -> Int {
        if a == b {
            return 0
        } else {
            var diff: Int = abs(charToInt(a) - charToInt(b))
            return min(diff, 26 - diff)
        }
    }
    
    // Find the lexographically smallest char within k distance of c
    // Either "a" or k letters before c
    func lowestCharWithinK(_ c: Character, _ k: Int) -> Character {
        let c: Int = charToInt(c)
        if c - k > 0 && c + k < 26 {
            return intToChar(c - k)
        }
        return intToChar(0)
    }
}
```