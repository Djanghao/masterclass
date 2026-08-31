# Python3, C++, Java || 0ms || Warnsdorff's Rule, cached moves, DFS || Explanation

**Author:** dudeandcat
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/5955944/](https://leetcode.com/problems/the-knights-tour/solutions/5955944/)

---

Summary:  Warnsdorff's Rule made the biggest speed difference, bringing the runtime down to 0ms for all three languages (Python3, C++, Java).

The basic algorithm of the code below uses Depth First Search (DFS) to try possible paths to moving the knight to all chess board squares exactly once, backtracking on failure to reach all squares, and trying other moves for the knight.  Then two main optimizations were used to make the code faster:  1) Pre-calculate all possible valid moves from each square and cache the possible moves for future test cases.  2) Use Warnsdorff's Rule to sort the list of possible moves for a square, to an optimal order.

Python3 Runtimes:
1067ms -- The Python3 code with only DFS.
386ms -- Include pre-calculation of all possible valid moves for each square.
0ms -- Also include Warnsdorff's Rule ordering for possible moves.

**Algorithm:**
1) Try to get cached pre-calucalated possible valid moves from an earlier test case.
2) If no cached pre-calculated moves, then calculate possible valid moves for each board square.  Sort moves according to Warnsdorff's Rule.
3) Create the board with -1 in each board square to indicate all squares are initially unused.
4) Call recursive Depth First Search (DFS) routine, to try all possible moves for a square, then recurse to try all possible moves from those moves, and so on, until having made enough moves to fill the board.  Mark the board with each move-order number for each move.  When hitting a dead-end, backtrack up the recursion stack and un-marking the board.
5) Return the board that was filled-in with move-order numbers during the Depth First Search.

**Optimization: Pre-calculate possible valid moves.**

Most coding solutions to this problem include a list of the 8 possible relative moves for a knight.  For each square of the board, all possible moves are tried, although some of the moves will be invalid moves that are off the board.  With the maximum board size of only 5 x 5, there will be many of the 8 possible moves from a square that invalidly move off the board.  The only square that has all 8 possible knight moves where none of the 8 moves will invalidly move off the board, is the center square of a 5 x 5 board.  All other squares, from all possible board sizes, will have moves that go off the edge of the board.

The code below reduces the number of moves to test for each square of the board, by pre-calculating the valid moves from each square of the board.  A grid `curMoves[row][col]` is created the same size as the board.  For each square in `curMoves`, try the 8 possible knight moves, and only save the moves for each square, which do not move off of the board.  Therefore, during the DFS search for a path, the number of moves to test is reduced from 8 for each square, to only the valid moves for that square.  During the DFS, each square may be used many times as a square to move from.  So, reducing the possible moves to try can greatly speed-up the code.

Another small speed-up, is to save the pre-calculated moves as absolute moves, instead of relative moves.  This means that the saved pre-calculated moves are row numbers (0..m-1) and column numbers (0..m-1), instead of relative distances (-2..+2).  This saves repeated addition to convert relative moves to an absolute move when repeatedly trying all possible moves from a square.  The saved pre-calculated moves can be saved as absolute moves, because each square on the board has its own unique list of saved moves.

The contents of `curMoves[row][col]`, is a sorted list of valid moves, containing: `[warnsdorffsCnt, toRow, toCol]`.  The `toRow` and `toCol` values are the row number (0..m-1) and column number (0..n-1) to move to, stored as absolute row and column numbers, instead of relative move distances.  The `warnsdorffsCnt` is used for sorting the list of moves, and is described in the next section below.

**Optimization: Warnsdorff's Rule ordering of valid moves.**

Warnsdorff's Rule was created in 1823 by H. C. von Warnsdorff.  It is a heuristic (i.e. good enough approximation) algorithm for moving a single knight to travel the entire chess board.  Warnsdorff's Rule only determines an optimal order to try the knight's moves, for each square of the board.  The general rule is to first try moving to the hardest (i.e. most difficult) squares to get to.  The "hardest to get to" is defined as the number of possible squares on the board, from which a knight could be moved to that square.  The fewer ways to get to a square, the harder it is to get to.

