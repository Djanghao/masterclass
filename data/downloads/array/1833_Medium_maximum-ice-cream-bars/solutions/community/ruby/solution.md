# ruby 1-liner

**Author:** _-k-
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3006256/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3006256/)

---

```
def max_ice_cream(costs, coins) =

  costs.sort.count{ 0 <= coins-=_1 }
```