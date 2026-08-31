# [We💕Simple] One Liner! (Beat 100%)

**Author:** YooSeungKim
**Votes:** 3
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397471/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397471/)

---

## Python3
```
class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        return sum(
            sum(mat[i][col] for i in range(len(mat))) == 1
            for col in [
                row.index(1)
                for row in mat
                if sum(row) == 1
            ]
        )

```

## Kotlin
``` Kotlin
class Solution {
    fun numSpecial(mat: Array<IntArray>): Int =
        mat.mapNotNull { row -> 
            row.indexOfFirst { it == 1 }.takeIf { it >= 0 && row.drop(it+1).sum() == 0 }
        }.count { col ->
            mat.sumOf { it[col] } == 1
        }
}
```

# Approach

1.  **Mapping Rows to Potential Columns**: The function `numSpecial` takes a 2D array `mat` (a matrix) as input. It uses the `mapNotNull` function on this matrix, which processes each row and potentially transforms it to a different value. In this case, the transformation is to identify the column index of the first occurrence of '1' in a row.

2.  **Identifying Unique '1's in a Row**: Inside `mapNotNull`, `row.indexOfFirst { it == 1 }` finds the index of the first '1' in the row. The `takeIf` function is then used to ensure two things:
    -   The index is non-negative (i.e., there is at least one '1' in the row).
    -   All subsequent elements in the row after this '1' are zeros (checked by `row.drop(it+1).sum() == 0`).
3.  **Counting Special Elements**: The resulting list from `mapNotNull` contains column indices where there might be a "special" element. The `count` function is then used to count how many of these column indices actually represent a "special" element. This is done by checking for each column index `col` if the sum of all elements in that column (`mat.sumOf { it[col] }`) is equal to 1, which would mean the '1' in this column is unique and not shared with other rows.

In summary, the code strategy is to first identify potential columns for each row where a "special" element could exist. Then, it verifies these potential columns to ensure that they contain only one '1' in the entire column. This approach efficiently identifies "special" elements by minimizing the need to repeatedly scan entire rows and columns.
