# Python 524ms 98.3% Faster Multiple solutions 94% memory efficient

**Author:** anuvabtest
**Votes:** 46
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2446738/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2446738/)

---

# DON'T FORGET TO UPVOTE!!!
# 1. 98% faster 524 ms solution:

		class Solution:
			def isPossible(self, nums: List[int]) -> bool:
				len1 = len2 = absorber = 0
				prev_num = nums[0] - 1
				for streak_len, streak_num in Solution.get_streaks(nums):
					if streak_num == prev_num + 1:
						spillage = streak_len - len1 - len2
						if spillage < 0:
							return False
						absorber = min(absorber, spillage)
						len1, len2, absorber = spillage - absorber, len1, absorber + len2
					else:
						if len1 or len2:
							return False
						absorber = 0
					prev_num = streak_num
				return len1 == len2 == 0

			@staticmethod
			def get_streaks(nums: List[int]):
				streak_num = nums[0]
				streak_len = 0
				for num in nums:
					if num == streak_num:
						streak_len += 1
					else:
						yield streak_len, streak_num
						streak_num = num
						streak_len = 1
				yield streak_len, streak_num
				
				
# 2. Memory Efficient solution:

			class Solution:
				def isPossible(self, nums: List[int]) -> bool:
					counter = collections.Counter(nums)
					for i in sorted(counter.keys()):
						while counter[i] > 0:
							last = 0
							j = i
							k = 0
							while counter[j] >= last:
								last = counter[j]
								counter[j] -= 1
								j += 1
								k += 1
							if k < 3:
								return False
					return True
					
# 3 Easy explained approach:

	class Solution:
		def isPossible(self, nums: List[int]) -> bool:

			if len(nums) < 3: return False

			frequency = collections.Counter(nums)
			subsequence = collections.defaultdict(int)

			for i in nums:

				if frequency[i] == 0:
					continue

				frequency[i] -= 1

				# option 1 - add to an existing subsequence
				if subsequence[i-1] > 0:
					subsequence[i-1] -= 1
					subsequence[i] += 1

				# option 2 - create a new subsequence 
				elif frequency[i+1] and frequency[i+2]:
					frequency[i+1] -= 1
					frequency[i+2] -= 1
					subsequence[i+2] += 1

				else:
					return False

			return True

		# TC: O(n), SC: O(n)