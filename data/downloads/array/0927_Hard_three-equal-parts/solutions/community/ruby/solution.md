# ruby 1-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/three-equal-parts/solutions/3398016/](https://leetcode.com/problems/three-equal-parts/solutions/3398016/)

---

```
def three_equal_parts(a) =

  a.sum>0 ? a.join[/^((0*(1.*))0*\\3)0*\\3$/] ? [$2.size-1,$1.size] : [-1,-1] : [0,2]
```