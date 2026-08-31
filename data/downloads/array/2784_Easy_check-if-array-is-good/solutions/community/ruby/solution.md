# Simple solution

**Author:** musthafa_kareechiyil
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/4615007/](https://leetcode.com/problems/check-if-array-is-good/solutions/4615007/)

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
def is_good(nums)
    max = nums.sort!.pop
    n = nums.length
    nums == (1..n).to_a && nums[-1] == max
end
```