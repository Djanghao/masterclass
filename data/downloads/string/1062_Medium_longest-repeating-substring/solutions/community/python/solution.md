# [Python] DP solution with explanations and follow-up

**Author:** zzczg
**Votes:** 21
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/429950/](https://leetcode.com/problems/longest-repeating-substring/solutions/429950/)

---

What kind of DP question is this\uFF1Afind **longest** XYZ
**Subproblem**\uFF1ABy moving backward the current index for 1 step, are we still gonna get a repeating substring?
**Transition funcion**\uFF1Adp[i][j] = dp[i-1][j-1] + 1 if S[i]==S[j] else 0
**Initialization**: dp[0][0] = 0.
**Calculation order**\uFF1Ai is from 1 to len(S)+1, j is from  i+1 to len(S)+1

```python
def longestRepeatingSubstring(S: str) -> int:
    if not S:
        return 0
    n = len(S)
    dp = [[0 for j in range(n + 1)] for i in range(n + 1)]
    res = 0
    for i in range(1, n+1):
            for j in range(i+1, n+1):
                dp[i][j] = dp[i-1][j-1] + 1 if S[i-1] == S[j-1] else 0
                res = max(res, dp[i][j])
    return res
```

**Follow-up:**
What if overlapping is not allowed? For example, assume S is "mississipi, the answer will be 3 instead of 4 as `issi` with overlapping character `i` is not a qualified answer.
```python
# we need to make sure the distance between i and j are 
# greater than the length of previous substring
if S[i - 1] == S[j - 1] and j-i > dp[i-1][j-1]: 
		dp[i][j] = dp[i - 1][j - 1] + 1
		res = max(res, dp[i][j])
	else:
		dp[i][j] = 0
```

Time complexity is O(N^2)