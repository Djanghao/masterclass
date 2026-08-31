# 1984 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3261267/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3261267/)

---

```ruby
require 'prime'

def find_valid_split a
    c, d, l, r = 0, {}, *2.times.map { Hash.new 0 }
    a.each do
        (d[_1] ||= _1.prime_division).each do | (k, v) |
            r[k] += v
        end
    end
    for i in 0..a.size - 2
        d[a[i]].each do | (k, v) |
            c -= 1 if (r[k] -= v) == 0 && l[k] > 0
            c += 1 if (l[k] += v) == v && r[k] > 0
        end
        return i if c == 0
    end
    -1
end
```
2010 ms:
```ruby
require 'prime'

def find_valid_split a
    d, f = {}, {}
    a.each_with_index do | x, i |
        (d[x] ||= x.prime_division).each do
           (f[_1.first] ||= [i, i])[-1] = i
        end
    end
    r = f.values.sort_by!(&:first)
    r.empty? ? (e = 0) : begin
        e = r.shift.last
        while (x = r.shift)&.first&.<= e
            e = [e, x.last].max
        end
    end
    e < a.size - 1 ? e : -1
end
```