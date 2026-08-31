# O(nm) BF // Beats %95 // Java

**Author:** beken
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/2159751/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/2159751/)

---

```
class Solution {
    public int longestLine(int[][] mat) {
        
        // Contains nodes visited before
            // Check them, if they are 1
        
        int maxLength = 0;
        
        for(int row = 0; row < mat.length; row++){
            for(int col = 0; col < mat[0].length; col++){
                if(mat[row][col] == 1){
                    // Check the node
                    int longestLength = checkLongestLength(mat, row, col);
                    maxLength = Math.max(longestLength, maxLength);            
                }
            }
        }
        return maxLength;
    }
    
    public int checkLongestLength(int[][] mat, int row, int col){
        int lengthSE = 1;
        
        // Check diagonal to SE
        int originalRow = row;
        int originalCol = col;
        if(row > 0 && col > 0 && (mat[row -1][col-1] == 1)){
            /* Node already visited. */        
        } else{
            row++;
            col++;
            while(row < mat.length && col < mat[0].length){
                if(mat[row][col] == 0)
                    break;
                lengthSE++;
                row++;
                col++;
            }
        }
        
        row = originalRow;
        col = originalCol;
        
        int lengthSW = 1;
        // Check diagonal to SW
        if(row > 0 && col < mat[0].length-1 && (mat[row -1][col+1] == 1)){
            /* Node already visited. */        
        } else{
            row++;
            col--;
            while(row < mat.length && col >= 0){
                if(mat[row][col] == 0)
                    break;
                lengthSW++;
                row++;
                col--;
            }
        }
        
        row = originalRow;
        col = originalCol;
        
        int lengthE = 1;
        // Check West
        if(col > 0 && (mat[row][col-1] == 1)){
            /* Node already visited. */        
        } else{
            col++;
            while(col < mat[0].length){
                if(mat[row][col] == 0)
                    break;
                lengthE++;
                col++;
            }
        }
        
        row = originalRow;
        col = originalCol;
        
        int lengthS = 1;
        // Check North
        if(row > 0 && (mat[row-1][col] == 1)){
            /* Node already visited. */        
        } else{
            row++;
            while(row < mat.length){
                if(mat[row][col] == 0)
                    break;
                lengthS++;
                row++;
            }
        }
        
           int maxDiagonal = Math.max(lengthSE, lengthSW);
           int maxStraight = Math.max(lengthS, lengthE);
           
        return Math.max(maxDiagonal, maxStraight);
    }
}
```