# C++ || Runtime: 0 ms, faster than 100.00% || Simple solution

**Author:** Shubham-Bhardwaj
**Votes:** 9
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/1198090/](https://leetcode.com/problems/available-captures-for-rook/solutions/1198090/)

---

```
class Solution {
public:
    int numRookCaptures(vector<vector<char>>& board) {
        int cap=0,row,col;
		//Find the position of the rook
        for(int i=0; i<8; i++){
            for(int j=0; j<8; j++){
                if(board[i][j]=='R'){
                    row=i;
                    col=j;
                }
            }
        }
		
		//Move in upward direction to check for any possible captures
        int i=row,j=col;
        while(i>=0 && board[i][j]!='B'){
            if(board[i][j]=='p'){
                cap++;
                break;
            }            
            i--;
        }
		
		//Move in downward direction to check for any possible captures
        i=row,j=col;
        while(i<=7 && board[i][j]!='B'){
            if(board[i][j]=='p'){
                cap++;
                break;
            }            
            i++;
        }
		
		//Move in leftward direction to check for any possible captures
        i=row,j=col;
        while(j>=0 && board[i][j]!='B'){
            if(board[i][j]=='p'){
                cap++;
                break;
            }            
            j--;
        }
		
		//Move in rightward direction to check for any possible captures
        i=row,j=col;
        while(j<=7 && board[i][j]!='B'){
            if(board[i][j]=='p'){
                cap++;
                break;
            }
            j++;
        }
        
        return cap;
    }
};
```