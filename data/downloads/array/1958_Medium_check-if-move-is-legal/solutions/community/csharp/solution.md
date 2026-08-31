# Loop through directions array

**Author:** rezord
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-move-is-legal/solutions/4333881/](https://leetcode.com/problems/check-if-move-is-legal/solutions/4333881/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool CheckMove(char[][] board, int rMove, int cMove, char color) {
        var m=board.Length;
        var n=board[0].Length;
        var dir= new int[,]{{1,0},{0,1},{-1,0},{0,-1},{1,1},{1,-1},{-1,1},{-1,-1}};
        for(var i=0;i<dir.GetLength(0);i++){
            var x=rMove+dir[i,0];
            var y=cMove+dir[i,1];
            var cnt=1;
            var invert=false;
            while(x>=0 && y>=0 && x<m && y<n){
                if(board[x][y]=='.') break;
                if(cnt==1 && board[x][y]==color) break;
                if(cnt>1 && board[x][y]==color && invert) return true;
                invert=true;
                cnt++;
                x+=dir[i,0];
                y+=dir[i,1];
            }

        }
        return false;
    }
}
```