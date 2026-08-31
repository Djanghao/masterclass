# Greedy solution

**Author:** shamas
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/5304110/](https://leetcode.com/problems/count-alternating-subarrays/solutions/5304110/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I had to draw it out with a growing window before I realized that this can be done greedily.

# Approach
<!-- Describe your approach to solving the problem. -->
This is a greedy algorithm problem. You have to realize that a failed subarray means no larger subarray can be a solution. Then, manually noting the number of additional solutions for a given additional case creates size partitions, which are also valid. This is a linear optimized greedy algorithm.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countAlternatingSubarrays(nums: number[]): number {
    let left = 0;
    let ans = nums.length; // all individual elements are an answer
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            ans += i-left;
        } else {
            left = i;
        }
    }
    return ans;
};
```