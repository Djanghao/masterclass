# Python 1-line sorting based solution

**Author:** Twohu
**Votes:** 92
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/278786/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/278786/)

---

```
def allCellsDistOrder(self, R: int, C: int, r0: int, c0: int) -> List[List[int]]:
    return sorted([(i, j) for i in range(R) for j in range(C)], key=lambda p: abs(p[0] - r0) + abs(p[1] - c0))
```

The same code, more readable:
```
def allCellsDistOrder(self, R: int, C: int, r0: int, c0: int) -> List[List[int]]:
    def dist(point):
        pi, pj = point
        return abs(pi - r0) + abs(pj - c0)

    points = [(i, j) for i in range(R) for j in range(C)]
    return sorted(points, key=dist)
```