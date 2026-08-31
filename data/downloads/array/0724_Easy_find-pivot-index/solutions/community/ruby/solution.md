# Easy Ruby solution!

**Author:** islambahnas1
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/3300886/](https://leetcode.com/problems/find-pivot-index/solutions/3300886/)

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
# @return {Integer}
def pivot_index(x)
      left = 0 
      right = x.sum
      x.each_with_index do |num, index|
        right -= num
        return index if left == right
        left += num
      end
  return -1
end
```