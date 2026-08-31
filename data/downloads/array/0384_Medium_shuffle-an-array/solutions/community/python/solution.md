# { Python } | Best Optimal Approach ✔

**Author:** triposat
**Votes:** 10
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/1673643/](https://leetcode.com/problems/shuffle-an-array/solutions/1673643/)

---

	class Solution:
		def __init__(self, nums: List[int]):
			self.arr = nums[:]  # Deep Copy, Can also use Shallow Copy concept!
			# self.arr = nums  # Shallow Copy would be something like this!

		def reset(self) -> List[int]:
			return self.arr

		def shuffle(self) -> List[int]:
			ans = self.arr[:]
			for i in range(len(ans)):
				swp_num = random.randrange(i, len(ans))  # Fisher-Yates Algorithm
				ans[i], ans[swp_num] = ans[swp_num], ans[i]
			return ans
If you have any questions, please ask me, and if you like this approach, please **vote it up**!