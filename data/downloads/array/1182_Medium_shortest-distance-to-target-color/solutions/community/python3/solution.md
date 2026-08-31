# Solution in Python 3 (beats 100.0 %)

**Author:** junaidmansuri
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/377155/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/377155/)

---

```
class Solution:
    def shortestDistanceColor(self, c: List[int], q: List[List[int]]) -> List[int]:
    	C, A = {}, []
    	for i,j in enumerate(c):
    		if j in C: C[j].append(i)
    		else: C[j] = [i]
    	for [i,d] in q:
    		if d not in C:
    			A.append(-1)
    			continue
    		I = bisect.bisect(C[d],i)
    		A.append(min(abs(i-C[d][I-1]),abs(i-C[d][min(I,len(C[d])-1)])))
    	return(A)
		
		
- Junaid Mansuri
(LeetCode ID)@hotmail.com