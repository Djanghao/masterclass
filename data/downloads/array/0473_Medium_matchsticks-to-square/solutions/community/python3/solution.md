# Python | 380ms Faster than 78% | Soln w/ Explanation |  86% Less Memory

**Author:** IdealYuvi
**Votes:** 18
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/2281566/](https://leetcode.com/problems/matchsticks-to-square/solutions/2281566/)

---

```
def makesquare(self, matchsticks: List[int]) -> bool:
	total = sum(matchsticks)

	if total % 4: # if total isn't perfectly divisible by 4 then we can't make a square
		return False

	reqLen = total // 4 # calculate length of each side we require
	sides = [0] * 4
	matchsticks.sort(reverse = True) # sort in reverse so if biggest value is greater than reqLen we can return False

	def recurse(i):
		if i == len(matchsticks):
			return True

		for j in range(4):
			if sides[j] + matchsticks[i] <= reqLen:
				sides[j] += matchsticks[i]

				if recurse(i + 1):
					return True

				sides[j] -= matchsticks[i]

				# Important line, otherwise function will give TLE
				if sides[j] == 0:
					break

				"""
				Explanation:
				If sides[j] = 0, it means this is the first time we've added values to that side.
				If the backtrack search fails when adding the values to sides[j] and it remains 0, it will also fail for all sides from sides[j+1:].
				Because we are simply going through the previous recursive tree again for a different j+1 position.
				So we can effectively break from the for loop or directly return False.
				"""

		return False

	return recurse(0)
```

![image](./images/0.png)
