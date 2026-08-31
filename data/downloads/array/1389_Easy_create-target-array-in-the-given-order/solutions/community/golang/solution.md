# Go simple one pass

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/2482692/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/2482692/)

---

```
func createTargetArray(nums []int, index []int) []int {
    res := make([]int, len(nums))
    
    for idx, i := range index {
        for j := len(res)-1; j > i; j-- {
            res[j] = res[j-1]
        }
        
        res[i] = nums[idx]
    }
    
    return res
}
```