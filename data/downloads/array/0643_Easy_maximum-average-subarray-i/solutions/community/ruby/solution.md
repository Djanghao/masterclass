# simple use of window to find max subarray average in ruby

**Author:** nspinazz89
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/4829311/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/4829311/)

---

# Intuition
Initially, the problem suggests calculating the average of every contiguous subarray of length k and finding the maximum average. This straightforward approach would involve iterating through the array and, for each starting point, summing the next k elements to calculate the average. However, this method could become inefficient for large arrays due to repeated summations of overlapping elements.

# Approach
To optimize, we can utilize the sliding window technique. This involves the following steps:

1. Calculate the sum of the first k elements to initialize the first window's sum.
2. Iterate through the array starting from the kth element. For each step:
    - Update the window sum by adding the current element and subtracting the element that just moved out of the window (i.e., the first element of the previous window).
    - Update the maximum sum found so far with the current window sum if it's greater.
3. Once all elements have been processed, the maximum sum reflects the sum of the subarray of length k with the maximum average. Divide this sum by k to get the maximum average.

This method ensures each element is added and subtracted exactly once, significantly reducing the number of operations compared to the initial approach.



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Float}
def find_max_average(nums, k)
    window_sum = nums[0...k].sum
    max_sum = window_sum
    (k...nums.length).each do |i|
       window_sum = window_sum + nums[i] - nums[i-k]
       max_sum = [window_sum, max_sum].max 
    end
    max_sum.to_f / k
end
```