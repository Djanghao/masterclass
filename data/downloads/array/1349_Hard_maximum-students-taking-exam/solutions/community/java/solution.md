# DP | Bit Manipulation

**Author:** subodhrai898
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/4999641/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/4999641/)

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
/*
 State -> matrix -> place a student ->
 row wise 
 first row , state
 second row and state

 optimal in a single row;
 bits -> [0,1] -> 0-> not taken and 1 is taken
 
 for(int i=0;i<m;i++){
    int currentState=0;
    if(mat[i][j]=='.'){
        // check upper left and upper right
        if(isVacant(state,j-1) && isVacant(state,j+1)){
            currentState = currentState|(1<<j);
        }
    }

 }
 state->2^8


*/


class Solution {

   int n;
   int m;
   char[][] mat;
   int[][][] dp;

   boolean isVacant(int state,int j){
     if(j<0 || j>=m) return true;
     int mask = 1<<j;
     return (state & mask)==0;
   }


   int rec(int i,int previousRow,int currentRow){
       if(i==n){
         return 0;
       }
       if(dp[i][previousRow][currentRow]!=-1) return dp[i][previousRow][currentRow];
       int ans=rec(i+1,currentRow,0);
       // find first possible seat
       for(int j=0;j<m;j++){
          if(mat[i][j]=='.' && isVacant(currentRow,j-1) && isVacant(currentRow,j+1) && isVacant(currentRow,j) && isVacant(previousRow,j-1) && isVacant(previousRow,j+1)){
            ans = Math.max(ans,1+rec(i,previousRow,currentRow|(1<<j)));
          }
       }
      return dp[i][previousRow][currentRow]=ans;
   }



    public int maxStudents(char[][] seats) {
        this.mat=seats;
        this.n = seats.length;
        this.m = seats[0].length;
        this.dp = new int[8][1<<8][1<<8];
        for(int[][] x: dp){
            for(int[] y:x){
                Arrays.fill(y,-1);
            }
        }
        return rec(0,0,0);
    }
}
```