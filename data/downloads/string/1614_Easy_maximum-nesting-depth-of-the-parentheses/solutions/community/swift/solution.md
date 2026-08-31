# My Swift solution

**Author:** yamironov
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/889845/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/889845/)

---

My Swift solution
```
class Solution {
    func maxDepth(_ s: String) -> Int {
        var result = 0, depth = 0
        for char in s {
            switch char {
                case "(": depth += 1; result = max(result, depth)
                case ")": depth -= 1
                default: break
            }
        }
        return result
    }
}
```