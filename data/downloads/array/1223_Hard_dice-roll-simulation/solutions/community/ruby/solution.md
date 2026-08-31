# ruby 2-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/4198607/](https://leetcode.com/problems/dice-roll-simulation/solutions/4198607/)

---

```
def die_simulator(n, a, m=[], l=0, t=0) =

  a[l]<t ? 0 : n<1 ? 1 : m[ n*96+t*6+l ] ||= (0..5).sum{ 
    die_simulator n-1, a, m, _1, l==_1 ? t+1 : 1 } % 1000000007
```