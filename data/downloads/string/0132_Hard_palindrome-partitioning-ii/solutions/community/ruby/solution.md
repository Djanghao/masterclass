# 372 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/5453534/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/5453534/)

---

```ruby
def min_cut s
    return 0 if s == s.reverse
    z = (s = s.bytes).size
    g = Array.new(z.next) { [] }
    for k in z.times
        i = k + 1
        d = k
        while (i -= 1) >= 0 && (d += 1) <= z && s[i] == s[d - 1]
            g[i] << d
        end
        i = k + 1
        d = k + 1
        while (i -= 1) >= 0 && (d += 1) <= z && s[i] == s[d - 1]
            g[i] << d
        end
    end
    v = [false] * z.next; v[0] = true
    q = [res = 0]
    loop do
        q.size.times do
            for j in g[q.shift]
                return res if j == z
                next if v[j]
                v[j] = true
                q << j
            end
        end
        res += 1
    end
end
```