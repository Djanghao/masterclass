# One Liner

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5554800/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5554800/)

---

Alice looses the game when the sum is the same for single and double-digit numbers.

We sum single-digit numbers as positive, and double-digit ones as negative, and check if the result is zero.

**Python 3**
```python
class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        return sum(n if n < 10 else -n for n in nums) != 0
```