# [Java/Python 3] Two codes w/ brief analysis.

**Author:** rock
**Votes:** 72
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1677019/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1677019/)

---

**Q & A**

Q: How does declaring sets inside 1st loop different from declaring ouside the loops?
A: They only exist during each iteration of the outer loop; Therefore, we do NOT need to clear them after each iteration. Otherwise their life cycle will NOT terminate till the end of the whole code, and also we have to clear them after each iteration of outer for loop.

**End of Q & A**

----

**Method 1: Use HashSet to check each row / column**

Credit to **@uprightclear** for improvement of Java code.
```java
    public boolean checkValid(int[][] matrix) {
        for (int r = 0, n = matrix.length; r < n; ++r) {
            Set<Integer> row = new HashSet<>();
            Set<Integer> col = new HashSet<>();
            for (int c = 0; c < n; ++c) {
                if (!row.add(matrix[r][c]) || !col.add(matrix[c][r])) {
                    return false;
                }
            }
        }
        return true;
    }
```
```python
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)
        for row, col in zip(matrix, zip(*matrix)):
            if len(set(row)) != n or len(set(col)) != n:
                return False
        return True
```

----

**Method 2: BitSet/bytearray**

```java
    public boolean checkValid(int[][] matrix) {
        for (int r = 0, n = matrix.length; r < n; ++r) {
            BitSet row = new BitSet(n + 1), col = new BitSet(n + 1);
            for (int c = 0; c < n; ++c) {
                if (row.get(matrix[r][c]) || col.get(matrix[c][r])) {
                    return false;
                }
                row.set(matrix[r][c]);
                col.set(matrix[c][r]);
            }
        } 
        return true;
    }
```
```python
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)
        for r in range(n):
            row = bytearray(n + 1) 
            col = bytearray(n + 1) 
            for c in range(n):
                ro, co = matrix[r][c], matrix[c][r]
                row[ro] += 1
                col[co] += 1
                if row[ro] > 1 or col[co] > 1:
                    return False
        return True
```
**Analysis:**

Time: `O(n * n)`, space: O(n), where `n = matrix.length`.