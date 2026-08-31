# Python 3   ||   2 lines,   prefix   ||   T/S: 96% / 39%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/3587069/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/3587069/)

---

```
class Solution:
    def canEat(self, candiesCount: List[int], queries: List[List[int]]) -> List[bool]:
                                                                  
        pref = list(accumulate(candiesCount, initial = 0))         
        
        return [pref[candy]//cap <= day < pref[candy + 1]
                           for candy, day, cap in queries]
```
[https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/submissions/1280015235/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/submissions/1280015235/)


I could be wrong, but I think that time complexity is *O*(*M* + *N*) and space complexity is *O*(*N*), in which *M* ~ `len(queries)` and *N* ~ `len(candiesCount)`.