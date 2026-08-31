# Ruby 1-line fast solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5915464/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5915464/)

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
# Time Limit Exceeded 539 / 581 testcases passed
# def minimum_steps(s, cnt = 0, i = s.size - 1, j = 0)
#   i -= 1 while s[i] == ?1
#   j += 1 while s[j] == ?0
#   return cnt if i < j
#   minimum_steps s[j..i].sub('10', '01'), cnt + 1  
# end

def minimum_steps(s, c = 0) = s.each_char.inject(0) { _2 == ?1 ? (c += 1 and _1) : _1 + c }
```