# Solution in Python 3 (beats ~100%) (three lines)

**Author:** junaidmansuri
**Votes:** 58
**Link:** [https://leetcode.com/problems/fibonacci-number/solutions/336501/](https://leetcode.com/problems/fibonacci-number/solutions/336501/)

---

```
class Solution:
    def fib(self, N: int) -> int:
    	a, b = 0, 1
    	for i in range(N): a, b = b, a + b
    	return a
		
		
- Python 3
- Junaid Mansuri