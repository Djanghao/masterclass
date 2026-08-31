# Python, The Fastest Solution, O(N^2) via Knuth-Morris-Pratt

**Author:** warmr0bot
**Votes:** 9
**Link:** [https://leetcode.com/problems/encode-string-with-shortest-length/solutions/985978/](https://leetcode.com/problems/encode-string-with-shortest-length/solutions/985978/)

---

The idea is to use KMP algorithm to build the prefix array. I suggest those who are unfamiliar with KMP to first solve the problem below, which could be considered the subproblem of our problem: https://leetcode.com/problems/repeated-substring-pattern/
To get an intuition for KMP, I suggest watching this video: https://www.youtube.com/watch?v=BXCEFAzhxGY

There's a DP inside a DP happening here :)
I could have replaced the string parameter with start and end indices, but didn't care to.
```
def encode(self, s: str) -> str:

	@lru_cache(None)
	def mincode(s):
		'''find the shortest representation of the string and return it'''
		if len(s) < 5: return s
		dp = [0]

		for i in range(1, len(s)):
			j = dp[i-1]
			while j > 0 and s[i] != s[j]: j = dp[j-1]
			if s[i] == s[j]: j += 1
			dp += [j]

		smallest = s
		for prefix_len in range(len(s), 0, -1):
			repeat_len = prefix_len - dp[prefix_len-1]
			if repeat_len < prefix_len and prefix_len % repeat_len == 0: # we have a repeat
				prefix_compressed = mincode(s[:repeat_len])
				left_compressed = f'{prefix_len // repeat_len}[{prefix_compressed}]'
			else:
				left_compressed = s[:prefix_len]

			right_compressed = mincode(s[prefix_len:])
			if len(left_compressed) + len(right_compressed) < len(smallest):
				smallest = left_compressed + right_compressed

		return smallest

	return mincode(s)
```
Please let me know if you have questions about the solution, I'm pretty proud of it :)