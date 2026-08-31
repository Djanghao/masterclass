# 📌📌 Well-Coded and Easy Explanation || Use of Memoization 🐍

**Author:** abhi9Rai
**Votes:** 6
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/1670065/](https://leetcode.com/problems/jump-game-v/solutions/1670065/)

---

## IDEA:
For each index i, run search starting from i left and right up to d steps. This way, we can easily detect if arr[j] is blocking further jumps.

**So, we stop the search when we encounter j where arr[i] <= arr[j].**

To prevent re-computations, we need to memoise max jumps for every index in dp.

****
**Implementation :**
'''

	class Solution:
		def maxJumps(self, arr: List[int], d: int) -> int:

			dp = defaultdict(int)
			def dfs(i):
				if i in dp: return dp[i]
				m_path = 0
				for j in range(i+1,i+d+1):
					if j>=len(arr) or arr[j]>=arr[i]: break
					m_path = max(m_path,dfs(j))

				for j in range(i-1,i-d-1,-1):
					if j<0 or arr[j]>=arr[i]: break
					m_path = max(m_path,dfs(j))
				dp[i] = m_path+1
				return m_path+1

			res = 0
			for i in range(len(arr)):
				res = max(res,dfs(i))
			return res
	
**Feel free to ask if you have any doubt !!** \uD83E\uDD17
### Thanks & Upvote if you got any help !! \uD83E\uDD1E