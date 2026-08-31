# Python simple one pass solution

**Author:** TovAm
**Votes:** 38
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1540499/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1540499/)

---

**Python :**

```
def maximumDifference(self, nums: List[int]) -> int:
	maxDiff = -1

	minNum = nums[0]

	for i in range(len(nums)):
		maxDiff = max(maxDiff, nums[i] - minNum)
		minNum = min(minNum, nums[i])

	return maxDiff if maxDiff != 0 else -1
```

**Like it ? please upvote !**