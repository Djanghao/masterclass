# ✅💯🔥Simple Code📌🚀| 🔥✔️Easy to understand🎯 | 🎓🧠Beginner friendly🔥| O(n*m) Time Complexity💀💯

**Author:** atishayj4in
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5628435/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5628435/)

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
    public int minFlips(int[][] grid) {
        int ans=0; int n=grid.length; int m= grid[0].length;
        for(int i=0; i<n; i++){
            int subans=0;
            for(int j=0; j<m/2; j++){
                if(grid[i][j]!=grid[i][m-j-1]){
                    subans++;
                }
            }
            ans+=subans;
        }
        int ans2=0;
        for(int j=0; j<m; j++){
            int subans=0;
            for(int i=0; i<n/2; i++){
                if(grid[i][j]!=grid[n-i-1][j]){
                    subans++;
                }
            }
            ans2+=subans;
        }
        return Math.min(ans, ans2);
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)