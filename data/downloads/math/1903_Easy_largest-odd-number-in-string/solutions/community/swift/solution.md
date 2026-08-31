# 💡Swift - Optimal Solution

**Author:** bernikovich
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372603/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372603/)

---

# Solution
```
class Solution {
    func largestOddNumber(_ num: String) -> String {
        let odds: Set<Character> = Set("13579")
        if let last = num.lastIndex(where: { odds.contains($0) }) {
            return String(num[...last])
        }
        return ""
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$