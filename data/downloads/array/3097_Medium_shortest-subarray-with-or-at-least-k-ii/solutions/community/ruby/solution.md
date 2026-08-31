# Ruby simple solution

**Author:** alobzov
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6029823/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6029823/)

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
# @param {Integer} k
# @return {Integer}
def minimum_subarray_length(nums, k, d = {})
    return 1 if nums.max >= k
    return -1 if nums.inject(&:|) < k
    nums.each_with_index.inject(nums.size + 1) do |r, (n, i)|
      d = d.each_with_object({}) { |(k, v), d| d[k | n] = v }.merge({n => i})
      [d.select { _1 >= k }.values.map { i - _1 + 1 }.min || r, r].min
    end
end
```