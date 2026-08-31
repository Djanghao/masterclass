# Idiomatic Go Solution

**Author:** vhs
**Votes:** 21
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/724397/](https://leetcode.com/problems/move-zeroes/solutions/724397/)

---

```
func moveZeroes(nums []int)  {
    nonZeroIndex := 0
    for i := 0; i < len(nums); i++ {
        if nums[i] != 0 {
            nums[i], nums[nonZeroIndex] = nums[nonZeroIndex], nums[i]
            nonZeroIndex++
        }
    }
}
```