# Solution in Python 3 (beats ~98%)

**Author:** junaidmansuri
**Votes:** 53
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/349801/](https://leetcode.com/problems/degree-of-an-array/solutions/349801/)

---

```
class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
    	C = {}
    	for i, n in enumerate(nums):
    		if n in C: C[n].append(i)
    		else: C[n] = [i]
    	M = max([len(i) for i in C.values()])
    	return min([i[-1]-i[0] for i in C.values() if len(i) == M]) + 1
		
		
- Junaid Mansuri