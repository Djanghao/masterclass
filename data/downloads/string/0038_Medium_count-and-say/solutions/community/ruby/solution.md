# [Ruby] 1-liner

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-and-say/solutions/748718/](https://leetcode.com/problems/count-and-say/solutions/748718/)

---

```ruby
def count_and_say(n) =
    (n - 1).times.reduce(?1) do
        _1.gsub(/(.)\\1*/) { | s | s.size.to_s + s[0] }
    end
```