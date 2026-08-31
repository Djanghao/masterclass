# Time: O(1) Space: O(1)

**Author:** d_johnson
**Votes:** 17
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/2925966/](https://leetcode.com/problems/valid-sudoku/solutions/2925966/)

---

# Intuition
In this problem, we simply need to check whether the board is a valid board, i.e. there are no duplicate numbers in any row, column, or box. We could brute force it by repeating work to check each row, column, box, individually. However, to improve performance, we will maintain 9 hashsets for each row/col/box. The only complication is how to determine the box based on the row, col. Let's consider a couple options:

```
row = 2, col = 2, box should be 0
row = 2, col = 8, box should be 2
row = 5, col = 5, box should be 4
row = 7, col = 7, box should be 8
```

Based on the above examples, I came up with the following:
```
box = 3*(row/3) + (col/3)
```

You can check the math yourself if you are interested.


# Approach
1. Maintain hashsets for each row, col, and box
2. If '.' continue, otherwise, check if element in the corresponding hashset
3. If ever found, return false. Otherwise, after processing all elements, return true 

# Complexity in general case
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(3 * n)$$ ~ $$O(n)$$

# Complexity in specific case
- Time complexity:
$$O(9 * 9)$$ = $$O(81)$$ ~ $$O(1)$$

- Space complexity:
$$O(9 * 9 * 3)$$ ~ $$O(243)$$ ~ $$O(1)$$

# Code
```
public class Solution {
    public bool IsValidSudoku(char[][] board) {
        HashSet<char>[] row = new HashSet<char>[9];
        HashSet<char>[] col = new HashSet<char>[9];
        HashSet<char>[] box = new HashSet<char>[9];
        for (int i = 0; i < 9; i++) {
            row[i] = new HashSet<char>();
            col[i] = new HashSet<char>();
            box[i] = new HashSet<char>();
        }

        for (int r = 0; r < board.Length; r++) {
            for (int c = 0; c < board[r].Length; c++) {
                char elem = board[r][c];
                if (elem == '.') {
                    continue;
                }

                if (!row[r].Add(elem)) {
                    return false;
                }

                if (!col[c].Add(elem)) {
                    return false;
                }
                
                int b = (3 * (r / 3)) + (c / 3);
                if (!box[b].Add(elem)) {
                    return false;
                }
            }
        }

        return true;
    }
}
```