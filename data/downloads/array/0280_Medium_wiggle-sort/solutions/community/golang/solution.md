# GoLang Solution (without sorting)

**Author:** stshmakov
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/1324715/](https://leetcode.com/problems/wiggle-sort/solutions/1324715/)

---

```
func wiggleSort(nums []int)  {
    n := len(nums)
    
    for i := 1; i < n; i++ {
        if (i % 2 == 1 && nums[i-1] > nums[i]) ||
        (i % 2 == 0 && nums[i-1] < nums[i]) {
            nums[i-1], nums[i] = nums[i], nums[i-1]
        }
    }
}
```