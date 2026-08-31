# [Java/Python 3] HashMap time O(m * (2 ^n)).

**Author:** rock
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3622298/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/3622298/)

---

**Intuition**

1. If there is an all `0`s row, it is one of the solutions.
2. Otherwise, if there are a pair of two rows that the `AND` operation between them is `0`, then it is one of the solutions.
3. Since `n <= 5`, we can use a `HashMap/dict` to store visited `row`(which can be converted to an int) and corresponding `row number`, and traverse all numbers within `2 ^ 5 - 1 = 31` to find current number's pair.

```java
    public List<Integer> goodSubsetofBinaryMatrix(int[][] grid) {
        int R = grid.length;
        if (R == 1) {
            return IntStream.of(grid[0]).sum() == 0 ? List.of(0) : List.of();
        }
        Map<Integer, Integer> rowIndices = new HashMap<>();
        for (int r = 0, C = grid[0].length; r < R; ++r) {
            int r1 = r, num = IntStream.range(0, C).map(k -> grid[r1][k] << k).sum();
            for (int i = 0; i < 32; ++i) {
                if ((i & num) == 0 && rowIndices.containsKey(i)) {
                    return List.of(rowIndices.get(i), r);
                }
            }
            rowIndices.putIfAbsent(num, r);
        }
        return List.of();
    }
```
```python
    def goodSubsetofBinaryMatrix(self, grid: List[List[int]]) -> List[int]:
        if len(grid) == 1:
            return [0] if all(num == 0 for num in grid[0]) else []
        d = {}
        for r, row in enumerate(grid):
            num = sum(cell << c for c, cell in enumerate(row))
            for i in range(32):
                if (i & num) == 0 and i in d:
                    return [d[i], r]
            d.setdefault(num, r)    
        return []
```

**Analysis**

Time: `O(m * 2 ^ n)`, space: `O(m)`.