# ✔️ [Python3] DOUBLE BARREL (*˘︶˘*).｡.:*💕, Explained

**Author:** artod
**Votes:** 35
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/1717215/](https://leetcode.com/problems/valid-mountain-array/solutions/1717215/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

The idea is to scan the array two times: First time we scan it from the start and the second - from the end. For every element we check the condition that the next element is greater than the current one. In the end, we compare two indices from scans checking whether they met at the peak of the mountain.

Time: **O(n)** - scan
Space: **O(1)** - nothing stored

Runtime: 196 ms, faster than **89.44%** of Python3 online submissions for Valid Mountain Array.
Memory Usage: 15.3 MB, less than **99.55%** of Python3 online submissions for Valid Mountain Array.

```
def validMountainArray(self, a: List[int]) -> bool:
	start, end, L = 0, -1, len(a)

	while start < L-1 and a[start] < a[start+1]: 
		start += 1
	while end > -L and a[end] < a[end-1]: 
		end -= 1

	return start == end + L and 0 < start and end < -1
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**