# 📌📌 Greedy and Easy Approach 🐍

**Author:** abhi9Rai
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1597152/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1597152/)

---

## IDEA :
*Our target is to find the maximum/minimum subarray sum and choose maximum absolute value between them.*
This situation is suited for adopting **Kadane's algorithm**.

'''

	class Solution:
		def maxAbsoluteSum(self, A):

			ma,mi,res = 0,0,0
			for a in A:
				ma = max(0,ma+a)
				mi = min(0,mi+a)
				res = max(res,ma,-mi)
			return res
			
### TThanks and Upvote if you like the Idea!!\u270C