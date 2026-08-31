# Python 3   ||   5 lines, dp,  w/ example   ||   T/S: 94% / 96%

**Author:** Spaulding_
**Votes:** 94
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120878/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120878/)

---

```
class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
                                                #   Example: scores = [4,4,6,5]
                                                #              ages = [2,1,5,1]

        dp = [0]*(1+max(ages))                  #         dp = [0, 0, 0, 0, 0]       
                                                #  score_age = [(4,1), (4,2), (5,1), (6,5)]
        score_age = sorted(zip(scores, ages))
                                                #   score   age     dp
        for score, age in score_age:            #   \u2013\u2013\u2013\u2013\u2013  \u2013\u2013\u2013\u2013\u2013    \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013
                                                #     4      1      [0, 4, 0, 0, 0, 0]
            dp[age] = score + max(dp[:age+1])   #     4      2      [0, 4, 8, 0, 0, 0]
                                                #     5      1      [0, 9, 8, 0, 0, 0]
        return max(dp)                          #     6      5      [0, 9, 8, 0, 0,15] 
                                                #                                   |
                                                #                                 return 
```
[https://leetcode.com/problems/best-team-with-no-conflicts/submissions/1279680104/](https://leetcode.com/problems/best-team-with-no-conflicts/submissions/1279680104/)

I could be wrong, but I think that time complexity is *O*(*N*^2) and space complexity is *O*(*M*), in which *N* ~ `len(scores)`, and *M* ~ `max(ages)`.