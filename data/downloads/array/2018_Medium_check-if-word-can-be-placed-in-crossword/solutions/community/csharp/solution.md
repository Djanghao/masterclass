# C# Solution

**Author:** ManickBasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/5389064/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/5389064/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(m*n*l)

- Space complexity:
O(l)

# Code
```
public class Solution {
    public bool PlaceWordInCrossword(char[][] board, string word) {
        
        int rows = board.Length;
        int cols = board[0].Length;

        int[][] dir = new int[4][]
        {
            new int[] {0, 1},
            new int[] {0, -1},
            new int[] {1, 0},
            new int[] {-1, 0}
        };
        for(int i = 0; i < rows; i++)
        {
            for(int j = 0; j < cols; j++)
            {
                foreach(var d in dir)
                {
                    if(CanPlaceWord(board,word,d, i, j, 0))
                        return true;
                }
            }
        }

        return false;
    }

    private bool CanPlaceWord(char[][] board, string word, int[] dir, int row, int col, int index)
    {
        int rows = board.Length;
        int cols = board[0].Length;

        if(index == word.Length)
        {             
            return true;
        }

        if(!isIndexValid(rows, cols, row, col) || board[row][col] == '#')
        {
            return false;
        }

        int newR, newC;

        if(index == 0)
        {             
            newR = row - dir[0];
            newC = col - dir[1];

            if(isIndexValid(rows, cols, newR, newC) && board[newR][newC] != '#')
            {
                return false;
            }

            //checking for last letter
            newR = row + (word.Length * dir[0]); //row = 0 , (0,1) (0, 2) 
            newC = col + (word.Length * dir[1]); //col = 0 + (2 * 1) 

            if(isIndexValid(rows, cols, newR, newC) && board[newR][newC] != '#')
            {
                return false;
            }
        }

        newR = row + dir[0];
        newC = col + dir[1];

        if(board[row][col] == ' ' || board[row][col] == word[index])
        {
            return CanPlaceWord(board, word, dir, newR, newC, index + 1);
        }
        else
            return false;
    }

    private bool isIndexValid(int rows, int cols, int r, int c)
    {
        if(r < 0 || c < 0 || r >= rows || c >= cols)
            return false;
        else
            return true;
    }
}
```