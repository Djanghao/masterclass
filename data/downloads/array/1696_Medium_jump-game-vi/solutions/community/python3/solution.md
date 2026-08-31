# Python DP + Deque | Simple Code | Faster Than 100%

**Author:** kirito18086
**Votes:** 16
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/980737/](https://leetcode.com/problems/jump-game-vi/solutions/980737/)

---

```
class Solution:
    def maxResult(self, nums: List[int], k: int) -> int:
        n = len(nums)
        deq = deque()
        deq.append(0)
        dp = [0] * n
        dp[0] = nums[0]
        for i in range(1, n):
            dp[i] = nums[i] + dp[deq[0]]     #Maximum Value in deque within that window
            if deq[0] < i - k + 1:
                deq.popleft()                #Check whether left bound is still accessible or not
            while deq and dp[deq[-1]] < dp[i]:         
                deq.pop()                    #Update deque with current i'th element
            deq.append(i)
        return dp[-1]                        #Return total score
```
Time Complexity: O(n)
Space Complexity: O(n)