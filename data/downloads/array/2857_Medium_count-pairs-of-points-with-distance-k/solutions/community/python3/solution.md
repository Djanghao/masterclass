# Python 3   ||   6 lines,  Counter  ||   T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4053483/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4053483/)

---

```
class Solution:
    def countPairs(self, nums: List[List[int]], k: int) -> int:

        ans, d = 0,Counter(map(tuple,nums))
        R = [(i, k-i) for i in range(k+1)]

        for x, y in nums:
            d[(x, y)]-= 1
            ans+= sum(d[(x^i, y^j)] for i,j in R)

        return ans 
```
[https://leetcode.com/problems/count-pairs-of-points-with-distance-k/submissions/1051333781/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/submissions/1051333781/)

I could be wrong, but I think that time complexity is *O*(*NK*) and space complexity is *O*(*N* + *K*), in which *N* ~ `len(nums)` and  in which *K* ~ `k`.