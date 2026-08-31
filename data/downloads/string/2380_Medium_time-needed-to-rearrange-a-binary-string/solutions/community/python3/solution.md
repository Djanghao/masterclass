# [Python3] O(N) dp approach

**Author:** ye15
**Votes:** 56
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2454195/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2454195/)

---

Please pull this git [commit](https://github.com/gaosanyong/leetcode/commit/e999ea07dc2ea2e8b7aad97696f67a3b965e496d) for solutions of biweekly 85. 

**Intuition**
Given the size of the problem, it is okay to run a simulation which takes `O(N^2)` to complete. However, a faster `O(N)` DP approach is available. 
Here, we consider the task as "moving 1s to the left". Two key observatoins are 
1) to move '1' at `i`th index it takes at least x steps if there are x '0's preceeding it. 
2) if there is a '1' at 'i-1'st index, it takes at least one more step to move this '1' to proper position. 

**Analysis**
Time complexity `O(N)`
Space complexity `O(1)`
```
class Solution: 
    def secondsToRemoveOccurrences(self, s: str) -> int:
        ans = prefix = prev = 0 
        for i, ch in enumerate(s): 
            if ch == '1': 
                ans = max(prev, i - prefix)
                prefix += 1
                if ans: prev = ans+1
        return ans 
```