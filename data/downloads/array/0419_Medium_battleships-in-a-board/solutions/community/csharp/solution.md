# TC - O(m * n)⭐️|| SC - O(1)⭐️|| Beginner Friendly✅|| Easy Solution💯|| 100% beats🚀||Fully Explained

**Author:** akobirswe
**Votes:** 3
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/3893370/](https://leetcode.com/problems/battleships-in-a-board/solutions/3893370/)

---

# Approach

**Approach:** We need to iterate through each cell in the board and identify the starting cells of battleships. A starting cell of a battleship is one that is not adjacent to any other battleship, either horizontally or vertically.

**Logic:**
1. Initialize a counter variable `cnt` to keep track of the number of battleships.

2. Loop through each cell in the board using two nested loops, where the outer loop iterates through rows and the inner loop through columns.

3. For each cell, check if it contains a battleship ('X').

4. If the cell contains a battleship ('X'), we need to determine if it's a starting cell of a battleship. To do this, we check two conditions:
   - Condition 1: Check if the cell above is empty ('.') or if it's the first row.
   - Condition 2: Check if the cell to the left is empty ('.') or if it's the first column.

5. If both conditions are met, increment the `cnt` counter. This means we found a new battleship.

6. Once we've iterated through all cells, return the value of the `cnt` counter as the final result.

**Example:**
Let's go through an example to better understand the approach:

Board:
```
[
 ["X",".",".","X"],
 [".",".",".","X"],
 [".",".",".","X"]
]
```

1. Initialize `cnt = 0`.

2. Loop through each cell:
   - For `(0,0)`: Cell contains 'X'. Both conditions met, increment `cnt` to 1.
   - For `(0,1)`: Cell is empty.
   - For `(0,2)`: Cell is empty.
   - For `(0,3)`: Cell contains 'X', but it's not a starting cell.
   - For `(1,0)` to `(2,3)`: Cells are empty.

3. Loop through the remaining cells.

4. After iterating through all cells, return `cnt = 1`, which is the number of battleships.

**Summary:**
By carefully checking each cell and its adjacent cells, we can count the number of battleships that follow the specific placement rules outlined in the problem. This approach ensures that we correctly identify battleships that are not adjacent to each other and count them accurately.

# Complexity
- Time complexity: $$OO(m * n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int countBattleships(char[][] board) {
        int m = board.length;
        int n = board[0].length;
        int cnt = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'X') {
                    if ((i == 0 || board[i - 1][j] == '.') && (j == 0 || board[i][j - 1] == '.')) {
                        cnt++;
                    }
                }
            }
        }

        return cnt;
    }
}
```