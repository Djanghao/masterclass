# [Ruby]

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3087476/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3087476/)

---

```ruby
def make_strings_equal(s, t) =
    s.include?(?1) == t.include?(?1)
```
```ruby
def make_strings_equal(s, t) = !s[?1] == !t[?1]
```
Explanation: https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3083831/java-c-python-1-line-check-1/