# [Python] Build ideal pyramid and then remove box from floor if needed

**Author:** pbelskiy
**Votes:** 2
**Link:** [https://leetcode.com/problems/building-boxes/solutions/5098128/](https://leetcode.com/problems/building-boxes/solutions/5098128/)

---

```
"""
Build ideal pyramid and then remove box from floor if needed.

TC: O(arithmetic progression)
SC: O(1)
"""
class Solution:
    def minimumBoxes(self, n: int) -> int:

        def get_floor_count(floor, total, layer):
            width = layer

            # remove box from floor one by one from last diagonal
            while True:
                floor -= 1
                total -= width
                width -= 1

                if total < n:
                    return floor + 1

        total = 1
        weight = 1
        layer = 1

        # building ideally fulfilled pyramid firstly diagonal by diagonal
        while True:
            if total >= n:
                break

            total += weight + (layer + 1)
            weight += (layer + 1)
            layer += 1

        return get_floor_count(weight, total, layer)
```