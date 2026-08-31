# Solution in Python 3 (beats ~94%) (one line) (three solutions)

**Author:** junaidmansuri
**Votes:** 37
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/362196/](https://leetcode.com/problems/jewels-and-stones/solutions/362196/)

---

```
class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
    	return sum(i in J for i in S)



class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
    	return sum(S.count(i) for i in J)



from collections import Counter

class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
    	return sum(Counter(S)[i] for i in J)
		
		

- Junaid Mansuri
(LeetCode ID)@hotmail.com