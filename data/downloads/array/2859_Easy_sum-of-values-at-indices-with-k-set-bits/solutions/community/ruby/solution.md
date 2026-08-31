# Simple solution

**Author:** musthafa_kareechiyil
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4659166/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4659166/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def sum_indices_with_k_set_bits(nums, k)
    sum = 0
    (0...nums.length).each do |i|
        sum += nums[i] if i.to_s(2).count("1") == k
    end
    sum
end
```