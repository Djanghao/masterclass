# 🔥 DART‎️‍ 🔥100%🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/3501507/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/3501507/)

---

# 
Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool checkXMatrix(List<List<int>> g) {
      int n = g.length ;
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(i==j || i+j==n-1){
                    if(g[i][j]==0 )return false;
                }
                else if(g[i][j]!=0) return false ;
            }
        }
        return true ;
  }
}
```