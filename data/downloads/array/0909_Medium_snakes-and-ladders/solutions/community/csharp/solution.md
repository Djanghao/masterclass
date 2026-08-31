# C# | BFS

**Author:** c_4less
**Votes:** 1
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/3093446/](https://leetcode.com/problems/snakes-and-ladders/solutions/3093446/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
     public int SnakesAndLadders(int[][] board) {
        int bLength = board.Length;
    //   Reverse the board to traverse from top left
        Array.Reverse(board);
        //square , move
        Queue<(int square,int moves)> queue = new();
        queue.Enqueue((1,0));
        HashSet<int> visited = new();

        while(queue.Any())
        {
            
            var currItem = queue.Dequeue();
            for (int i = 1; i < 7; i++)
            {
                int nextSquare = currItem.square + i;
                var newCoord = getInttoPos(nextSquare, bLength);
                if (board[newCoord.row][newCoord.col] != -1)
                {
                    nextSquare = board[newCoord.row][newCoord.col];
                }

                if (nextSquare == bLength * bLength)
                {
                    return currItem.moves + 1;
                }

                if (!visited.Contains(nextSquare))
                {
                    visited.Add(nextSquare);
                    queue.Enqueue((nextSquare, currItem.moves + 1));
                }
            }
        }
        return -1;
    }
    
    private (int row,int col) getInttoPos(int square, int length)
    {
        int row = (square-1)/length;
        int col = (square-1) % length;
       if(row %2!=0)// if its an alternate row, traverse from right to left
        {
//Convert the left column pointer into right and vice versa, 0th column will be come last column and last will be come 0th col.
            col = length - 1-col;
        }
        return (row,col);
    }

}
```