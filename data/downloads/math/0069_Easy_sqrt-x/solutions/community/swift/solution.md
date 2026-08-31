# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 17
**Link:** [https://leetcode.com/problems/sqrtx/solutions/1915715/](https://leetcode.com/problems/sqrtx/solutions/1915715/)

---

```
class Solution {
    func mySqrt(_ x: Int) -> Int {
        if x == 0 { return 0 }
        if x < 4 { return 1 }
        
        var left = 0
        var right = (x + 1) / 2
        var mid = (left + right) / 2
        
        while left < right {
            if mid * mid > x {
                right = mid - 1
            } else {
                left = mid + 1
            }
            
            mid = (left + right) / 2
        }
        
        return left * left > x ? left - 1 : left
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.