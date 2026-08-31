# Ruby the shortest(5-lines) solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/6003880/](https://leetcode.com/problems/valid-parenthesis-string/solutions/6003880/)

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
# @return {Boolean}
def check_valid_string(s)
  st = s.chars.inject([]) { |st, ch|
    st.delete_at(st.rindex ?() and (next st) if ch == ?) && st.any?(?()
    st.delete_at(st.rindex ?*) and (next st) if ch == ?) && st.any?(?*)
    ch == ?) ? (return false) : st << ch }.join
  (?) while st.gsub!('(*', '')) or st.count(?() == 0
end
```