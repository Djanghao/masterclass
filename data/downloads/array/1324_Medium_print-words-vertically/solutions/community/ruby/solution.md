# one more

**Author:** legakh
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/3521648/](https://leetcode.com/problems/print-words-vertically/solutions/3521648/)

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
# @param {String} s
# @return {String[]}
def print_vertically(s)
  words = s.split(' ')
  num_of_lines = words.max_by(&:length).length
  num_of_lines.times.with_object([]) { |n, arr| arr << words.map { |w| w[n] || ' ' }.join.rstrip }
end
```