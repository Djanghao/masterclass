# Beats 100% with Ruby

**Author:** fhndiritu
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/4535048/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/4535048/)

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
# @param {Integer} num
# @return {Integer}
def minimum_sum(num)
    nums = num.to_s.chars.min(4)
    (nums[0]+nums[2]).to_i+(nums[1]+nums[3]).to_i
end
```