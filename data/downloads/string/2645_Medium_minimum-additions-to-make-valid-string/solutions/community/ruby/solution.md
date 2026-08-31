# Not a 1-liner (I don't hate @lee215)

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3424693/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3424693/)

---

```ruby
def add_minimum s
    r, t = 0, 0
    s.each_byte do
        (c = _1 - 97) > t ?
            (r, t = r + c - t, c + 1) :
            c == t ? t += 1 : begin
                r, t = r + 3 + c - t, c + 1
            end
        t = 0 if t == 3
    end
    r + (t == 0 ? 0 : 3 - t)
end
```