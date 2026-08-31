# Ruby 1-line solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-nesting/solutions/5835286/](https://leetcode.com/problems/array-nesting/solutions/5835286/)

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
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def array_nesting(nums, s = Set.new)
  (0...nums.size).map { |i, sz = s.size| (i = nums[i] while s.add?(i)) or s.size - sz }.max    
end
```