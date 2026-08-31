# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/6070171/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/6070171/)

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
# @param {String} s
# @return {Integer}
def second_highest(s)
  int_array = s.scan(/\\d/).uniq.reverse
  return -1 if int_array.size <= 1
  
  int_array.sort[-2].to_i
end
```