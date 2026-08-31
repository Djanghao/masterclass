# [ Python ] ✅✅ Simple Python Solution Using PrefixSum and Dictionary 🔥✌

**Author:** ASHOK_KUMAR_MEGHVANSHI
**Votes:** 355
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/1759711/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/1759711/)

---


# If You like the Solution, Don't Forget To UpVote Me, Please UpVote! \uD83D\uDD3C\uD83D\uDE4F
	class Solution:
		def subarraySum(self, nums: List[int], k: int) -> int:

			result = 0 
			prefix_sum = 0
			d = {0 : 1}

			for num in nums:
			
				prefix_sum = prefix_sum + num

				if prefix_sum - k in d:
				
					result = result + d[prefix_sum - k]

				if prefix_sum not in d:
				
					d[prefix_sum] = 1
				else:
					d[prefix_sum] = d[prefix_sum] + 1

			return result

# Thank You \uD83E\uDD73\u270C\uD83D\uDC4D