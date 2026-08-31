# Very simple solution using python

**Author:** ankurbhambri
**Votes:** 48
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/2763690/](https://leetcode.com/problems/flipping-an-image/solutions/2763690/)

---

```
class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        res = []
        for i in image:
            i.reverse()
            res.append([x ^ 1 for x in i])
        return res
```