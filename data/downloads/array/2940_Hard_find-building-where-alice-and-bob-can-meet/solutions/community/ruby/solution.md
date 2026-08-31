# 649 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4403765/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4403765/)

---

```ruby
def leftmost_building_queries a, q
    n, z = a.size, 1
    z *= 2 while z < n
    (t = [0] * (z * 2))[z, n] = a
    for i in (1...z).reverse_each
        t[i] = t[i * 2, 2].max
    end
    x = xi = nil
    f = -> i, l, r do
        return false if r <= xi || t[i] <= x
        return i - z if i >= z
        h, i = (l + r) / 2, i * 2
        f[i, l, h] || f[i + 1, h, r]
    end
    q.map! do
        i, j = _1.sort!
        next j if i == j || (x = a[i]) < a[j]
        next -1 if (xi = j + 1) == n
        f[1, 0, z] || -1
    end
end
```