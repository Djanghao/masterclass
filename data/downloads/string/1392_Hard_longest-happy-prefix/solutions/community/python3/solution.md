# Python, Knuth-Morris-Pratt

**Author:** warmr0bot
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/976704/](https://leetcode.com/problems/longest-happy-prefix/solutions/976704/)

---

The algo is hard to understand, please see the video (not mine) to get an intuition:
https://www.youtube.com/watch?v=BXCEFAzhxGY
```
def longestPrefix(self, s: str) -> str:
	dp = [0] * len(s)

	for i in range(1, len(s)):
		j = dp[i-1]
		while j > 0 and s[j] != s[i]:
			j = dp[j-1]
		if s[j] == s[i]:
			dp[i] = j+1

	return s[len(s)-dp[-1]:]
```