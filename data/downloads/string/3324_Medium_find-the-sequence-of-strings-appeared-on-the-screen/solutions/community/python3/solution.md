# One Liners

**Author:** votrubac
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5940868/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5940868/)

---


**Python 3**
Original solution.
```python
class Solution:
    def stringSequence(self, t: str) -> List[str]:
        return [t[:i] + chr(a) for i, ch in enumerate(t) for a in range(ord("a"), ord(ch) + 1)]
```

**Python 3**
`ascii_lowercase` ideas from Mr. [Pochmann](https://leetcode.com/u/StefanPochmann/) and [Lee](https://leetcode.com/u/lee215/).

```python
class Solution:
	def stringSequence(self, t: str) -> List[str]:
		return [t[:i] + a for i, c in enumerate(t) for a in ascii_lowercase if a <= c]
```