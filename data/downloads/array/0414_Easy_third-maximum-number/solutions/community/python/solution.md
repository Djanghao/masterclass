# Solution in Python 3 (beats ~99%) ( O(n) )

**Author:** junaidmansuri
**Votes:** 27
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/352011/](https://leetcode.com/problems/third-maximum-number/solutions/352011/)

---

```
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
    	n, T = list(set(nums)), [float('-inf')]*3
    	for i in n:
    		if i > T[0]:
    			T = [i,T[0],T[1]]
    			continue
    		if i > T[1]:
    			T = [T[0],i,T[1]]
    			continue
    		if i > T[2]:
    			T = [T[0],T[1],i]
    	return T[2] if T[2] != float('-inf') else T[0]
		
		
- Junaid Mansuri