The list of valid moves for a square is a sorted list containing:  `[warnsdorffsCnt, toRow, toCol]`.  The `warnsdorffsCnt` value is used only to sort the moves.  After the list is sorted, the `warnsdorffsCnt` is ignored.  A lower `warnsdorffsCnt` value implies the `toRow,toCol` square is "harder" to get to.

Three equivalent ways of thinking about Warnsdorff's Rule are:

1)  In f's Rule, choose the moves first that have the fewest number of valid next moves if that move were taken.  For example, if there are two possible moves from a square, and one of those moves would be to a square that has 3 possible moves, and the other move is to a square that has 8 possible moves, then try the more restricted 3 possible move square before trying the 8 possible move square.

2)  Warnsdorff's Rule is also equivalent to sorting the list of moves for each square, so that the moves to squares that have the fewest number of ways to get to that square come first in the list of possible moves.  

3)  Warnsdorff's Rule is also equivalent to sorting the list of possible moves for a square, so that the moves to squares that are the hardest to get to, come first in the list of possible moves.

**Optimization: Cache pre-calculated valid moves for future test cases.**

The pre-calculated valid moves for each board square, is *only* dependent on the size of the board.  Any boards with the same size, will have the same pre-calculated valid moves.  So, after going to all the work of building lists all possible valid moves for each square, then sorting those lists according to Warnsdorff's Rule, the code below saves the possible moves as cached data in the static variable `nextMoves[m][n]`, so it can be re-used the next time we have a test case with a board of the same size.  Re-using the pre-calculated valid moves between test cases, only applys to the test cases within a single Submit or Run.  If clicking on Submit or Run again, the cached data will be gone, and the pre-calculated valid moves will need to be calculated again.  This optimization speeds-up the code by not needing to recalculate the valid moves for boards of the same size, but in different test cases.

**Depth First Search for path to all board squares.**

The Depth First Search (DFS) starts at the original starting square, and tries all possible valid moves for that square.  For each move, recurse to try all possible moves from that square.  Repeat recursively until having moved to all squares of the board exactly once, or until a dead-end with no moves to an unused square.  If all squares of the board were visited exactly once, then set the `done` flag and unwind the recursion out of the `dfs()` function.  If a dead-end, then un-mark the move on the board, backtrack one level backward in recursion, and try another move for that square.  If no more moves for that square, then backtrack yet another level backward in recursion to try more moves for that square.  Repeat until finding a path that moves to all squares of the board exactly once.  A solution is guarenteed by the leetcode problem's constraints.

As the DFS makes moves, the squares moved to are marked with the move-order number, which fills in the answer for this problem, and marks the square as used or moved to, by having a non-negative value.  If having to backtrack a recursion level, then unmark the square backed out of, by setting that board square to a negative value, which indicates the square is unused.

In the DFS, the order the moves for a square is the order determined by Warnsdorff's Rule.  This ordering of moves is optimised by Warnsdorff's Rule, to as quickly as possible, try to find a complete path through all squares.  Moving to the "hardest to get to" squares first.


