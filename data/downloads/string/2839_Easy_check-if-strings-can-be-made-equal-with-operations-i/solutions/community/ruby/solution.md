# Ruby 1-liner

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/4636129/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/4636129/)

---

```ruby
# @param {String} s1
# @param {String} s2
# @return {Boolean}
def can_be_equal(s1, s2)
  s1.chars.each_slice(2).map(&:first).sort() == s2.chars.each_slice(2).map(&:first).sort() && s1.chars.each_slice(2).map(&:last).sort() == s2.chars.each_slice(2).map(&:last).sort()
end
```