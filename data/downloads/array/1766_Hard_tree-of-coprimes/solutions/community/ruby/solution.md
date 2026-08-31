# 1028 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-of-coprimes/solutions/3285784/](https://leetcode.com/problems/tree-of-coprimes/solutions/3285784/)

---

```ruby
def get_coprimes v, e
    unless @coprimes
        @coprimes = Array.new(51) { [] }
        (1..50).each do | x |
            (1..50).each do
                @coprimes[x] << _1 if x.gcd(_1) == 1
            end
        end
    end
    t = Array.new(z = v.size) { [] }
    e.each do | (a, b) |
        t[a] << b; t[b] << a
    end
    res = [nil] * z
    last = Array.new(51) { [] }
    f = -> i, p, c do
        a, m = -1, -1
        @coprimes[v[i]].each do
            next unless ip = last[_1].last
            a, m = *ip if ip.last > m
        end
        res[i] = a
        last[v[i]] << [i, c]
        t[i].each { f.(_1, i, c + 1) if _1 != p }
        last[v[i]].pop
    end
    f.(0, -1, 0)
    res
end
```