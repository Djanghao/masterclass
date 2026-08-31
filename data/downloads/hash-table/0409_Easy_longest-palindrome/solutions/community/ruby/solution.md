# [Ruby] 1-liner, Bit Magic

**Author:** 0x81
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/2998823/](https://leetcode.com/problems/longest-palindrome/solutions/2998823/)

---

```ruby
def longest_palindrome(s) =
    [s.size, s.each_char.tally.sum { _2 & ~1 } + 1].min
```
```ruby
def longest_palindrome(s) =
    s.each_char.tally.reduce(0) do | r, (_, v) |
        r + (v & ~1) | v & 1
    end
```