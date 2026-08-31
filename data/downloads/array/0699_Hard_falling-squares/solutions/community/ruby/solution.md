# 87 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/falling-squares/solutions/4412035/](https://leetcode.com/problems/falling-squares/solutions/4412035/)

---

```ruby
def falling_squares p
    h = p.each_with_object(Set[]) do
        _2 << _1[0] << _1.sum.pred
    end .sort.each_with_index.to_h
    m, a = 0, [0] * h.size
    p.map! do | x, s |
        i = h[x]
        j = h[x + s - 1]
        c = a[i..j].max
        a[i..j] = [c += s] * (j - i + 1)
        m = [m, c].max
    end
end
```