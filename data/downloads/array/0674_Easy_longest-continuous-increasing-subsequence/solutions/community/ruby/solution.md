# Ruby 1-line solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/5981850/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/5981850/)

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
def find_length_of_lcis(nums)
  (1...(nums << nums.last).size).inject([1, 1]) { |(max, cnt), i|
    nums[i - 1] >= nums[i] ? [[cnt, max].max, 1] : [max, cnt + 1] }.first
end
```