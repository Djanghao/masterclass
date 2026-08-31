# Python 3 -> O(n log n) time and O(n) space using sort() & dictionary

**Author:** mybuddy29
**Votes:** 87
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/901118/](https://leetcode.com/problems/minimum-absolute-difference/solutions/901118/)

---

**Suggestions to make it better are always welcomed.**

I almost thought I won't be able to solve this problem. But after thinking about using dictionary, I started figuring out.

Approach:
1. To find the minimum difference among numbers, we have to subtract ith number with all the remaining numbers. This will be O(n^2) time complexity. Can we do anything in O(n log n)? Then I thought about sorting. sort() sorts in-place whereas sorted returns iterable of sorted array without modifying the array.
2. Sorting can help me find diffirence between 2 numbers next to each other and if that's the minimum, then we know we are on the right track. Now we have to return the list of pairs that match this difference.
3. What can we use to store this list and then retrieve in O(1) time? This is where dictionary came into the solution.

```
def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
	minDiff = math.inf
	dic = collections.defaultdict(list)
	arr.sort()                                         #O(n log n) time
	
	for i in range(len(arr)-1):                        #O(n) time
		diff = arr[i+1] - arr[i]
		dic[diff].append([arr[i], arr[i+1]])           #O(n) space if all the pairs have the same minimum difference
		minDiff = min(minDiff, diff)
	return dic[minDiff]
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**