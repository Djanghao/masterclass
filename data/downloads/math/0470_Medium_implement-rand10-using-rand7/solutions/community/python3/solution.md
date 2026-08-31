# Python generalised solution for RandM() using RandN()

**Author:** MiKueen
**Votes:** 12
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/816927/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/816927/)

---

**Solution for creating rand10() using rand7()**

```python
# The rand7() API is already defined for you.
# def rand7():
# @return a random integer in the range 1 to 7

class Solution:
    def rand10(self):
        """
        :rtype: int
        """
        curr = 40
        while curr >= 40:
            curr = (rand7() - 1) * 7 + rand7() - 1
        return curr % 10 + 1
```
    
**Generalised solution for creating randM() using randN()**

```python
# The randN() API is already defined for you.
# def randN():
# @return a random integer in the range 1 to M

class Solution:
    def randM(self, N, M):
        """
        :rtype: int
        """
        # acceptable is the desired range which can generate required integer directly
        curr = acceptable = N * N - (N * N) % M 
        # if current no is not in the acceptable range, discard it and repeat the process again
        while curr >= acceptable:
            curr = (randN() - 1) * N + randN() - 1
        return curr % M + 1
		
```

