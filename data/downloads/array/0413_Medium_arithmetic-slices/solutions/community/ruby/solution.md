# Ruby 1-line solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/5427969/](https://leetcode.com/problems/arithmetic-slices/solutions/5427969/)

---

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def number_of_arithmetic_slices(nums, prev = 0)
  (2...nums.size).inject(0) { |res, i| (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2] ? prev += 1 : prev = 0) and res += prev }
end
```