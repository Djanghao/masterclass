# ruby 1-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5636007/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5636007/)

---

```
def smallest_distance_pair(a, k) =

  (0..).bsearch{|d| a.sort!.sum(j=i=0){ j+=1 while a[j]+d<_1; ~j+i+=1 } >= k }
```