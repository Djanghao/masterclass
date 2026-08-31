# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/3465174/](https://leetcode.com/problems/valid-perfect-square/solutions/3465174/)

---



# Code
```
class Solution {
    func isPerfectSquare(_ num: Int) -> Bool {
        var (l, r) = (1, num)

        while l<=r{
            let mid = (l+r)/2
            let res = mid*mid

            if res == num{
                return true

            }else{
                res < num ? (l = mid + 1) : (r = mid - 1)
            }
        }

        return false
    }
}
```