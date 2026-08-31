# Python simple O(n) solution

**Author:** TovAm
**Votes:** 67
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/1540578/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/1540578/)

---

**Python :**

```
def findMiddleIndex(self, nums: List[int]) -> int:               
	leftSum = 0
	rightSum = sum(nums)

	for i in range(len(nums)):
		if leftSum == rightSum - nums[i]:
			return i

		leftSum += nums[i]
		rightSum -= nums[i]

	return -1
```

**Like it ? please upvote !**