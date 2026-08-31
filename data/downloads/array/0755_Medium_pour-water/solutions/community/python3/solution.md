# Straight forward drop water python3

**Author:** BichengWang
**Votes:** 4
**Link:** [https://leetcode.com/problems/pour-water/solutions/1516852/](https://leetcode.com/problems/pour-water/solutions/1516852/)

---

```
class Solution:
    def pourWater(self, heights: List[int], volume: int, k: int) -> List[int]:
        def drop():
            lw_idx, rw_idx = k, k
            l, r = k - 1, k + 1
            while l > -1 and heights[lw_idx] >= heights[l]:
                if heights[lw_idx] > heights[l]: lw_idx = l
                l -= 1
            while r < len(heights) and heights[rw_idx] >= heights[r]:
                if heights[rw_idx] > heights[r]: rw_idx = r
                r += 1
            return lw_idx, rw_idx
        for _ in range(volume):
            lw_idx, rw_idx = drop()
            if heights[lw_idx] < heights[k]: heights[lw_idx] += 1
            else: heights[rw_idx] += 1
        return heights
```