# 612 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3185688/](https://leetcode.com/problems/substring-xor-queries/solutions/3185688/)

---

```ruby
def substring_xor_queries a, q
    h, n, a = {}, [-1, -1], a.bytes.map! { _1 - 48 }
    i = a.index 0; h[0] = [i, i] if i
    i = a.index 1; h[1] = [i, i] if i
    for i in 0..(z = a.size) - 2
        next if a[i] == 0
        v = 1
        for j in i + 1...[i + 30, z].min
            v = (v << 1) | a[j]
            h[v] ||= [i, j]
        end
    end
    q.map! { h[_1.first ^ _1.last] || n }
end
```
714 ms
```ruby
def substring_xor_queries a, q
    h, n, a = {}, [-1, -1], a.bytes.map! { _1 - 48 }
    (1..[30, a.size].min).each do | w |
        m, d = (1 << w) - 1, w - 1
        h[v = a[0, w].join.to_i(2)] ||= [0, d]
        for i in w...a.size
            v = ((v << 1) | a[i]) & m
            h[v] ||= [i - d, i]
        end
    end
    q.map! { h[_1.first ^ _1.last] || n }
end
```