**--- Python3 code - clean code ---**
Runtime: 0ms in October 2024.  Runs in 0ms to 3ms, but usually 0ms.
```
moves = [(-1,+2), (-2,+1), (-2,-1), (-1,-2), (+1,-2), (+2,-1), (+2,+1), (+1,+2)]
MAX_SIZE = 5
nextMoves = [[None]*(MAX_SIZE+1) for _ in range(MAX_SIZE + 1)]

class Solution:
    def tourOfKnight(self, m: int, n: int, r: int, c: int) -> List[List[int]]:
        def getCurMoves(m: int, n: int) -> List[List[List[List[int]]]]:
            curMoves = nextMoves[m][n]
            if curMoves == None:
                curMoves = [[[] for _ in range(n)] for _ in range(m)]
                
                for move in moves:
                    for r2 in range(max(0,-move[0]), min(m,m-move[0])):
                        for c2 in range(max(0,-move[1]), min(n,n-move[1])):
                            curMoves[r2][c2].append([0, r2 + move[0], c2 + move[1]])
                            
                for r2 in range(m):
                    for c2 in range(n):
                        for move in curMoves[r2][c2]:
                            move[0] = len(curMoves[move[1]][move[2]])
                        curMoves[r2][c2].sort()
                        
                nextMoves[m][n] = curMoves
            return curMoves
        
        done = False
        def dfs (r: int, c: int, moveNum: int) -> None:
            nonlocal done
            board[r][c] = moveNum
            moveNum += 1
            if moveNum == cellMax:
                done = True
            else:
                for warnsdorffsCnt, r2, c2 in curMoves[r][c]:
                    if board[r2][c2] < 0:
                        dfs(r2, c2, moveNum)
                        if done:  return
                board[r][c] = -1
            return
        
        curMoves = getCurMoves(m, n)
        board = [[-1]*n for _ in range(m)]
        cellMax = m * n
        if cellMax == 1:  return [[0]]
        dfs(r, c, 0)
        return board
```
**--- Python3 code - commented code ---**
Runtime: 0ms in October 2024.  Runs in 0ms to 3ms, but usually 0ms.
```
moves = [(-1,+2), (-2,+1), (-2,-1), (-1,-2), (+1,-2), (+2,-1), (+2,+1), (+1,+2)]
MAX_SIZE = 5
nextMoves = [[None]*(MAX_SIZE+1) for _ in range(MAX_SIZE + 1)]


class Solution:
    def tourOfKnight(self, m: int, n: int, r: int, c: int) -> List[List[int]]:
        # Get cached moves for each square, or build a new grid of moves 
        # for each square.  This creates a grid in curMoves[][] the same 
        # size as the board.  In each square of curMoves[][], create a 
        # list of valid moves that start from that square.  Using this 
        # pre-calculated list of moves, saves time from testing ALL 
        # possible relative moves from a cell, some of which may be 
        # invalidly off the board.  And saves time from repeatedly 
        # using relative moves, by saving only valid absolute moves 
        # in curMoves[][].
        #
        # The contents of curMoves[row][col] is a sorted list of valid 
        # moves from the board square row,col.  Each move in the sorted 
        # list of valid moves, is a list containing:
        #
        #       [warnsdorffsCnt, toRow, toCol]
        #
        # The toRow and toCol values are the row number (0..m-1) and 
        # column number (0..n-1) for the move, as absolute row and 
        # column numbers, instead of relative move distances.  The 
        # warnsdorffsCnt is the number of moves that can be made from 
        # square toRow,toCol, or equivalently a measure of how hard 
        # it is to get to square toRow,toCol with lower numbers 
        # indicating harder to get to.  The warnsdorffsCnt value is only 
        # used for sorting the list of moves to try to have most optimal 
        # moves appearing first in the list.
        #
        # With the list of valid moves for each square, use Warnsdorff's 
        # Rule for deciding the order of the moves, and sort the lists 
        # of moves.  Three equivalent ways of thinking about Warnsdorff's 
        # Rule are:
        #
        #   1)  In Warnsdorff's Rule, choose the moves first that have 
        #       the fewest number of valid next moves, if that move 
        #       were taken.  For example, if there are two possible 
        #       moves from a square, and one of those moves would be 
        #       to a square that has 3 possible moves, and the other 
        #       move is to a square that has 8 possible moves, then 
        #       try the 3 possible move square before trying the 8 
        #       possible move square.
        #
        #   2)  Warnsdorff's Rule is also equivalent to sorting the list 
        #       of moves for each square, so that the moves to squares 
        #       that have the fewest number of ways to get to that 
        #       square come first in the list of possible moves.  
        #
        #   3)  Warnsdorff's Rule is also equivalent to sorting the 
        #       list of possible moves for a square, so that the moves 
        #       to squares that are the hardest to get to, come first 
        #       in the list of possible moves.
        #
        # After going to all the work of building all possible moves 
        # and sorting them according to Warnsdofrf's Rule for each cell 
        # on an m x n board, save those possible moves as cached data 
        # in nextMoves[][], so it can be re-used the next time we have 
        # a board of the same size.
        def getCurMoves(m: int, n: int) -> List[List[List[List[int]]]]:
            curMoves = nextMoves[m][n]
            if curMoves == None:
                curMoves = [[[] for _ in range(n)] for _ in range(m)]
                # Create the list of possible moves from each square.
                for move in moves:
                    for r2 in range(max(0,-move[0]), min(m,m-move[0])):
                        for c2 in range(max(0,-move[1]), min(n,n-move[1])):
                            curMoves[r2][c2].append([0, r2 + move[0], c2 + move[1]])
                # Use Warnsdorff's Rule to sort the list of possible moves 
                # to 
                for r2 in range(m):
                    for c2 in range(n):
                        for move in curMoves[r2][c2]:
                            move[0] = len(curMoves[move[1]][move[2]])
                        curMoves[r2][c2].sort()
                nextMoves[m][n] = curMoves
            return curMoves
        
        # Recursion routine to do a Depth First Search (DFS) for a currect 
        # path to all squares of the board.  Backtrack when can't move to 
        # all board squares exactly once, and try other moves for squares.
        done = False
        def dfs (r: int, c: int, moveNum: int) -> None:
            nonlocal done
            board[r][c] = moveNum
            moveNum += 1
            if moveNum == cellMax:
                done = True
            else:
                for warnsdorffsCnt, r2, c2 in curMoves[r][c]:
                    if board[r2][c2] < 0:    # If square not yet moved to...
                        dfs(r2, c2, moveNum)
                        if done:  return
                board[r][c] = -1
            return
        

        # Get the list of moves for each board square.  Create the board, 
        # then call the DFS recursion routine to try to find a path that  
        # uses all the board squares exactly once.
        curMoves = getCurMoves(m, n)
        board = [[-1]*n for _ in range(m)]
        cellMax = m * n
        if cellMax == 1:  return [[0]]
        dfs(r, c, 0)
        return board
```
**--- C++ code - commented code ---**
Runtime: 0ms in October 2024.  Runs in 0ms to 2ms, but usually 0ms.
```
class Solution {

public:
    const vector<vector<int>> moves = 
                        { {-1,+2}, {-2,+1}, {-2,-1}, {-1,-2}, 
                          {+1,-2}, {+2,-1}, {+2,+1}, {+1,+2} };
    #define MAX_SIZE 5
    static vector<vector<vector<vector<vector<vector<int>>>>>> nextMoves;
    vector<vector<int>> board;
    vector<vector<vector<vector<int>>>>* curMoves;
    int cellMax;
    
    
    Solution() {ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0);}
    vector<vector<int>> tourOfKnight(int m, int n, int r, int c) {
        // Get the list of moves for each board square.  Create the board, 
        // then call the DFS recursion routine to try to find a path that  
        // uses all the board squares exactly once.
        curMoves = getCurMoves(m, n);
        board = vector<vector<int>>(m, vector<int>(n, -1));
        cellMax = m * n;
        if (cellMax == 1)  return vector<vector<int>>{{0}};

        dfs(r, c, 0);
        return board;
    }
    
private:    
    // Recursion routine to do a Depth First Search (DFS) for a currect 
    // path to all squares of the board.  Backtrack when can't move to 
    // all board squares exactly once, and try other moves for squares.
    bool done = false;
    void dfs (int r, int c, int moveNum) {
        board[r][c] = moveNum++;
        if (moveNum == cellMax)
            done = true;
        else {
            for (vector<int>& move : (*curMoves)[r][c]) {
                if (board[move[1]][move[2]] < 0) { // If square not used...
                    dfs(move[1], move[2], moveNum);
                    if (done)  return;
                }
            }
            board[r][c] = -1;
        }
        return;
    }

    
    // Get cached moves for each square, or build a new grid of moves 
    // for each square.  This creates a grid in curMoves[][] the same 
    // size as the board.  In each square of curMoves[][], create a 
    // list of valid moves that start from that square.  Using this 
    // pre-calculated list of moves, saves time from testing ALL 
    // possible relative moves from a cell, some of which may be 
    // invalidly off the board.  And saves time from repeatedly 
    // using relative moves, by saving only valid absolute moves 
    // in curMoves[][].
    //
    // The contents of curMoves[row][col] is a sorted list of valid 
    // moves from the board square row,col.  Each move in the sorted 
    // list of valid moves, is a list containing:
    //
    //       [warnsdorffsCnt, toRow, toCol]
    //
    // The toRow and toCol values are the row number (0..m-1) and 
    // column number (0..n-1) for the move, as absolute row and 
    // column numbers, instead of relative move distances.  The 
    // warnsdorffsCnt is the number of moves that can be made from 
    // square toRow,toCol, or equivalently a measure of how hard 
    // it is to get to square toRow,toCol with lower numbers 
    // indicating harder to get to.  The warnsdorffsCnt value is only 
    // used for sorting the list of moves to try to have most optimal 
    // moves appearing first in the list.
    //
    // With the list of valid moves for each square, use Warnsdorff's 
    // Rule for deciding the order of the moves, and sort the lists 
    // of moves.  Three equivalent ways of thinking about Warnsdorff's 
    // Rule are:
    //
    //   1)  In Warnsdorff's Rule, choose the moves first that have 
    //       the fewest number of valid next moves, if that move 
    //       were taken.  For example, if there are two possible 
    //       moves from a square, and one of those moves would be 
    //       to a square that has 3 possible moves, and the other 
    //       move is to a square that has 8 possible moves, then 
    //       try the 3 possible move square before trying the 8 
    //       possible move square.
    //
    //   2)  Warnsdorff's Rule is also equivalent to sorting the list 
    //       of moves for each square, so that the moves to squares 
    //       that have the fewest number of ways to get to that 
    //       square come first in the list of possible moves.  
    //
    //   3)  Warnsdorff's Rule is also equivalent to sorting the 
    //       list of possible moves for a square, so that the moves 
    //       to squares that are the hardest to get to, come first 
    //       in the list of possible moves.
    //
    // After going to all the work of building all possible moves 
    // and sorting them according to Warnsdorff's Rule for each cell 
    // on an m x n board, save those possible moves as cached data 
    // in nextMoves[][], so it can be re-used the next time we have 
    // a board of the same size.
    vector<vector<vector<vector<int>>>>* getCurMoves(int m, int n) {
        vector<vector<vector<vector<int>>>>* curMoves = &nextMoves[m][n];
        if (curMoves->size() == 1) {
            curMoves = new vector<vector<vector<vector<int>>>>(m, vector<vector<vector<int>>>(n));

            // Create the list of possible moves from each square.
            for (const vector<int>& move : moves) 
                for (int r2 = max(0, -move[0]); r2 < min(m, m - move[0]); r2++) 
                    for (int c2 = max(0, -move[1]); c2 < min(n, n - move[1]); c2++) 
                        (*curMoves)[r2][c2].push_back(vector<int>{0, r2 + move[0], c2 + move[1]});
            
            // Use Warnsdorff's Rule to sort the list of possible moves 
            // from this square. 
            for (int r2 = 0; r2 < m; r2++) {
                for (int c2 = 0; c2 < n; c2++) {
                    vector<vector<int>>& moveList = (*curMoves)[r2][c2];
                    for (vector<int>& move : moveList) 
                        move[0] = (*curMoves)[move[1]][move[2]].size();
                    sort(moveList.begin(), moveList.end());
                }
            }
            
            // Save this list of possible moves for future test cases 
            // that use the same board size.
            nextMoves[m][n] = *curMoves;
        }
        return curMoves;
    }
};

// Initialize the static variable "nextMoves" within the Solution class.  
// Only one initialization per Submit or Run.
vector<vector<vector<vector<vector<vector<int>>>>>> Solution::nextMoves = 
            vector<vector<vector<vector<vector<vector<int>>>>>>(MAX_SIZE + 1, 
            vector<vector<vector<vector<vector<int>>>>>(MAX_SIZE + 1, 
            vector<vector<vector<vector<int>>>>{{{{0}}}}));
```
**--- Java code - commented code ---**
Runtime: 0ms in October 2024.  Runs in 0ms to 1ms, but usually 0ms.

