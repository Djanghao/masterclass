# [Swift] DP, O(1) space with explanation + clean code

**Author:** GV1506
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/575029/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/575029/)

---

```
class Solution {
    func numOfWays(_ n: Int) -> Int {
        let mod = 1000000007
        // A is Red, B is Yellow, C is Green
        // color3 is using 3 colors in (A,B,C)
        var color3 = 6 // 3!
        
        // color2 is using 2 colors in (A,B,C)
        var color2 = 6 // C(3,2) * 2!

        guard n > 1 else {
            return (color3 + color2)
        }
        
        // if the current row is painted by 3 colors assume that (A,B,C) then the next row can be:
        // there are 2 ways if we use 2 colors: (B,A,B), (B,C,B)
        // there are 2 ways if we use 3 colors: (B,C,A), (C,A,B)
        
        // if the current row is painted by 2 colors assume that (A,B,A) then the next row can be:
        // there are 3 ways if we use 2 colors: (B,A,B), (B,C,B), (C,A,C)
        // there are 2 ways if we use 3 colors: (B,A,C), (C,A,B)
        
        // so the next row if it is painted by 3 colors is (2 * color3 + 2 * color2)
        // if it is painted by 2 colors is (2 * color3 + 3 * color2)
        for _ in 2...n {
            let temp = color3
            color3 = (2 * color3 + 2 * color2) % mod
            color2 = (2 * temp + 3 * color2) % mod
        }
        return (color3 + color2) % mod
    }
}
```