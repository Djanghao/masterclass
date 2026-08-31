# Python, a simple for loop

**Author:** blue_sky5
**Votes:** 48
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/899176/](https://leetcode.com/problems/construct-the-rectangle/solutions/899176/)

---

```
class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        for l in range(int(area**0.5), 0, -1):            
            if area % l == 0: 
                return [area // l, l]
```