# BFS

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/4611888/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/4611888/)

---

```
class Solution:
    def findInteger(self, k: int, digit1: int, digit2: int) -> int:
        MAX_INT = 2 ** 31 - 1
        if digit1 > digit2:
            digit1, digit2 = digit2, digit1
        queue = deque([digit1, digit2])
        while queue:
            num = queue.popleft()
            if num > k and num % k == 0:
                return num
            for d in digit1, digit2:
                nxt = num * 10 + d
                if num != nxt and nxt <= MAX_INT: # handle d=0 and MAX_INT
                    queue.append(nxt)
        return -1
```