# [Swift] Simplest solution

**Author:** Athleteg
**Votes:** 2
**Link:** [https://leetcode.com/problems/base-7/solutions/2513069/](https://leetcode.com/problems/base-7/solutions/2513069/)

---

Please, upvote if you found the solution useful.
```
class Solution {
	/// Time: O(n). Space: O(n).
    func convertToBase7(_ num: Int) -> String {
        var n = abs(num)
        var i = 1
        var result = 0

        while n > 0 {
            result += (n % 7) * i
            i *= 10
            n /= 7
        }
        return num.signum() == -1 ? "-\\(result)" : "\\(result)"
    }
}
```