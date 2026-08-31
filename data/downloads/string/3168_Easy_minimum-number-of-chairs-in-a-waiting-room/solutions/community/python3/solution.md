# Python 3 || 2 lines, map, accumulate  || T/S: 99%  / 66%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5244163/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5244163/)

---


```
class Solution:
    def minimumChairs(self, s: str) -> int:

        arr = map(lambda x: 1 if x == 'E' else -1, s) 
        return max(accumulate(arr))
```
[https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/submissions/1274932800/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/submissions/1274932800/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.