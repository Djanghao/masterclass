# use range then compate

**Author:** Hanke17
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/3218632/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/3218632/)

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
# @return {Boolean}
def is_consecutive(nums)
    a = ((nums.min)..(nums.max)).to_a
    p nums.sort == a  
end
```