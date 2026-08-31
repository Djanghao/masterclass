# Python Easy Solution || Less Line Of Code || Heapify

**Author:** vaibhav0077
**Votes:** 14
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189540/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189540/)

---

**Please Upvote If you find Useful**
```
class Solution:
	def isPossible(self, target: List[int]) -> bool:

		heapq._heapify_max(target)
		s = sum(target)

		while target[0] != 1:
			sub = s - target[0]
			if sub == 0: return False
			n = max((target[0] - 1) // sub, 1)
			s -= n * sub
			target0 = target[0] - n * sub
			if target0 < 1: return False
			heapq._heapreplace_max(target, target0)

		return True
	```