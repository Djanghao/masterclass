# Go 0ms Solution

**Author:** miryang
**Votes:** 14
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/411330/](https://leetcode.com/problems/reverse-integer/solutions/411330/)

---

```
func reverse(x int) int {
    //math.MinInt32 = -2147483648
    //math.MaxInt32 = 2147483647
    var result int
    for x!=0{
        result=result*10+x%10
        if result > 2147483647  || result < -2147483648{
            return 0
        }
        x/=10
    }
    return result
}
```