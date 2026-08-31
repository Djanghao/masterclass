# 258 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/3262137/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/3262137/)

---

```ruby
def can_convert_string s, t, k
    return false if s.size != t.size
    s, t = *[s, t].map!(&:bytes)
    h = (0...s.size).map do
        x, y = s[_1], t[_1]
        y + (y < x ? 26 : 0) - x 
    end .tally
    h.delete 0
    h.empty? || begin
        x, y = *h.max_by { [_2, _1] }
        (y - 1) * 26 + x <= k
    end
end
```