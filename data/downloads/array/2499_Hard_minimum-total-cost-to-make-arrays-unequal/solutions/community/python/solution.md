# Python Solution

**Author:** prateekgoel7248
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2958259/](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2958259/)

---

	class Solution:
		def minimumTotalCost(self, nums1: List[int], nums2: List[int]) -> int:
			d = Counter(nums2)
			n = len(nums1)
			h = n//2
			for i,j in d.items():
				if j>h:
					return -1
			d = defaultdict(int)
			ans = 0
			cnt =0
			for i in range(n):
				if nums1[i]==nums2[i]:
					ans+=i
					cnt+=1
					d[nums1[i]]+=1
			val =0
			mx =0
			for i,j in d.items():
				if j>mx:
					mx =j
					val = i
			if mx+mx>cnt:
				for i in range(n):
					if nums1[i]!=nums2[i] and nums1[i]!=val and nums2[i]!=val and mx+mx>cnt:
						ans+=i
						cnt+=1
			return ans
		#We are doing mx+mx because lets suppose we have 3 - 3 and 4-5 so total 8 elements which are same so we can take three of 3 and three of 4 to make swap and then we are left with 3 more elements of 4 which we have to swap with any values which is not 4.