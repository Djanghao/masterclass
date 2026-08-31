# Golang easy solution 8ms 100%

**Author:** fshiori
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/1648540/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/1648540/)

---

```
func prefixesDivBy5(nums []int) []bool {
    ans := make([]bool, len(nums))
    var t int
    for i, num := range nums {
        t = t << 1 + num
        if t % 5 == 0 {
            ans[i] = true
            t = 0
        } else {
            t %= 5
        }
    }
    return ans
}
```