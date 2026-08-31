# Correct Python Solution

**Author:** tahir3
**Votes:** 4
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/266188/](https://leetcode.com/problems/flatten-2d-vector/solutions/266188/)

---

```
class Vector2D:

    def __init__(self, v: List[List[int]]):
        self.r, self.c, self.v = 0, 0, v

    def next(self) -> int:
        while self.hasNext():
            ans = self.v[self.r][self.c]
            self.c += 1
            if len(self.v[self.r]) == self.c:
                self.r += 1
                self.c = 0
            return ans

    def hasNext(self) -> bool:
        while self.r < len(self.v) and len(self.v[self.r]) == 0:
            self.r += 1
            self.c = 0
            
        return self.r < len(self.v)