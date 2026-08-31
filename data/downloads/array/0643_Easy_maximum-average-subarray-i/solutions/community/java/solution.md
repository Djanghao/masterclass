# [JAVA] 100% faster solution, sliding window

**Author:** Jugantar2020
**Votes:** 101
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/3799916/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/3799916/)

---

# Intuition
The intuition behind solving the Maximum Average Subarray problem is to find the maximum average of a subaray of length `k` within the given array
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The idea is to use a sliding window technique. By using this algorithm, we avoid recalculating the sum of subarrays from scratch for each positions, allowing us to efficiently find the maximum average subarray.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int sum = 0;
       for(int i = 0; i < k; i ++) 
           sum += nums[i];
       int maxSum = sum;
       for(int i = k; i < nums.length; i ++) {
           sum += nums[i] - nums[i - k];
           maxSum = Math.max(maxSum, sum);
       }
       return (double)maxSum / k;
    }
}
```
# PLEASE UPVOTE IF IT WAS HELPFULL