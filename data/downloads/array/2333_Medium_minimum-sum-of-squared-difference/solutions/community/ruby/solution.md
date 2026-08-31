# 261 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/3190960/](https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/3190960/)

---

```ruby
def min_sum_square_diff a, b, ka, kb
    a.map!.with_index { (_1 - b[_2]).abs }
    k, s, z, f = ka + kb, a.sum, a.size, 0
    return a.sum { _1 ** 2 } if k == 0
    return 0 if k >= s
    a.sort!
    for i in 0..z - 2
        b = f + (z - i) * a[i]
        if s - b <= k
            k -= s - b
            a.fill a[i], i + 1
            break
        end
        f += a[i]
    end
    if k > 0
        i = z - 1
        i -= 1 while i > 0 && a[i - 1] == a[i]
        x, k = k.divmod z - i
        for j in i...z
            (k -= 1; a[j] -= 1) if k > 0
            a[j] -= x
        end
    end
    a.sum { _1 ** 2 }
end
```