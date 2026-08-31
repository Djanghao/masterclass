# [Python 3] BFS - Simple

**Author:** dolong2110
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/4031867/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/4031867/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findInteger(self, k: int, digit1: int, digit2: int) -> int:
        d1, d2 = min(digit1, digit2), max(digit1, digit2)
        dq = collections.deque([])
        if d1 != 0: dq.append(d1)
        if d2 != 0: dq.append(d2)
        if d1 == d2 and dq: dq.popleft()
        while dq:
            n = dq.popleft()
            if n > k and n % k == 0: return n
            if n * 10 + d1 < 2 ** 31: dq.append(n * 10 + d1)
            if d1 != d2 and n * 10 + d2 < 2 ** 31: dq.append(n * 10 + d2)
        return -1
```