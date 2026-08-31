# Solution in Python 3

**Author:** junaidmansuri
**Votes:** 11
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/337853/](https://leetcode.com/problems/reverse-only-letters/solutions/337853/)

---

```
class Solution:
    def reverseOnlyLetters(self, S: str) -> str:
    	S = list(S)
    	c = [c for c in S if c.isalpha()]
    	for i in range(-1,-len(S)-1,-1):
    		if S[i].isalpha(): S[i] = c.pop(0)
    	return "".join(S)
		
		
- Python 3
- Junaid Mansuri