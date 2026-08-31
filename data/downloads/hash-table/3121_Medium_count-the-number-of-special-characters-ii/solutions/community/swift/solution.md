# Swift Beats 100%

**Author:** user4612c
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5538914/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5538914/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func numberOfSpecialChars(_ word: String) -> Int {
        
        var dict = [Character: [Int]].init()
        
        for (i, c) in word.enumerated() {
            if (dict[c] == nil) {
                dict[c] = [i]
            } else {
                dict[c]?.append(i)
            }
        }
        var count = 0
        
        for (key, value) in dict.filter({ $0.key.isLowercase }) {
            if dict[Character(key.uppercased())] == nil {
                continue
            }
            
            let upperCasePositions = dict[Character(key.uppercased())] ?? []
            
            let sum = upperCasePositions[0] - value.max()!
            
            if sum > 0 {
                count += 1
            }
        }

        return count
    }
}
```