# Ruby simple solution 2-lines

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/6011261/](https://leetcode.com/problems/repeated-string-match/solutions/6011261/)

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
# @param {String} a
# @param {String} b
# @return {Integer}
def repeated_string_match(a, b, c = -1)
  return c if (a * c).include?(b) while (c += 1) < 4 || a.size * c < b.size * 2
  -1
end
```