# Python O(n) simple and short solution

**Author:** TovAm
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/1564829/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/1564829/)

---

**Python :**

```
def minOperations(self, nums: List[int]) -> int:
	ans = 0

	for i in range(1, len(nums)):
		if nums[i] <= nums[i - 1]:
			ans += (nums[i - 1] - nums[i] + 1)
			nums[i] = (nums[i - 1] + 1)

	return ans
```

**Like it ? please upvote !**