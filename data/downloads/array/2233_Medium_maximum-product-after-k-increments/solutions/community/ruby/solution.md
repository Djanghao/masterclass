# PQ

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/3281934/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/3281934/)

---

```ruby
def maximum_product a, k
    t = CRBTreeMap.new
    return 0 if (c = a.tally)[0]&.> k
    c.each { t[_1] = _2 }
    loop do
        if (v = t[x = t.min_key]) < k
            k -= v
            t.delete_min
            t[x += 1] ||= 0
            t[x] += v
        else
            t.delete_min if (t[x] -= k).zero?
            t[x += 1] ||= 0
            t[x] += k
            break
        end
    end
    t.reduce 1 do | r, (x, v) |
        v.times.reduce r do
            (_1 * x) % 1_000_000_007
        end
    end
end
```