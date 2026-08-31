# Monotonic Stack

**Author:** emmamm05
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/4090722/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/4090722/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
*Editorial: Monotonic Stack*

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def valid_subarrays(nums)
  stack = []
  result = 0
  nums.each.with_index do |n, i|
    until stack.empty? || n >= nums[stack.last]
      result += i - stack.pop
    end
    stack.push(i)
  end
  until stack.empty?
    result += nums.size - stack.pop
  end
  result
end
```