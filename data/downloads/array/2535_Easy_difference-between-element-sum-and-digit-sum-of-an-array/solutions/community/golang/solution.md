# Nice simple solution

**Author:** georgiiagon
**Votes:** 2
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3200617/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3200617/)

---

# My solution
**Element sum is always >= digit sum**
# Code
```
func differenceOfSum(nums []int) int {
    res := 0
    for _, v := range nums {
        res += v
        for v > 0 {
            res -= v % 10
            v = v/10
        }
    }

    return res
}
```