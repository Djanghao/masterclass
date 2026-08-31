# Python 3   ||   8 lines, sliding window w/ bin search    ||   T/S: 66% / 57%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/2821304/](https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/2821304/)

---

Pretty much what everyone else has, but for what it's worth, it does use a bin search to locate the windows.
```
class Solution:
    def numMovesStonesII(self, stones: List[int]) -> List[int]:
        
        stones.sort()
        n, lo = len(stones), inf

        for right in range(n):

            left= bisect_right(stones,stones[right]-n)

            if right-left == stones[right]-stones[left] == n-2: lo = min(lo, 2)
            
            else: lo = min(lo, n - (right-left+1))

        hi = max(stones[n-1]-stones[1], stones[n-2]-stones[0]) - n + 2    

        return [lo, hi]

```
[https://leetcode.com/problems/moving-stones-until-consecutive-ii/submissions/1273657024/](https://leetcode.com/problems/moving-stones-until-consecutive-ii/submissions/1273657024/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~ `len(stones)`.
