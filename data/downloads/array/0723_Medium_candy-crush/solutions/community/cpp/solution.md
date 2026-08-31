# Optimal and Easy to understand - C++ Solution

**Author:** samidhasingh92
**Votes:** 2
**Link:** [https://leetcode.com/problems/candy-crush/solutions/4355761/](https://leetcode.com/problems/candy-crush/solutions/4355761/)

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
class Solution {
public:
    vector<vector<int>> candyCrush(vector<vector<int>>& board) { 
      bool done = true;
while(done){
    done = false;

        for(int i=0;i<board.size();i++){
        for(int j=0;j<board[0].size()-2;j++){
            int num1 = abs(board[i][j]);
            int num2 = abs(board[i][j+1]);
            int num3 = abs(board[i][j+2]);
            if(num1==num2 && num2==num3
             && num1!=0 ){
                    board[i][j]= -num1;
                    board[i][j+1]= -num2;
                    board[i][j+2]= -num3;
                    done = true;
            }
        }
          
    }


    for(int j=0;j<board[0].size();j++){
        for(int i=0;i<board.size()-2;i++){
            int num1 = abs(board[i][j]);
            int num2 = abs(board[i+1][j]);
            int num3 = abs(board[i+2][j]);
            if(num1==num2 && num2==num3
             && num1!=0 ){
                    board[i][j]= -num1 ;
                    board[i+1][j]= -num2;
                    board[i+2][j]= -num3;
                    done = true;
            }
        }
          
    }

    if(done) {
    for(int j=0;j<board[0].size();j++){
        int it=board.size()-1;
        for(int i=board.size()-1;i>=0;i--){
            if(board[i][j]>0){
                board[it][j] = board[i][j];
                it--;
            }
        }

        for(int k=it;k>=0;k--){
            board[k][j]=0;
        }
    } 

    }

}



        return board;
    }

};
```