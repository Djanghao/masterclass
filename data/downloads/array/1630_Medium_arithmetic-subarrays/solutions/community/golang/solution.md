# Clean golang solution

**Author:** klakovskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/4618486/](https://leetcode.com/problems/arithmetic-subarrays/solutions/4618486/)

---

# Code
```
func checkArithmeticSubarrays(nums []int, l []int, r []int) []bool {
    result := make([]bool, len(l))
    tmp := make([]int, len(nums))

    for i := range l {
        result[i] = true
        size := r[i]-l[i]
        tmp = tmp[0:size+1]
        copy(tmp, nums[l[i]:r[i]+1])
        sort.Ints(tmp)
        diff := tmp[1] - tmp[0]
        for j := 1; j<len(tmp); j++ {
            if tmp[j]-tmp[j-1] != diff {
                result[i] = false
                break
            }
        }
    }
    return result
}
```