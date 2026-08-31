# 🚀 Swift | Hash Table | Time: O(n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4483275/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4483275/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxLengthBetweenEqualCharacters(_ s: String) -> Int {
        var res = -1
        var charsAndIndexs: [String.Element: [Int]] = [:]

        for (currentIndex, char) in s.enumerated() {
            if let indexs = charsAndIndexs[char], let charIndex = indexs.first {
                let currentDistance = currentIndex - charIndex - 1
                res = max(res, currentDistance)
            } else {
                charsAndIndexs[char] = [currentIndex]
            }
        }
        
        return res
    }
}
```