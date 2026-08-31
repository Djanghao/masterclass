# Strictly O(n * n)

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/4632748/](https://leetcode.com/problems/distinct-echo-substrings/solutions/4632748/)

---

```ruby
def distinct_echo_substrings a
    t, n, r = {}, (a = a.bytes).size, 0
    for i in n.times
        z, j, c = 0, i - 1, t
        while (j += 1) < n
            z += 1
            break if z > i && z > n - j - 1
            c = (c[a[j]] ||= {0 => []})
            next unless v = c[0]
            v.shift while v.first&.< j - z
            v.first == j - z ?
                (r += 1; c[0] = nil) :
                v << j
        end
    end
    r
end
```
```ruby
def distinct_echo_substrings a
    t, n = {}, (a = a.bytes).size
    for i in n.times
        z, j, c = 0, i - 1, t
        while (j += 1) < n
            z += 1
            break if z > i && z > n - j - 1
            c = (c[a[j]] ||= {0 => []})
            c[0] << j
        end
    end
    r, p = 0, [false] * n
    dfs = -> c, l do
        v = c.delete 0
        for i in v
            break r += 1 if i - l >= 0 && p[i - l]
            p[i] = true
        end
        v.each { p[_1] = false }
        l += 1
        c.each_value { dfs[_1, l] }
    end
    t.each_value { dfs[_1, 1] }
    r
end
```