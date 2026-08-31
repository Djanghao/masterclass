# Python O(n) simple and fast solution || O(nlogn) sorting solution

**Author:** TovAm
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1676438/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1676438/)

---

**Python :**
Time complexity: *O(n)*
```
def targetIndices(self, nums: List[int], target: int) -> List[int]:
	index = 0
	count = 0

	for num in nums:
		if num < target:
			index += 1

		if num == target:
			count += 1

	return list(range(index, index + count))
```

Time complexity: *O(nlogn)*

```
def targetIndices(self, nums: List[int], target: int) -> List[int]:
	nums = sorted(nums)
	return [i for i in range(len(nums)) if nums[i]== target]
```

**Like it ? please upvote !**

