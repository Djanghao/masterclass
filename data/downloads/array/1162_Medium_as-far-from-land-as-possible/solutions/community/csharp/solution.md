# ✅C# || ✅JAVA || ✔ Concise BFS solution ||⏳Beats 100% Runtime

**Author:** Santhosh1608
**Votes:** 3
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3166378/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3166378/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Dynammic Programming and BFS 
BFS means breadth First search: Each row value get calculated and And next Row and So On...
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaxDistance(int[][] arr) {
        int length=arr.Length;
        int[,] dp = new int[length, length];
        for(int i=0; i< length; i++){
            for(int j=0; j< length; j++){
                dp[i,j] = (arr[i][j] == 1)? 0 : int.MaxValue;
            }
        }

            // Top - left to Bottom ,rigth Moving 
        for(int i=0; i< length; i++){// moving matrix row -->down
            for(int j=0; j< length; j++){//moving matrix  column -->right
                if (arr[i][j] == 0) {//Land means what re the ways to go water and distance addition to reach next immediate for each of cell
                    if (j > 0 && dp[i,j-1] != int.MaxValue){
                        dp[i,j] = Math.Min(dp[i,j], 1 + dp[i,j-1]);
                    }
                    if (i > 0 && dp[i-1,j] != int.MaxValue) { 
                        dp[i,j] = Math.Min(dp[i,j], 1 + dp[i-1,j]); 
                    }
                }
            }
        }
        
        int result = 0;
        
        //bottom, right to top, left
        
        for(int i=length-1; i >=0 ; i--){
            for(int j=length-1; j >= 0; j--){
                if (arr[i][j] == 0){
                    if (j < length-1 && dp[i,j+1] != int.MaxValue) { 
                        dp[i,j] = Math.Min(dp[i,j], 1 + dp[i,j+1]);
                    }

                    if (i < length-1 && dp[i+1,j] != int.MaxValue) { 
                        dp[i,j] = Math.Min(dp[i,j], 1 + dp[i+1,j]); 
                    }

                    if (dp[i,j] != int.MaxValue && result < dp[i,j]) { 
                        result = dp[i,j]; 
                    }
                }
            }
        }
        
        if(result == 0){
            return -1;
        }
        return result;
    }
}

```