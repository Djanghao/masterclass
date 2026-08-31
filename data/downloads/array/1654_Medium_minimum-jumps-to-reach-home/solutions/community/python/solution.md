# Python, DFS (issue with 121 test case solved)

**Author:** warmr0bot
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/935401/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/935401/)

---

**UPD:**

I believe I have found the issue: I should be able to go back more if my back step is larger than my forward step. Thanks to @ShidaLei
 for pointing it out.

----------------------------------------------------------------------------------------------------------------
Updated, working DFS solution, still not 100% about the "toofar" condition, one possibly could come up with test cases where this still breaks:
```
def minimumJumps(self, forbidden: List[int], a: int, b: int, x: int) -> int:
	forbidden = set(forbidden)
	toofar = max(forbidden) + b if a < b else x
	minsofar = -1

	position_cost = {}  # only record the cost when jumping forward
	def minjumps(cur_pos = 0, jumped_back = False, jumpsmade = 0):
		nonlocal minsofar, toofar
		if cur_pos < 0 or \\
		   cur_pos in forbidden or \\
		   cur_pos - b > toofar or \\
		   minsofar > -1 and jumpsmade > minsofar: return 

		if cur_pos == x:
			minsofar = jumpsmade if minsofar == -1 else min(minsofar, jumpsmade)
			return

		if jumped_back: # can only jump forward at this point
			minjumps(cur_pos + a, False, jumpsmade + 1)
			return
		elif cur_pos not in position_cost: position_cost[cur_pos] = jumpsmade
		elif jumpsmade >= position_cost[cur_pos]: return
		else: position_cost[cur_pos] = jumpsmade

		minjumps(cur_pos + a, False, jumpsmade + 1)
		minjumps(cur_pos - b, True, jumpsmade + 1)

	minjumps()
	return minsofar
```

Test case, for which I used to end up with  `-1` instead of `121`:
```
[162,118,178,152,167,100,40,74,199,186,26,73,200,127,30,124,193,84,184,36,103,149,153,9,54,154,133,95,45,198,79,157,64,122,59,71,48,177,82,35,14,176,16,108,111,6,168,31,134,164,136,72,98]
29
98
80
```