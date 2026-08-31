# Python Simple Fastest Solution Explained (video + code)

**Author:** spec_he123
**Votes:** 39
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/850634/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/850634/)

---

[](https://www.youtube.com/watch?v=xgJh5HPCi3A)
https://www.youtube.com/watch?v=xgJh5HPCi3A
```
class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        direction = (0,1)
        start = [0,0]
        
        for x in instructions:
            if x == 'G':
                start[0] += direction[0]
                start[1] += direction[1]
            elif x == 'L':
                direction = (-direction[1], direction[0])
            elif x == 'R':
                direction = (direction[1], -direction[0])
        
        return start == [0,0] or direction != (0,1)
```