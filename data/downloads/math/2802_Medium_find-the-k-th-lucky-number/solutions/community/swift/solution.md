# 💡Swift - Optimal Solution

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5237540/](https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5237540/)

---

# Solution
```swift
class Solution {
    func kthLuckyNumber(_ k: Int) -> String {
        var result = ""
        var k = k + 1
        while k != 1 {
            result.append(k & 1 != 0 ? "7" : "4")
            k /= 2
        }
        return String(result.reversed())
    }
}

```
# Complexity
- Time: $$O(\\log k)$$
- Space: $$O(1)$$