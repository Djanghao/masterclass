# [Python] Clean Iterative DFS

**Author:** soma28
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/1458221/](https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/1458221/)

---

```
class Solution:
    def minArea(self, image: List[List[str]], x: int, y: int) -> int:
        
        M, N = len(image), len(image[0])
        top, left, right, bottom = x, y, y+1, x+1
        stack = [(x, y)]
        while stack:
            x, y = stack.pop()
            top, left, right, bottom = min(x, top), min(y, left), max(y+1, right), max(x+1, bottom)
            image[x][y] = '0'
            for r, c in [(x-1, y), (x, y-1), (x, y+1), (x+1, y)]:
                if 0 <= r < M and 0 <= c < N and image[r][c] == '1':
                    stack.append((r, c))
        return (bottom-top)*(right-left)
```