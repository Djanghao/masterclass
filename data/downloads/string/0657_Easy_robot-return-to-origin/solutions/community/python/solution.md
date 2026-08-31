# Solution in Python 3 (~beats 99%) ( one line )

**Author:** junaidmansuri
**Votes:** 16
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/342078/](https://leetcode.com/problems/robot-return-to-origin/solutions/342078/)

---

```
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        return moves.count('L') == moves.count('R') and moves.count('U') == moves.count('D')


- Python 3
- Junaid Mansuri