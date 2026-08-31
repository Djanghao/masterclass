# Simple solution | Greedy approach | Explanation

**Author:** kmuhammadjon
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5046478/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5046478/)

---


# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minOperationsToMakeMedianK(nums []int, k int) int64 {
    // approach works when it is sorted
    sort.Ints(nums)
    middle := len(nums) / 2
    
    var numberOfOpertations int64
    // if middle element is bigger than k we need to decrement it so
    // where we have to check it is sorted so we have to check left 
    // side of array
    if nums[middle] > k{
        for i := middle; i >= 0 && nums[i] > k; i--{
            numberOfOpertations += int64(nums[i] - k)
        }
    // for right side exact same thing
    }else{
        for i := middle; i < len(nums) && nums[i] < k; i++{
            numberOfOpertations += int64(k - nums[i])
        }
    }
    return numberOfOpertations
}
```