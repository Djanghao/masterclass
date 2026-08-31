# Python 3   ||   9 lines,  sort & iterate   ||   T/S: 77% / 42%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3320764/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3320764/)

---

```
class Solution:
    def findScore(self, nums: List[int]) -> int:

        n, score, seen = len(nums), 0, set()

        queue = sorted(enumerate(nums), key = lambda x: (x[1],x[0]))

        for idx, num in queue:
            if idx in seen: continue

            score+= num
            
            seen.add(idx)
            if idx > 0  : seen.add(idx-1)
            if idx < n-1: seen.add(idx+1) 
            
        return score
```
[https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/submissions/1294028756/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/submissions/1294028756/)


I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.