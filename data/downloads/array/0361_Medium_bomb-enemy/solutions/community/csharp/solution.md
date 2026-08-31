# Easy

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/5579439/](https://leetcode.com/problems/bomb-enemy/solutions/5579439/)

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
    public int MaxKilledEnemies(char[][] g) {
        int ans=0;
        for (int i=0; i< g.Length; i++){
            for (int j=0; j<g[0].Length; j++){
                if(g[i][j]=='0'){
                    int k=1;
                    int c=0;

                    while(i-k>=0&& (g[i-k][j]=='E'||g[i-k][j]=='0')){
                      
                        if(g[i-k][j]=='E')c++;    k++;
                    }
                   
                    k=1;
                    while(j-k>=0&& (g[i][j-k]=='E'||g[i][j-k]=='0')){
                        if(g[i][j-k]=='E')c++;
                        k++;}
                      
                       k=1;
                      while(i+k<g.Length && (g[i+k][j]=='E'||g[i+k][j]=='0')){
                        if(g[i+k][j]=='E')c++;
                        k++;}
                       
                        k=1;

                       while(j+k<g[0].Length &&( g[i][j+k]=='E'||g[i][j+k]=='0')){
                        if(g[i][j+k]=='E')c++;
                        k++;}
                        
                       ans=Math.Max(c, ans);
                }
            }
        }
       return ans; 
    }
}
```