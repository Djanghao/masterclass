# Python - simple and fast meet in the middle solution

**Author:** sedim
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-subsequence-sum/solutions/1521216/](https://leetcode.com/problems/closest-subsequence-sum/solutions/1521216/)

---

So this is another meet in the middle solution. I won't go into detailed explanations as others have done much better job in this forum. 

I will note though that my solution runs a bit faster than other published python solutions because of two optimisations in the binary search loop:
* before doing binary search within second sums array, we can check its first and last element to see if we have a chance to find better sum difference in this iteration 
* we do early exit if we encounter target sum

```python
def minAbsDifference(self, nums: List[int], goal: int) -> int:
	part1, part2 = nums[::2], nums[1::2]

	parts_sum = [{0}, {0}]
	for i, numbers in enumerate([part1, part2]):
		for num in numbers:
			parts_sum[i] |= {num + s for s in parts_sum[i]}
	part1_sum, part2_sum = parts_sum
	part2_sum = sorted(part2_sum)

	result = 10**10
	for num in part1_sum:
		target = goal - num
		if part2_sum[0] - result < target < part2_sum[-1] + result:
			index = bisect_left(part2_sum, target)
			for i in [index-1, index]:
				if 0 <= i < len(part2_sum):
					result = min(result, abs(target - part2_sum[i]))
					if result == 0:
						return 0

	return result
```