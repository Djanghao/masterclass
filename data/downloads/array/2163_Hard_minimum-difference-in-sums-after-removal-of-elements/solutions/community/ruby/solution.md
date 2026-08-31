# 488 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/3281799/](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/3281799/)

---

```ruby
class OMSet < CRBTreeMap

    def << x
        self[x] = (self[x] || 0) + 1
    end

    def erase x
        delete x if (self[x] -= 1).zero?
    end

    def min = min_key
    def max = max_key

end

def minimum_difference a
    ls, rs, l, r = 0, 0, *2.times.map { OMSet.new }
    [[l, a[0, z = a.size / 3]], [r, a[-z..]]].each do | p |
        t, v = *p
        v.tally.each { t[_1] = _2 }
        ls == 0 ? (ls = v.sum) : (rs = v.sum)
    end
    d = [nil] * (z + 1)
    for i in z...z * 2
        d[i - z] = ls
        if (x = l.max) > (y = a[i])
            ls -= x - y
            l.erase x
            l << y
        end
    end
    d[-1] = ls - rs
    for i in (z...z * 2).reverse_each
        if (x = a[i]) > (y = r.min)
            rs += x - y
            r.erase y
            r << x
        end
        d[i - z] -= rs
    end
    d.min
end
```