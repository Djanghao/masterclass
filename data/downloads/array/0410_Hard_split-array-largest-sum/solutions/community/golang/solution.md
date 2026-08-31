# Golang, 100% beats

**Author:** rison
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/3219610/](https://leetcode.com/problems/split-array-largest-sum/solutions/3219610/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Main idea from [Capacity-to-ship-packages-within-d-days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/2934252/capacity-to-ship-packages-within-d-days/?orderBy=most_vote) problem solution.  

# Approach
The `splitArray` function takes the input array `nums` and the number of subarrays `k`, and returns the minimized largest sum of the split.

It first calculates the maximum and sum of the array, and then uses binary search to find the minimum possible largest sum. The binary search is performed on the range between the maximum value in the array (which is guaranteed to be a valid answer) and the sum of the array (which is the upper bound of the largest sum).

The `canSplit` function is a helper function that checks if it's possible to split the array into `k `subarrays with a maximum sum of `maxSum`. It iterates through the array, keeping track of the current sum and the number of subarrays seen so far. If the current sum exceeds `maxSum`, it starts a new subarray. If the number of subarrays seen so far exceeds `k`, it returns `false`. Otherwise, it returns `true`.

# Complexity
- Time complexity: O(n*log(sum)), where n is the length of the input array and sum is the sum of the input array
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  O(1), as we only use constant extra space for the variables used in the algorithm.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func splitArray(nums []int, k int) int {
    // Calculate the maximum and sum of the array
    max := 0
    sum := 0
    for _, num := range nums {
        if num > max {
            max = num
        }
        sum += num
    }

    // Binary search for the minimum possible largest sum
    left := max
    right := sum
    for left < right {
        mid := (left + right) / 2
        if canSplit(nums, k, mid) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

// Helper function to check if it's possible to split nums into k subarrays
// with a maximum sum of maxSum
func canSplit(nums []int, k int, maxSum int) bool {
    count := 1
    sum := 0
    for _, num := range nums {
        sum += num
        if sum > maxSum {
            count++
            sum = num
        }
        if count > k {
            return false
        }
    }
    return true
}

```