# Python 3 || 14 lines, dp  || T/S: 94% / 72%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5148787/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5148787/)

---

I left my first version of `isBalanced` in the code as a comment. The second version improved the runtime significantly.

```
class Solution:
    def minimumSubstringsInPartition(self, s: str) -> int:

        def isBalanced(values: list, cnt = None)-> bool:
                    
            for v in values:
                if cnt and v!=cnt: return False 
                cnt = v
            return True

        #def isBalanced(values: list)-> bool:
        #        return len(set(values)) == 1   

        dp, n = [0], len(s)
        dp.extend([n] * n)
    
        for left in range(n):
            ctr = defaultdict(int)

            for rght in range(left, n):

                ctr[s[rght]]+= 1

                if isBalanced(ctr.values()):
                    dp[rght +1] = min(dp[rght + 1], dp[left] + 1)

        return dp[n]
```
[https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/submissions/1256216049/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/submissions/1256216049/)



I could be wrong, but I think that time complexity is *O*(*N*^2) and space complexity is *O*(*N*), in which *N* ~ `n`. (Note that `len(values)` <= 26, so `isBalanced` is constant time and space.)