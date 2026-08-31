# 520 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5585251/](https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5585251/)

---

```ruby
def pref t
    rc = 0
    x = (0..[t, 45 * 10 ** 12].min).bsearch do | x |
        c = 0
        d = 1
        y = d << 1
        while d <= x
            a, b = x .divmod y
            c += a * d + (b - d.pred).clamp(0, d)
            d <<= 1
            y <<= 1
        end
        c >= t && !!(rc = c)
    end
    s = 0
    p = 1
    d = 2
    y = d << 1
    while d <= x
        a, b = x .divmod y
        s += (a * d + (b - d.pred).clamp(0, d)) * p
        d <<= 1
        y <<= 1
        p += 1
    end
    s -
        50.times
          .select { x[_1] == 1 }
          .reverse!
          .take(rc - t)
          .sum
end

def find_products_of_elements(q) =
    q.map! { 2.pow pref(_2.next) - pref(_1), _3 }
```