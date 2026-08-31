# [Py]All 4 Methods: Intuitions Walk-through Wrong answer explanations for Beginners [Python]]

**Author:** ziaiz-zythoniz
**Votes:** 792
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/2107606/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/2107606/)

---


## \u2705 Method 1: sort in place using `[:]`
```
	def removeDuplicates(self, nums: List[int]) -> int:
		nums[:] = sorted(set(nums))
		return len(nums)
```


**Time Complexity:** `O(n)`
**Space Complexity:** `O(1)`


### \u274C Common Wrong Answers:
```
	nums = sorted(set(nums))
	return len(nums)
```
\xA0`nums =`\xA0 doesn't replace elements in the original list.
 `nums[:] =`\xA0replaces element in place

In short, without `[:]`, we're creating a new list object, which is against what this problem is asking for:
"Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory."

-----------------------
##  \u2705 Method 2: Two-pointers
### \uD83E\uDD14 Initial Intuition:
Use a `slow`  pointer to "lock" the "wanted" element, and use a `fast` pointer to move forward along the list and look for new unique elements in the list.
Or, in other words,  the current `slow` pointer is used to locate the latest unique number for the results, and `fast` is used for iterating and discovery.

Have `fast` advanced in every iteration, but `slow` is only advanced when two pointers are onto two different elements. 

That means, the elements after `nums[slow]` and before `nums[fast]` are numbers we've **seen** before and don't need anymore (one copy of these numbers is already saved before the current `slow` (inclusive)).  

Therefore, in order to have this newly discovered (unseen) number pointed by the current `fast` to the front of the array for the final answer, we just need to swap this newly discovered number to the location that follows the current `slow` pointer, with one of the **seen** numbers (we don't need it for the answer regardlessly), and then advance the `slow` in the same iteration to lock this new number.

```
	def removeDuplicates(self, nums: List[int]) -> int:
		slow, fast = 0, 1
		while fast in range(len(nums)):
			if nums[slow] == nums[fast]:
				fast += 1
			else:
				nums[slow+1] = nums[fast]
				fast += 1
				slow += 1

		return slow + 1
```

### \u2747\uFE0F Simplified two-pointers with for loops:
\uD83D\uDCA1 However, observe,  `fast` pointer is simply incremented in every iteration regardless of the conditions, that's just a typical for loop's job.  Therefore, we can simplify this "two-pointers" system as follows:
```
	def removeDuplicates(self, nums: List[int]) -> int:
		j = 0
		for i in range(1, len(nums)):
			if nums[j] != nums[i]:
				j += 1
				nums[j] = nums[i]
		return j + 1
```

**Time Complexity:** `O(n)`
**Space Complexity:** `O(1)`

-----------------------
## Method 3: Using `.pop()`
```
	def removeDuplicates(self, nums: List[int]) -> int:
		i = 1
		while i < len(nums):
			if nums[i] == nums[i - 1]:
				nums.pop(i)
			else:
				i += 1
		return len(nums)
```
-----------------------
## Method 4: Using `OrderedDict.fromkeys()`
```
from collections import OrderedDict
class Solution(object):
    def removeDuplicates(self, nums):
        nums[:] =  OrderedDict.fromkeys(nums)
        return len(nums)
```
-------------------
-----------------------
As a total beginner, I am writing these all out to help myself, and hopefully also help anyone out there who is like me at the same time.

Please upvote\u2B06\uFE0F if you find this helpful or worth-reading for beginners in anyway.
Your upvote is much more than just supportive to me. \uD83D\uDE33\uD83E\uDD13\uD83E\uDD70

If you find this is not helpful, needs improvement, or is questionable, would you please leave a quick comment below to point out the problem before you decide to downvote? It will be very helpful for me (maybe also others) to learn as a beginner.

Thank you very much either way \uD83E\uDD13.