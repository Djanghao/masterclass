# DFS

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/3243057/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/3243057/)

---

```ruby
def sufficient_subset t, l
    f = -> t, s do
        s, c = s + t.val, -1e11
        [t.left, t.right].each do
            next unless _1
            r, d = *f.(_1, s)
            _1 == t.left ?
                (t.left  = nil) :
                (t.right = nil) if d
            c = r if r > c
        end
        c = 0 if c == -1e11
        [t.val + c, s + c < l]
    end
    f.(t, 0).last ? nil : t
end
```