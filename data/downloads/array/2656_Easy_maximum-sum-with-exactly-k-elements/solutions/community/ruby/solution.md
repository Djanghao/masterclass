# 🚀 Simple Math Solution Beats 100% Ruby Users: Maximizing Score Without Loops 🧮

**Author:** umarmahmood637
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5075607/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5075607/)

---

# Approach
1. Initialize res to the maximum element in the array nums.
2. Increment res by res * (k-1). This step effectively simulates removing the maximum element k-1 times and adding res to the score each time.
3. Decrement k by 1.
4. Increment res by (k * (k + 1)) / 2. This step calculates the sum of integers from k down to 1 and adds it to the score. It's based on the fact that you're adding k to the score k-1 times, k-1 to the score k-2 times, and so on until 1.

# Complexity
- Time complexity:
    - O(n)

- Space complexity:
    - O(1)

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def maximize_sum(nums, k)
    res = nums.max
    res += res * (k-1)
    k = k - 1
    res += k * (k + 1) / 2
    return res
end
```