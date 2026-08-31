# Easy Solution in Java | Runtime 0 ms - 100% beats ✅ | Fully Explained ✅

**Author:** akobirswe
**Votes:** 2
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/3718174/](https://leetcode.com/problems/available-captures-for-rook/solutions/3718174/)

---

# Approach
To find the number of available captures for the white rook, we can iterate over the chessboard and locate the position of the rook ('R'). Once we find the rook, we can check in four cardinal directions (up, down, left, right) for pawns ('p') and bishops ('B').

1. Initialize a variable `count` to keep track of the number of available captures.
2. Use nested loops to iterate over each cell on the chessboard.
3. When the rook is found (board[i][j] == 'R'), perform the following steps:
   - Initialize variables k and t to represent the row and column indices, respectively.
   - Check in the upward direction by decrementing k (k--) until reaching the top edge of the board (k >= 0).
     - If a bishop ('B') is encountered, break the loop as the rook is blocked in this direction.
     - If a pawn ('p') is encountered, increment the `count` and break the loop as the rook can capture the pawn.
   - Repeat the same process for the downward direction by incrementing k (k++) until reaching the bottom edge of the board (k < board.length).
   - Check in the leftward direction by decrementing t (t--) until reaching the left edge of the board (t >= 0).
     - If a bishop ('B') is encountered, break the loop.
     - If a pawn ('p') is encountered, increment the `count` and break the loop.
   - Repeat the same process for the rightward direction by incrementing t (t++) until reaching the right edge of the board (t < board[0].length).
   - Break the outer loop using a labeled statement (`break loop;`) to avoid unnecessary iterations once the rook is found and processed.
4. After the loops, return the value of `count` as the result.

This approach scans the board in a straightforward manner, checking each direction for pawns and bishops until an obstacle is encountered or the edge of the board is reached. The `count` variable keeps track of the number of captured pawns, which is the final result returned by the function.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int numRookCaptures(char[][] board) {
        int count = 0;

        loop:
        for(int i = 0; i < board.length; i++){
            for(int j = 0; j < board[0].length; j++){
                if(board[i][j] == 'R'){
                    int k = i - 1;
                    while(k >= 0){
                        if(board[k][j] == 'B') break;
                        if(board[k][j] == 'p'){
                            count++;
                            break;
                        }
                        k--;
                    }
                    k = i + 1;
                    while(k < board.length) {
                        if(board[k][j] == 'B') break;
                        if(board[k][j] == 'p'){
                            count++;
                            break;
                        }
                        k++;
                    }

                    int t = j - 1;
                    while(t >= 0){
                        if(board[i][t] == 'B') break;
                        if(board[i][t] == 'p') {
                            count++;
                            break;
                        }
                        t--;
                    }
                    t = j + 1;
                    while(t < board[0].length){
                        if(board[i][t] == 'B') break;
                        if(board[i][t] == 'p') {
                            count++;
                            break;
                        }
                        t++;    
                    }

                    break loop;
                }
            }
        }

        return count;
    }
}
```