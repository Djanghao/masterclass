# Python 3 -> 91.11% faster. 52ms time. Explanation added

**Author:** mybuddy29
**Votes:** 227
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/819148/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/819148/)

---

**Suggestions to make it better are always welcomed.**

**2 possible solutions:**
1. For every i element, iterate the list with j as index. If i!=j and nums[j]<nums[i], we can update the count for that number. Time: O(n2). Space: O(1)
2. This is optimal solution. We can sort the list and store in another temp list. We use dictionary to store the counts and later use it to create result. Time: O(n log n) bcoz of sort. Space: O(n) bcoz of dictionary.

**Explanation of solution 2:**
nums = 8, 1, 2, 2, 3
1. We sort the list bcoz we don't want to keep traversing the list back and forth. After sorting, we get temp = 1, 2, 2, 3, 8
2. We traverse temp list. If we find unique element, we know all the previous elements have been recorded. So we add this unique element to the dictionary with index i as value.
If duplicate element is encountered, we don't add it and don't update the value in dictionary.
3. After the dictionary is constructed, we create output after doing O(1) lookup in dictionary for nums[i]

```
def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
	temp = sorted(nums)
	mapping = {}
	result = []
	for i in range(len(temp)):
		if temp[i] not in mapping:
			mapping[temp[i]] = i
	for i in range(len(nums)):
		result.append(mapping[nums[i]])
	return result
```

**If this solution helped, please upvote it for others to take advantage of it and learn their techniques**