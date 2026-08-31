# ✔️ [Python3] O(n^2) ¯\_( ͡👁️ ͜ʖ ͡👁️)_/¯, Explained

**Author:** artod
**Votes:** 118
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/1740570/](https://leetcode.com/problems/4sum-ii/solutions/1740570/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

The simple bruteforce solution would take `n^4` time complexity here. We can do better by dividing given lists into two groups and precalculating all possible sums for the first group. Results go to a hashmap where keys are sums and values are frequencies. It will take `n^2` time and space. After that, we iterate over elements of the second group, and for every pair check whether their sum can add up to zero with a sum from the first group using a hashmap.

Time: **O(n^2)** - double n^2 scan
Space: **O(n^2)** - for hashmap

Runtime: 716 ms, faster than **85.08%** of Python3 online submissions for 4Sum II.
Memory Usage: 14.1 MB, less than **98.30%** of Python3 online submissions for 4Sum II.

```
def fourSumCount(self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]) -> int:
	n, hm, res = len(nums1), defaultdict(int), 0

	for i in range(n):
		for j in range(n):
			hm[nums1[i] + nums2[j]] += 1 

	for k in range(n):
		for l in range(n):
			res += hm[0 - (nums3[k] + nums4[l])]

	return res
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**