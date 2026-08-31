# Ruby easy 1-line solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/5931595/](https://leetcode.com/problems/set-mismatch/solutions/5931595/)

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
# @return {Integer[]}
def find_error_nums(nums)
  [nums.tally.find { _2 == 2 }.first, ((1..nums.size).to_a - nums).first]     
end
```