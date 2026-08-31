# C++ || Search in all 8 sides

**Author:** aparna_g
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-move-is-legal/solutions/1389449/](https://leetcode.com/problems/check-if-move-is-legal/solutions/1389449/)

---

8 sides - top,bottom,left,right, top left, top right, bottom left , bottom right diagonals
```
class Solution {
public:
    bool checkMove(vector<vector<char>>& board, int rMove, int cMove, char color) {
        board[rMove][cMove] = color; 
        char other = (color == 'W') ? 'B' : 'W';                 
        
        int dx[8] = {0,0,-1,1,-1,-1,1,1};
        int dy[8] = {1,-1,0,0,-1,1,-1,1};
        
        for(int i=0;i<8;i++) {            
            int x = rMove+dx[i];
            int y = cMove+dy[i];             
            int dist = 1;
            //the total length should at least be 3 including the end points. 
            //So before visiting 'color' again you should've visited atleast 1 'other' cell 
			//which also means that distance between the end points/'color' cells should be atleast 2
            while(x>=0 && y>=0 && x<8 && y<8 && board[x][y]!='.'){
                if(dist>=2 && board[x][y] == color) 
                    return true; 
                if(board[x][y] != other)
                    break; 
                dist++;
                x += dx[i];
                y += dy[i];
            }          
        }        
        return false;
    }
};
```