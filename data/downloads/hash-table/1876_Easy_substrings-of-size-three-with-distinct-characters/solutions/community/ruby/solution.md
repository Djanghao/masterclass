# Ruby 1-Line Easy Solution

**Author:** vladhilko
**Votes:** 1
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/5650710/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/5650710/)

---

# Code
```
# @param {String} s
# @return {Integer}
def count_good_substrings(s)
  s.chars.each_cons(3).count { |a, b, c| a != b && b != c && a != c }
end
```