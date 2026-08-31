# Go O(n) one pass

**Author:** tuanbieber
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/2215861/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/2215861/)

---

```
func targetIndices(nums []int, target int) []int {
    var res []int
    
    count, left := 0, 0
    
    for i := 0; i < len(nums); i++ {
        if nums[i] == target {
            count++
        }
        
        if nums[i] < target {
            left++
        }
    }
    
    for i := 0; i < count; i++ {
        res = append(res, left)
        left++
    }
    
    return res
}
```