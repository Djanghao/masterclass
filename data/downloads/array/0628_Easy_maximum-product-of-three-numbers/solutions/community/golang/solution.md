# Go solution O(1)

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/2454118/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/2454118/)

---

```
func maximumProduct(nums []int) int {
    sort.Ints(nums)
    
    return max(nums[len(nums)-1] * nums[len(nums)-2] * nums[len(nums)-3], nums[0] * nums[1] * nums[len(nums)-1])
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}
```