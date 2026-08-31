# Python Concise Backtracking

**Author:** WangQiuc
**Votes:** 16
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1009406/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1009406/)

---

The idea is straighforward, try to place the "large" number as front as possible.
```
def constructDistancedSequence(n):
	m = 2*n-1
	A, V = [0] * m, [False] * (n+1)
	def dfs(i):
		if i == m:
			return all(A)
		if A[i]:
			return dfs(i+1)
		for x in range(n, 0, -1):
		    j = i if x == 1 else i+x    # This is only to combine some lines of code.
			if not V[x] and j < m and not A[j]:
				A[i], A[j], V[x] = x, x, True
				if dfs(i+1):
					return True
				A[i], A[j], V[x] = 0, 0, False
		return False
	dfs(0)
	return A
```