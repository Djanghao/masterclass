# Python 3   |||   7 lines,  w/ example   ||   T/S: 62% / 99%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2854521/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2854521/)

---

```
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:

        d, iMed = defaultdict(int), nums.index(k)   #  Ex:  [3, 2, 1, 4, 5]   k = 4
        ans, diff, d[0] = 0, 0, 1
                                                    #   i     n    diff   ans      d
        for i, n in enumerate(nums):                #  \u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013   \u2013\u2013\u2013\u2013
                                                    #   0     3     -1     0    {0: 1, -1: 1}
            diff+= (n>k) - (n<k)                    #   1     2     -2     0    {0: 1, -1: 1, -2: 1}
                                                    #   2     1     -3     0    {0: 1, -1: 1, -2: 1, -3: 1}
            if i < iMed: d[diff]+= 1                #   3     4     -3     1    {0: 1, -1: 1, -2: 1, -3: 1, -4: 0}
                                                    #   4     5     -2     3    {0: 1, -1: 1, -2: 1, -3: 1, -4: 0}
            else: ans += (d[diff] + d[diff-1])      #                      |
                                                    #                    return 3
        return ans
```
[https://leetcode.com/problems/count-subarrays-with-median-k/submissions/1277527921/](https://leetcode.com/problems/count-subarrays-with-median-k/submissions/1277527921/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*^2) / *O*(*N*log*N*), in which *N* ~ `len(nums)`