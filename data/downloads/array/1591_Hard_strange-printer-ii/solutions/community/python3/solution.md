# Python 3 || dicts and sets  || T/S: 99% / 29%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/5699642/](https://leetcode.com/problems/strange-printer-ii/solutions/5699642/)

---

```python3 []
class Solution:
    def isPrintable(self, targetGrid: List[List[int]]) -> bool:

        def dp(color: int) -> bool:

            rows, cols = list(zip(*colors[color]))

            mn_r, mx_r, mn_c, mx_c = (min(rows), max(rows) + 1,
                                      min(cols), max(cols) + 1)
            
            for i, j in product(range(mn_r, mx_r), range(mn_c, mx_c)):
                if targetGrid[i][j] != color and targetGrid[i][j] > 0:
                    return False

            for i in range(mn_r, mx_r):
                targetGrid[i][mn_c: mx_c] = [0]*(mx_c - mn_c)

            return True


        m, n = len(targetGrid), len(targetGrid[0])
        colors = defaultdict(list)

        for i, j in product(range(m), range(n)):
            colors[targetGrid[i][j]].append((i,j))

        color_set = set(colors)

        while color_set:
            tmp = set(filter(lambda x: dp(x), color_set))
            if not tmp: return False
            color_set-= tmp

        return True
```

[https://leetcode.com/problems/strange-printer-ii/submissions/1370449435/](https://leetcode.com/problems/strange-printer-ii/submissions/1370449435/)

I could be wrong, but I think that time complexity is *O*(*MNK*) and space complexity is *O*(*K*), in which *MN* ~ `m, n` and *K* ~ the number of distinct colors.