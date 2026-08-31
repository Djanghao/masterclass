# Python3 || 4 lines, dict, enumerate || T/S:  95%  /  100%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/4828957/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/4828957/)

---

```
class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        
        d = defaultdict(list)

        for i, ch in enumerate(s):
            d[ch].append(i)

        return all(b-a-1 == distance[ord(ch)-97] for ch, (a,b) in d.items()
```
[https://leetcode.com/problems/check-distances-between-same-letters/submissions/791498560/](https://leetcode.com/problems/check-distances-between-same-letters/submissions/791498560/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.