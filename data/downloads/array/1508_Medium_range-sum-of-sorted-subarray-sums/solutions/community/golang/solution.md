# Go O(n^2) simple solution

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/2191953/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/2191953/)

---

```
func rangeSum(nums []int, n int, left int, right int) int {
    var subArrSum []int

    for i := 0; i < len(nums); i++ {
        sum := 0
        for j := i ; j < len(nums); j++ {
            sum += nums[j]
            subArrSum = append(subArrSum, sum)
        }
    }
    left--
    right--
    sort.Ints(subArrSum)
    
    if right > len(subArrSum) - 1 {
        right = len(subArrSum) - 1 
    }
    sum := 0
    for i := left; i < right + 1; i++ {
        sum += subArrSum[i]
    }
    return sum % 1000000007
}

// Runtime: 221 ms, faster than 28.57% of Go online submissions for Range Sum of Sorted Subarray Sums.
// Memory Usage: 20.8 MB, less than 33.33% of Go online submissions for Range Sum of Sorted Subarray Sums.
```