# Python 3   ||   4 lines,  w/ comments   ||   T/S: 97%  /  28%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3619857/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3619857/)

---

```
class Solution:
    def makeSubKSumEqual(self, arr: List[int], k: int) -> int:

        g, d, ans = gcd(k,len(arr)), defaultdict(list), 0

        for i, a in enumerate(arr): d[i%g].append(a)            # <-- construct a dict of sorted lists
        for i in d:d[i].sort()                                  #     of`arr`elements that must be equal
            
        return sum(d[i][-j-1]-d[i][j]                           # <-- determine the number of moves to 
                   for j in range((len(d[i]))//2) for i in d)   #     make them equal. The sum of moves 
                                                                #     for a symmetric pair (e.g., d[i][1]
                                                                #     and d[i][-2]) is their difference.
```
[https://leetcode.com/problems/make-k-subarray-sums-equal/submissions/1292970054/](https://leetcode.com/problems/make-k-subarray-sums-equal/submissions/1292970054/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(arr).
