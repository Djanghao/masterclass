# [ Python ] ✔✔ Simple and Clean Python Solution by Removing and Appending

**Author:** ASHOK_KUMAR_MEGHVANSHI
**Votes:** 10
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/1748566/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/1748566/)

---

# If It is Useful To Understand Please UpVote Me \uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F
	class Solution:
		def pivotArray(self, nums: List[int], pivot: int) -> List[int]:

			ans=[]

			nums.remove(pivot)

			i=0
			ans.append(pivot)

			for j in nums:
				if j<pivot:
					ans.insert(i,j)
					i=i+1
				elif j==pivot:
					ans.insert(i+1,j)
				else:
					ans.append(j)

			return ans