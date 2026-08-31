# 94 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5459591/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5459591/)

---

```ruby
def palindrome_partition s, k
    z = (s = s.bytes).size
    if k == 1
        i, j, r = -1, z, 0
        while (i += 1) < (j -= 1)
            r += 1 if s[i] != s[j]
        end
        return r
    end
    if (m = z - k + 1) < 3
        return z == k || s.each_cons(2).any? { _1 == _2 } ? 0 : 1
    end
    g = Array.new(z.next) { [] }
    for si in z.times
        c, i, j = 0, si.next, si
        while (i -= 1) >= 0 && (j += 1) <= z && j - i <= m
            c += 1 if s[i] != s[j.pred]
            g[i] << [j, c]
        end
        c, i, j = 0, si.next, si.next
        while (i -= 1) >= 0 && (j += 1) <= z && j - i <= m
            c += 1 if s[i] != s[j.pred]
            g[i] << [j, c]
        end
    end
    t = Array.new(z.next) { [nil] * k.next }; t[0][0] = 0
    for i in z.times
        for ki in k.times
            next unless (kc = t[i][ki])
            for j, c in g[i]
                c += kc
                t[j][ki.next] = c unless t[j][ki.next]&.<= c
            end
        end
    end
    t.last[k]
end
```