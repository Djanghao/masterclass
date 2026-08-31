# Ruby simple solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/5878213/](https://leetcode.com/problems/valid-triangle-number/solutions/5878213/)

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
def triangle_number(nums)
  nums.sort!
  (nums.size - 1).downto(1).inject(0) do |res, i, l = 0, r = (i - 1), n = nums[i]|
    nums[l] + nums[r] > n ? (res, r = res + r - l, r - 1) : l += 1 while l < r
    res
  end
end
```