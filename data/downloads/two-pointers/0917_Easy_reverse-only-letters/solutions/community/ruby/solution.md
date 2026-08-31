# Ruby - two lines

**Author:** ozovalihasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/2681256/](https://leetcode.com/problems/reverse-only-letters/solutions/2681256/)

---

```ruby
# @param {String} s
# @return {String}
def reverse_only_letters(s)
  letters = s.scan(/[a-zA-Z]/)
  s.gsub(/[a-z]/i) { letters.pop }
end
```