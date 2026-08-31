# 275 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/3586724/](https://leetcode.com/problems/similar-string-groups/solutions/3586724/)

---

```ruby
def num_similar_groups a
    a.uniq!
    p, w = (z = a.size).times.to_a, a.map!(&:bytes).last.size
    s = -> x, y, c = 0 do
        !w.times do
            return 1 if x[_1] != y [_1] && (c += 1) > 2
        end
    end
    f = -> x { p[x] == x ? x : (p[x] = f.(p[x])) }
    for i in 0..z - 2
        x = a[i]
        for j in i.succ...z
            next if (ri = f.(i)) == (rj = f.(j)) ||
                    s.(x, a[j])
            p[rj] = ri
        end
    end
    Set[*z.times.map { f.(_1) }].size
end
```