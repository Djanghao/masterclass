# Recursive, Memoization, Tabulation, Space Optimization, Beats 95%

**Author:** athravmehta06
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/3456225/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/3456225/)

---

# Complexity
- Time complexity: $$O(n)$$ $$ tabulation, space Optimization $$ 

- Space complexity: $$O(1)$$ $$ space Optimization$$

# Code
```
class Solution {
    int mod = 1000000000;
    public int minSideJumps(int[] obstacles) {
        // return helperRec(obstacles, 2, 0);

        // int[][] dp = new int[4][obstacles.length];
        // for(int row[] : dp) Arrays.fill(row, -1);
        // return helperMem(obstacles, 2, 0, dp);

        // return helperTab(obstacles);

        return helperSO(obstacles);
    }
    
    // RECURSIVE APPROACH
    public int helperRec(int[] obstacles, int lane, int index){
        int n = obstacles.length;
        //BASE CASE
        if(index == n - 1) return 0;

        // CONTINUING TO THE SAME LANE
        if(obstacles[index + 1] != lane){
            return helperRec(obstacles, lane, index + 1);
        }
        // MEET OBSTACLE IN SAME LANE THEN TRYING SIDE JUMPS
        else{ 
            int ans = Integer.MAX_VALUE;
            for(int i = 1; i <= 3; i++){
                if(lane != i && obstacles[index] != i) ans = Math.min(ans, 1 + helperRec(obstacles, i, index));
            }
            return ans;
        }
    }

    // MEMOIZATION APPROACH
    public int helperMem(int[] obstacles, int lane, int index, int[][] dp){
        int n = obstacles.length;
        //BASE CASE
        if(index == n - 1) return 0;

        //MEMOIZATION CHECK
        if(dp[lane][index] != -1) return dp[lane][index];
        if(obstacles[index + 1] != lane){
            return helperMem(obstacles, lane, index + 1, dp);
        }else{
            int ans = Integer.MAX_VALUE;
            for(int i = 1; i <= 3; i++){
                if(lane != i && obstacles[index] != i) ans = Math.min(ans, 1 + helperMem(obstacles, i, index, dp));
            }
            return dp[lane][index] = ans;
        }
    }

    // TABULATION APPROACH
    public int helperTab(int[] obstacles){
        int n = obstacles.length;
        int[][] dp = new int[4][obstacles.length];
        // mod because max value m kuch bhi add krenge to negative chlna jayega value, mod is defined globally
        for(int row[] : dp) Arrays.fill(row, mod);
        
        // BASE CASE ANALYSIS
        for(int i = 0; i <= 3; i++) dp[i][n-1] = 0;
        
        // CHECKING FOR EVERY LANE AND EVERY INDEX
        for(int index = n - 2; index >= 0; index--){
            for(int lane = 1; lane <= 3; lane++){
                if(obstacles[index + 1] != lane){
                    dp[lane][index] = dp[lane][index + 1];
                }else{
                    int ans = mod;
                    for(int i = 1; i <= 3; i++){
                        // index + 1 because humara for loop 1 se 3 pe jara h, if 3 ka ans nikla nhi h to uski jgah to 1e9 hoga
                        // and 1 lane m mano obstackle h to usse side jump nhi ho skta, to mtlb hum lane 2 m lane 3 se aaye hai
                        // and if 3rd lane ka ans calculate nhi hua to udhr 1e9 hoga jisse humara ans 1e9 + 1 hojayega
                        // jo pura glt h that's why hum usko next index p depend kra dete h
                        if(lane != i && obstacles[index] != i) ans = Math.min(ans, 1 + dp[i][index + 1]);
                    }
                    dp[lane][index] = ans;
                }
            }
        }
        //BECASUSE IF FIRST LANE SE 2 H, 2ND LANE M 5, AND 3RD LANE M 3 H TO, HUM 1ST AND 3RD LANE SE EK EXTRA SIDE JUMP LEKE
        // BHI TO 2,0 STARTING POSTION TK PAHUCH SKTE H TO UNME 1 ADD KRKE min le liya
        return Math.min(dp[1][0] + 1, Math.min(dp[2][0], dp[3][0] + 1));
    }

    // SPACE OPTIMIZATION APPROACH
    public int helperSO(int[] obstacles){
        int n = obstacles.length;

        int[] curr = new int[4];
        int[] next = new int[4];
        Arrays.fill(curr, mod);
        // BASE CASE ANALYSIS
        Arrays.fill(next, 0);
        
        // CHECKING FOR EVERY LANE AND EVERY INDEX
        for(int index = n - 2; index >= 0; index--){
            for(int lane = 1; lane <= 3; lane++){
                if(obstacles[index + 1] != lane){
                    curr[lane] = next[lane];
                }else{
                    int ans = mod;
                    for(int i = 1; i <= 3; i++){
                        if(lane != i && obstacles[index] != i) ans = Math.min(ans, 1 + next[i]);
                    }
                    curr[lane] = ans;
                }
            }
            next = curr;
        }
        return Math.min(next[1] + 1, Math.min(next[2], next[3] + 1));
    }
}
```