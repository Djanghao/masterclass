# easiest solution || c-plus-plus || dfs simple approach u must seen it will be beneficial 😎😎⭐⭐.....

**Author:** youdontknow001
**Votes:** 11
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/2845795/](https://leetcode.com/problems/available-captures-for-rook/solutions/2845795/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
just using dfs approach to find all the cases that if at any point of the 4 directions p exists or not if it exists count it and remove it and if B in any of that direction then we returns back and hence by recursion of say dfs we can get our ans 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```
please upvote if it is beneficial or helpfull it will take nothing to upvote but it is very helpful for me .........
```

# Code
```
class Solution {
public:
    int count=0;
    void solve(vector<vector<char>> &board,int sr,int sc,char ch){
        if(sr>=board.size() || sc>= board[0].size() || sr<0 || sc<0 || board[sr][sc]=='B')    
            return;
        if(board[sr][sc]=='p'){
            count++;
            return;
        }
        if(board[sr][sc]=='.'){
            if(ch=='u') solve(board,sr-1,sc,'u');
            if(ch=='d') solve(board,sr+1,sc,'d');
            if(ch=='l') solve(board,sr,sc-1,'l');
            if(ch=='r') solve(board,sr,sc+1,'r');
        }
        
    }
    int numRookCaptures(vector<vector<char>>& board) {
        for(int i=0;i<board.size();i++)
            for(int j=0;j<board[i].size();j++){
                if(board[i][j]=='R'){ 
                    solve(board,i-1,j,'u');
                    solve(board,i+1,j,'d');
                    solve(board,i,j-1,'l');
                    solve(board,i,j+1,'r');
                    break;
                }
            }
        return count;
    }
};
```