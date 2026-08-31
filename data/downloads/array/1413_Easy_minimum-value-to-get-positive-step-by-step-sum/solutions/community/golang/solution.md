# Go O(n) solution

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/2537047/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/2537047/)

---

```
func minStartValue(nums []int) int {
    prefixSum, result := int(0), int(1)
    
    for _, num := range nums {
       prefixSum += num
        
        result = max(result, 1 - prefixSum)
    }
    
    return result
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}

```