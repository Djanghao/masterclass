# Simple & Easy

**Author:** elite_code_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/5537037/](https://leetcode.com/problems/single-row-keyboard/solutions/5537037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func calculateTime(_ keyboard: String, _ word: String) -> Int {
        var chars:[Character] = Array(keyboard)
        func dist(_ a:Character, _ b:Character) -> Int{
            if a == b {
                return 0
            }
            return abs((chars.firstIndex(of:a) ?? 0) - (chars.firstIndex(of:b) ?? 0))
        }
        var lastChar:Character = chars[0]
        var travel = 0
        var word = Array(word)

        for ch in word {
            let d = dist(ch,lastChar)
            travel += d
            lastChar = ch
        }
        return travel
    }
}
```