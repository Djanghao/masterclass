# Straight-forward C# solution

**Author:** madinamstf
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/4270281/](https://leetcode.com/problems/design-tic-tac-toe/solutions/4270281/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(4*n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

# Code
```
public class TicTacToe {

    int[][] board;
    public TicTacToe(int n) {

        board = new int[n][];

        for (int i = 0; i < n; i++)
        {
            board[i] = new int[n];
        }
    }
    
    public int Move(int row, int col, int player) {
        board[row][col] = player;

        var cols = true;
        var rows = true;
        var d1 = true;
        var d2 = true;

        for(int i = 0; i < board.Length; i++)
        {
            if (board[i][col] != player)
            {
                cols = false;
            }
            if (board[row][i] != player)
            {
                rows = false;
            }
            if (board[i][i] != player)
            {
                d1 = false;
            }
            if (board[i][board.Length-i - 1] != player)
            {
                d2 = false;
            }
        }

        if (cols || rows || d1 || d2) 
            return player;
        else
            return 0;
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * TicTacToe obj = new TicTacToe(n);
 * int param_1 = obj.Move(row,col,player);
 */
```