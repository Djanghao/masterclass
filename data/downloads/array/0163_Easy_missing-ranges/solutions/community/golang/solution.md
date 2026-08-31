# Golang simple 0ms solution

**Author:** JieBai
**Votes:** 3
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/964482/](https://leetcode.com/problems/missing-ranges/solutions/964482/)

---

```
func findMissingRanges(nums []int, lower int, upper int) []string {
    nums = append([]int{lower - 1}, nums...) // this is the key logic, add lower - 1 at beginning
    nums = append(nums, upper + 1) //append upper + 1 at the end
    res := make([]string, 0)
    
    for i := 0; i < len(nums) - 1; i++ {
        l := nums[i] + 1
        r := nums[i + 1] - 1
        if l == r {
            res = append(res, strconv.Itoa(l))
        } else if l < r {
            res = append(res, strconv.Itoa(l) + "->" + strconv.Itoa(r))
        }
    }
    return res
}
```