# (O(4^20)⏱️| O(1)📦) JAVA☕ PYTHON🐍 JAVASCRIPT💛 TYPESCRIPT🔷 Recursion 🔁 Backtracking🔙

**Author:** VishnuThangaraj
**Votes:** 4
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/4915573/](https://leetcode.com/problems/sliding-puzzle/solutions/4915573/)

---

Github - https://github.com/VishnuThangaraj \uD83D\uDE3A
**UPVOTE IF YOU FOUND HELPFUL**\u2728

# Intuition\uD83E\uDDE0
<!-- Describe your first thoughts on how to solve this problem. -->
This Puzzle problem involves rearranging of numbered tiles with one empty space(0), to achieve the specific target.Goal is to find minimum number of moves required to solve the problem with the help of **Backtracking**.

# Approach\u26A1
<!-- Describe your approach to solving the problem. -->
1. Start by locating the **empty space** (denoted as `0`).
2. Iterate in all four directions from the empty space (`0`) using recursion and Swap the puzzle pieces accordingly.
4. After each recursion, **backtrack** the swapped puzzle numbers.
5. If the number of moves exceeds **20**, stop the recursion. This prevents creating a loop in the `2x3` matrix where no possible solution can be found.
6. Within each iteration, check if the board is solved:
    - If solved, update the `result`.
    - Otherwise, **continue** the recursion.

# Complexity\u231B
- Time complexity: `O(4^20)`, The maximum moves is limited to 20 for avoiding repetation of moves and loops.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`, as we use a constant amount of space for variables.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code\uD83D\uDCBB
``` Java []
class Solution {
    int result = Integer.MAX_VALUE; // Result
    int[][] directions = {{0,1}, {0,-1}, {1,0}, {-1,0}}; // Four Directions 

    public int slidingPuzzle(int[][] board) {
        int[] zero = {-1,-1}; // To store the position of zero(0)

        for(int row=0; row<2; row++){ // Find the Zero
            for(int col=0; col<3; col++){
                if(board[row][col] == 0){
                    zero = new int[]{row,col};
                    break;
                }
            }
        }

        helper_backtrack(board, 0, new int[]{-1,-1}, zero);

        // return -1 if no Possible way to solve the puzzle
        return (result == Integer.MAX_VALUE) ? -1 : result; 
    }

    public void helper_backtrack(int[][] board, int moves, int[] previous, int[] current){
        if(moves >= 20) return; // More than 20 moves is kind of loop in 2*3 Matrix

        if(isPuzzleSolved(board)){
            result = Math.min(result, moves);
            return; // Puzzle is solved
        }

        for(int[] dir : directions){
            int row = current[0] + dir[0];
            int col = current[1] + dir[1];

            /* Check if the row and column lies in the range and 
                should not be same as previous row and column : (it creates loop) */
            if(row<0 || row>=2 || col<0 || col>=3 || (previous[0] == row && previous[1] == col)){
                continue;
            }

            int[] newMove = {row, col}; 
            
            swapPuzzlePiece(board, current, newMove); // Swap the puzzle pieces
            helper_backtrack(board, moves+1, current, newMove); // Recursion
            swapPuzzlePiece(board, current, newMove); // Backtracking

        }
    }

    // Function to Swap the puzzle pieces 
    public void swapPuzzlePiece(int[][] board, int[]first, int[]second){
        int temp = board[first[0]][first[1]];

        board[first[0]][first[1]] = board[second[0]][second[1]];
        board[second[0]][second[1]] = temp;
    }

    // Function to check the puzzle is solved or not
    public boolean isPuzzleSolved(int[][] board){
        int puzzleValue = 1;

        for(int row=0; row<2; row++){
            for(int col=0; col<3; col++){
                if(row == 1 && col == 2) continue; // No need to check the 0th position
                if(board[row][col] != puzzleValue++) return false;
            }
        }

        return true; // Puzzle is solved
    }
}
```
``` Python []
class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        result = 99999 # Result
        directions = [(0,1), (0,-1), (1,0), (-1,0)] # Four Directions 

        # Function to check the puzzle is solved or not
        def isPuzzleSolved(board):
            puzzleValue = 1

            for row in range(2):
                for col in range(3):
                    if row == 1 and col == 2:
                        continue # No need to check the 0th position
                    if board[row][col] != puzzleValue:
                        return False
                    puzzleValue += 1

            return True # Puzzle is solved

        # Function to Swap the puzzle pieces 
        def swapPuzzlePiece(board, first, second):
            temp = board[first[0]][first[1]]

            board[first[0]][first[1]] = board[second[0]][second[1]]
            board[second[0]][second[1]] = temp

        def helper_backtrack(board, moves, previous, current):
            if moves >= 20:
                return # More than 20 moves is kind of loop in 2*3 Matrix

            if isPuzzleSolved(board):
                nonlocal result
                result = min(result, moves)
                return # Puzzle is solved

            for dir in directions:
                row = current[0] + dir[0]
                col = current[1] + dir[1]

                """ Check if the row and column lies in the range and 
                    should not be same as previous row and column : (it creates loop) """
                if 0 <= row < 2 and 0 <= col < 3 and (previous[0] != row or previous[1] != col):
                    newMove = [row, col] 
                    
                    swapPuzzlePiece(board, current, newMove) # Swap the puzzle pieces
                    helper_backtrack(board, moves+1, current, newMove) # Recursion
                    swapPuzzlePiece(board, current, newMove) # Backtracking

        zero = (-1,-1) # To store the position of zero(0)

        for row in range(2): # Find the Zero
            for col in range(3):
                if board[row][col] == 0:
                    zero = (row,col)
                    break


        helper_backtrack(board, 0, [-1,-1], zero)

        # return -1 if no Possible way to solve the puzzle
        return -1 if (result == 99999) else result
```
``` Javascript []
var slidingPuzzle = function(board) {
    
    let result = Number.MAX_SAFE_INTEGER; // Result
    const directions = [[0,1], [0,-1], [1,0], [-1,0]]; // Four Directions 

    // Function to check the puzzle is solved or not
    var isPuzzleSolved = function(board){
        let puzzleValue = 1;

        for(let row=0; row<2; row++){
            for(let col=0; col<3; col++){
                if(row == 1 && col == 2) continue; // No need to check the 0th position
                if(board[row][col] != puzzleValue++) return false;
            }
        }

        return true; // Puzzle is solved
    }

    // Function to Swap the puzzle pieces 
    var swapPuzzlePiece = function(board, first, second){
        let temp = board[first[0]][first[1]];

        board[first[0]][first[1]] = board[second[0]][second[1]];
        board[second[0]][second[1]] = temp;
    }

    var helper_backtrack = function(board, moves, previous, current){
        if(moves >= 20) return; // More than 20 moves is kind of loop in 2*3 Matrix

        if(isPuzzleSolved(board)){
            result = Math.min(result, moves);
            return; // Puzzle is solved
        }

        for(let dir of directions){
            let row = current[0] + dir[0];
            let col = current[1] + dir[1];

            /* Check if the row and column lies in the range and 
                should not be same as previous row and column : (it creates loop) */
            if(row<0 || row>=2 || col<0 || col>=3 || (previous[0] == row && previous[1] == col)){
                continue;
            }

            let newMove = [row, col]; 
            
            swapPuzzlePiece(board, current, newMove); // Swap the puzzle pieces
            helper_backtrack(board, moves+1, current, newMove); // Recursion
            swapPuzzlePiece(board, current, newMove); // Backtracking

        }
    }

    let zero = [-1,-1]; // To store the position of zero(0)

    for(let row=0; row<2; row++){ // Find the Zero
        for(let col=0; col<3; col++){
            if(board[row][col] == 0){
                zero = [row,col];
                break;
            }
        }
    }

    helper_backtrack(board, 0, [-1,-1], zero);

    // return -1 if no Possible way to solve the puzzle
    return (result == Number.MAX_SAFE_INTEGER) ? -1 : result; 
};
```
``` Typescript []
function slidingPuzzle(board: number[][]): number {
        
    let result = Number.MAX_SAFE_INTEGER; // Result
    const directions = [[0,1], [0,-1], [1,0], [-1,0]]; // Four Directions 

    // Function to check the puzzle is solved or not
    var isPuzzleSolved = function(board){
        let puzzleValue = 1;

        for(let row=0; row<2; row++){
            for(let col=0; col<3; col++){
                if(row == 1 && col == 2) continue; // No need to check the 0th position
                if(board[row][col] != puzzleValue++) return false;
            }
        }

        return true; // Puzzle is solved
    }

    // Function to Swap the puzzle pieces 
    var swapPuzzlePiece = function(board, first, second){
        let temp = board[first[0]][first[1]];

        board[first[0]][first[1]] = board[second[0]][second[1]];
        board[second[0]][second[1]] = temp;
    }

    var helper_backtrack = function(board, moves, previous, current){
        if(moves >= 20) return; // More than 20 moves is kind of loop in 2*3 Matrix

        if(isPuzzleSolved(board)){
            result = Math.min(result, moves);
            return; // Puzzle is solved
        }

        for(let dir of directions){
            let row = current[0] + dir[0];
            let col = current[1] + dir[1];

            /* Check if the row and column lies in the range and 
                should not be same as previous row and column : (it creates loop) */
            if(row<0 || row>=2 || col<0 || col>=3 || (previous[0] == row && previous[1] == col)){
                continue;
            }

            let newMove = [row, col]; 
            
            swapPuzzlePiece(board, current, newMove); // Swap the puzzle pieces
            helper_backtrack(board, moves+1, current, newMove); // Recursion
            swapPuzzlePiece(board, current, newMove); // Backtracking

        }
    }

    let zero = [-1,-1]; // To store the position of zero(0)

    for(let row=0; row<2; row++){ // Find the Zero
        for(let col=0; col<3; col++){
            if(board[row][col] == 0){
                zero = [row,col];
                break;
            }
        }
    }

    helper_backtrack(board, 0, [-1,-1], zero);

    // return -1 if no Possible way to solve the puzzle
    return (result == Number.MAX_SAFE_INTEGER) ? -1 : result; 
};
```
**UPVOTE IF YOU FOUND HELPFUL**\u2728
