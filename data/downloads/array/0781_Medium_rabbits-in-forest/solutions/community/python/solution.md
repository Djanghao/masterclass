# Simple Solution | Easy | O(n) | Using Map | Counter | Python

**Author:** beranwolf
**Votes:** 2
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/2186012/](https://leetcode.com/problems/rabbits-in-forest/solutions/2186012/)

---

Please Upvote if you liked my solution

	def numRabbits(self, ans: List[int]) -> int:
			result=0
			d=Counter(ans)    # Inbuilt function to form dictionary/Map
			for i,j in d.items():
				if j>i+1:    
					temp=ceil(j/(i+1))
					result+= temp*(i+1)
				else:
					result+= i+1
			return result