This Java code was translated from the Python3 code further above.  The originally translated code has a runtime only as fast as 1ms.  The code below has been speed optimized with less than good programming practices to get the runtime to 0ms.  The speed optimizations are in how the individual moves are stored in `curMoves`.  In the original version, the three values of an individual move were stored in an `int[]` array of length 3.  But in this speed optimized version below, the three values of an individual move are stored packed within a single integer value as 3 separate bytes.  This optimization was enough to squeeze an extra millisecond out of the runtime, to achieve 0ms runtime for a Submit.
```
class Solution {
    private static final int[][] moves = 
                        { {-1,+2}, {-2,+1}, {-2,-1}, {-1,-2}, 
                          {+1,-2}, {+2,-1}, {+2,+1}, {+1,+2} };
    private static final int MAX_SIZE = 5;
    private static final int[][][][][] nextMoves = 
                        new int[MAX_SIZE + 1][MAX_SIZE + 1][][][];
    private int[][] board;
    private int[][][] curMoves;
    private int cellMax;

    
    public int[][] tourOfKnight(int m, int n, int r, int c) {
        // Get the list of moves for each board square.  Create the board, 
        // then call the DFS recursion routine to try to find a path that  
        // uses all the board squares exactly once.
        curMoves = getCurMoves(m, n);

        board = new int[m][n];
        for (int r1 = 0; r1 < m; r1++)
            for (int c1 = 0; c1 < n; c1++)
                board[r1][c1] = -1;

        cellMax = m * n;
        if (cellMax == 1)  return new int[][]{{0}};

        dfs(r, c, 0);
        return board;
    }
    
    
    // Recursion routine to do a Depth First Search (DFS) for a currect 
    // path to all squares of the board.  Backtrack when can't move to 
    // all board squares exactly once, and try other moves for squares.
    private boolean done = false;
    private void dfs (int r, int c, int moveNum) {
        board[r][c] = moveNum++;
        if (moveNum == cellMax)
            done = true;
        else {
            for (int move : curMoves[r][c]) {
                int moveRow = (move >> 8) & 0xF;    // Get row for move.
                if (board[moveRow][move & 0xF] < 0) {   // If square not used...
                    dfs(moveRow, move & 0xF, moveNum);
                    if (done)  return;
                }
            }
            board[r][c] = -1;
        }
        return;
    }

    
    // Get cached moves for each square, or build a new grid of moves 
    // for each square.  This creates a grid in curMoves[][] the same 
    // size as the board.  In each square of curMoves[][], create a 
    // list of valid moves that start from that square.  Using this 
    // pre-calculated list of moves, saves time from testing ALL 
    // possible relative moves from a cell, some of which may be 
    // invalidly off the board.  And saves time from repeatedly 
    // using relative moves, by saving only valid absolute moves 
    // in curMoves[][].
    //
    // The contents of curMoves[row][col] is a sorted list of valid 
    // moves from the board square row,col.  Each move in the sorted 
    // list of valid moves, is an int containing:
    //
    //       (warnsdorfCnt << 16) + (toRow << 8) + toCol
    //
    // The toRow and toCol values are the row number (0..m-1) and 
    // column number (0..n-1) for the move, as absolute row and 
    // column numbers, instead of relative move distances.  The 
    // warnsdorffsCnt is the number of moves that can be made from 
    // square toRow,toCol, or equivalently a measure of how hard 
    // it is to get to square toRow,toCol with lower numbers 
    // indicating harder to get to.  The warnsdorffsCnt value is only 
    // used for sorting the list of moves to try to have most optimal 
    // moves appearing first in the list.
    //
    // With the list of valid moves for each square, use Warnsdorff's 
    // Rule for deciding the order of the moves, and sort the lists 
    // of moves.  Three equivalent ways of thinking about Warnsdorff's 
    // Rule are:
    //
    //   1)  In Warnsdorff's Rule, choose the moves first that have 
    //       the fewest number of valid next moves, if that move 
    //       were taken.  For example, if there are two possible 
    //       moves from a square, and one of those moves would be 
    //       to a square that has 3 possible moves, and the other 
    //       move is to a square that has 8 possible moves, then 
    //       try the 3 possible move square before trying the 8 
    //       possible move square.
    //
    //   2)  Warnsdorff's Rule is also equivalent to sorting the list 
    //       of moves for each square, so that the moves to squares 
    //       that have the fewest number of ways to get to that 
    //       square come first in the list of possible moves.  
    //
    //   3)  Warnsdorff's Rule is also equivalent to sorting the 
    //       list of possible moves for a square, so that the moves 
    //       to squares that are the hardest to get to, come first 
    //       in the list of possible moves.
    //
    // After going to all the work of building all possible moves 
    // and sorting them according to Warnsdorff's Rule for each cell 
    // on an m x n board, save those possible moves as cached data 
    // in nextMoves[][], so it can be re-used the next time we have 
    // a board of the same size.
    private int[][][] getCurMoves(int m, int n) {
        int[][][] curMoves = nextMoves[m][n];
        if (curMoves == null) {
            curMoves = new int[m][n][];
            int[][] moveCounts = new int[m][n];
            
            // Count the number of moves from each square.  Use the 
            // counts to allocate array of moves for each square.
            for (int[] move : moves) {
                int deltaRow = move[0];
                int deltaCol = move[1];
                int rowLimit = Math.min(m, m - deltaRow);
                int colLimit = Math.min(n, n - deltaCol);
                for (int r2 = Math.max(0 , -deltaRow); r2 < rowLimit; r2++) {
                    for (int c2 = Math.max(0, -deltaCol); c2 < colLimit; c2++) {
                        moveCounts[r2][c2]++;
                    }
                }
            }
            for (int r2 = 0; r2 < m; r2++) 
                for (int c2 = 0; c2 < n; c2++) 
                    curMoves[r2][c2] = new int[moveCounts[r2][c2]];
            
            // Create the list of possible moves from each square.
            for (int[] move : moves) {
                int deltaRow = move[0];
                int deltaCol = move[1];
                int rowLimit = Math.min(m, m - deltaRow);
                int colLimit = Math.min(n, n - deltaCol);
                for (int r2 = Math.max(0, -deltaRow); r2 < rowLimit; r2++) {
                    for (int c2 = Math.max(0, -deltaCol); c2 < colLimit; c2++) {
                        curMoves[r2][c2][--moveCounts[r2][c2]] = 
                                ((r2 + deltaRow) << 8) + c2 + deltaCol;
                    }
                }
            }
            
            // Use Warnsdorff's Rule to sort the list of possible moves 
            // from this square. 
            for (int r2 = 0; r2 < m; r2++) {
                for (int c2 = 0; c2 < n; c2++) {
                    int[] moves = curMoves[r2][c2];
                    for (int i = curMoves[r2][c2].length - 1; i >= 0; i--) 
                        moves[i] += (curMoves[(moves[i] >> 8) & 0xF][moves[i] & 0xF].length << 16);
                    Arrays.sort(moves);
                }
            }
            
            // Save this list of possible moves for future test cases 
            // that use the same board size.
            nextMoves[m][n] = curMoves;
        }
        return curMoves;
    }
}
```
