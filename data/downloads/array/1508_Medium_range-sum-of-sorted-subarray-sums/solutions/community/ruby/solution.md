# Easy to understand simple few lines solution

**Author:** archi_parikh1
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5603402/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5603402/)

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
# @param {Integer} n
# @param {Integer} left
# @param {Integer} right
# @return {Integer}
def range_sum(nums, n, left, right)
    sas = []
    (0..n-1).each do |i|
        sas << nums[i]
        (i+1..n-1).each do |j|
            sas << nums[i..j].sum
        end
    end

    sas.sort[left-1..right-1].sum % (10**9 + 7)
end
```