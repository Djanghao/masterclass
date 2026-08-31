# 319 ms, CC + BIT

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/4414438/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/4414438/)

---

```ruby
def number_of_pairs a, b, d
    h, r = Set[], 0
    for i in a.size.times
        x = a[i] -= b[i]
        h << x << x + d
    end
    b = [0] * (z = h.size)
    h = h.sort.each_with_index.to_h
    for x in a
        i = h[x + d]
        while i >= 0
            r += b[i]
            i = (i & i + 1) - 1
        end
        i = h[x]
        while i < z
            b[i] += 1
            i |= i + 1
        end
    end
    r
end
```