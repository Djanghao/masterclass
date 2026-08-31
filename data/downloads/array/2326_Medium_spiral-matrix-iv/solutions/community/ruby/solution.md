# ruby short 2-liner

**Author:** _-k-
**Votes:** 2
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5758357/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5758357/)

---

```ruby []
def spiral_matrix(m, n, h) =

  h ? [n.times.map{ h&.val&.tap{ h=h.next } or -1 }] +
  spiral_matrix(n,m-1,h).reverse.transpose : [[-1]*n]*m
```