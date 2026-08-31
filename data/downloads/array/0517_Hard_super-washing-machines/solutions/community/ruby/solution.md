# ruby 1-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/5789106/](https://leetcode.com/problems/super-washing-machines/solutions/5789106/)

---

```ruby []
def find_min_moves(a) =

  a.sum(s=0)>(a.size*n=a.sum/a.size) ? -1 : a.map{ [d=_1-n,(s+=d).abs].max }.max
```