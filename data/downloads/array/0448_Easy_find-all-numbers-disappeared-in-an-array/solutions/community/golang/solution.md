# golang solution beats 99% runtime

**Author:** KTyy
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/790951/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/790951/)

---

```
func findDisappearedNumbers(nums []int) []int {
    length := len(nums)
    if length == 0 { return nil }
    res := make([]int, length)
    for _, v := range nums {
        res[v-1] = v
    }
    j := 0
    for i := 0; i < length; i++ {
        if res[i] == 0 { 
            res[j] = i + 1
            j++
        }
    } 
    return res[:j]
}
```