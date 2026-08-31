# Python. O(n), Cool, easy & clear solution.

**Author:** m-d-f
**Votes:** 15
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/1049126/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/1049126/)

---

	class Solution:
		def findLHS(self, nums: List[int]) -> int:
			tmp = Counter(nums)
			keys = tmp.keys()
			max = 0
			for num in keys:
				if num - 1 in keys:
					if tmp[num - 1] + tmp[num] > max:
						max = tmp[num - 1] + tmp[num]
			return max