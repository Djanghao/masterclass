# Python 3 | No Math, Pure O(N) DP | Explanations (Very Detailed)

**Author:** idontknoooo
**Votes:** 23
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/845615/](https://leetcode.com/problems/4-keys-keyboard/solutions/845615/)

---

Most solutions out there are Math related or `O(N^2)`, they are either difficult to come up with (especially during an interview) or not as efficient, so I figured to share this pure **Dynamic Programming** solution.

From my point of view, *Dynamic Programming* is way easier to think than *Math Induction*, because *Induction* takes time and difficult to draw a conclusion for non-obvious question like this.

### Explanation
- There are only 3 scenarios can put `A` on screen:
	- Scenario 1: Simply use `key1` to put `A`
	- Scenario 2: If we copied something to clipboard in previous step, simply use `key4` to paste whatever in the clipboard
	- Scenario 3: `Ctrl A + Ctrl C + Ctrl V` -> `key2 + key3 + key4`. This takes 3 steps to double number of `A` from 3 steps ago.
- Once you understand above, the rest are easy to implement
- Note that we need to maintain a `2xN` matrix for clipboard information, so that Scenario 2 & 3 know what information they were used before 
	- `dp[0][i]`: Scenario 1 at step `i`
	- `dp[1][i]`: Scenario 2 at step `i`
	- `dp[2][i]`: Scenario 3 at step `i`
	- `clipboard[0][i]`: Clipboard info for Scenario 2 at step `i`
	- `clipboard[1][i]`: Clipboard info for Scenario 3 at step `i`
- More explanation about Scenario 2
	- We can either use clipboard from previous step if previous step was also Scenario 2
	- Or use clipboard from previous step if previous step was Scenario 3
	- Make sure discuss them differently
	- `if res_s2 <= res_s3` is same as `if res_s2 < res_s3 or res_s2 == res_s3 and clipboard[0][i-1] < clipboard[1][i-1]`
		- The reason is clipboard for Scenario 3 will always greater than or equal to clipboard for Scenario 2
		- Thus, if there is a tie `res_s2 == res_s3`, we always take Scenario 3
- The result is in last step, the largest among 3 scenarios
- Time Complexity: `O(N)`
- Space Complexity: `O(N)`
### Implementation
```
class Solution:
    def maxA(self, N: int) -> int:
        dp = [[0] * (N+1) for _ in range(3)]                              # 3xN matrix to store info of 3 scenarios at each step
        clipboard = [[0] * (N+1) for _ in range(2)]                       # 2xN matrix to store clipboard info of 2nd & 3rd scenarios
        for i in range(1, N+1):
            dp[0][i] = max(dp[0][i-1], dp[1][i-1], dp[2][i-1]) + 1        # scenario1: key1
            if i >= 1:                                                    # scenario2: key4 
                res_s2 = dp[1][i-1] + clipboard[0][i-1]                   # use paste result & clipboard from senario 2
                res_s3 = dp[2][i-1] + clipboard[1][i-1]                   # use paste result & clipboard from senario 3 
                if res_s2 <= res_s3:
                    dp[1][i] = res_s3
                    clipboard[0][i] = clipboard[1][i-1]
                else:    
                    dp[1][i] = res_s2
                    clipboard[0][i] = clipboard[0][i-1]
            if i >= 3:                                                    # scenario3: key2+key3+key4
                clipboard[1][i] = max(dp[0][i-3], dp[1][i-3], dp[2][i-3]) # find out largest value 3 steps before
                dp[2][i] = clipboard[1][i]*2                              # double it
        return max(dp[i][-1] for i in range(3))                           # in last step, max among 3 is the result
```