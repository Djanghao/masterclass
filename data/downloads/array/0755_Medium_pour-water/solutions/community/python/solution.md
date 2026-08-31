# share my Python easy-understanding solution beats 93%

**Author:** bailu383
**Votes:** 9
**Link:** [https://leetcode.com/problems/pour-water/solutions/378029/](https://leetcode.com/problems/pour-water/solutions/378029/)

---


	def pourWater(self, heights, V, K):
		for _ in range(V):
			mark = K    # where to fall water

			l = K - 1   #   search left
			while l>=0:
				if heights[l] < heights[mark]:
					mark = l
				elif  heights[l] > heights[mark]:  
					break
				l -= 1
			if mark < K:
				heights[mark] += 1
				continue

			r = K + 1  #   search right
			while r < len(heights):
				if heights[r] < heights[mark]:
					mark = r
				elif heights[r] > heights[mark]:
					break
				r += 1
			heights[mark] += 1
		return heights