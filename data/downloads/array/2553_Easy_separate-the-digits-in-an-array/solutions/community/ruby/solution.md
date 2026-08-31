# ruby one liner

**Author:** Hanke17
**Votes:** 1
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3157655/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3157655/)

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
# @return {Integer[]}
def separate_digits(nums)
    p nums.join("").chars.map(&:to_i)
end
```