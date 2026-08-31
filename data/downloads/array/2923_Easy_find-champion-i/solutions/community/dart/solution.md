# dart solution

**Author:** arshad_kk
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4720066/](https://leetcode.com/problems/find-champion-i/solutions/4720066/)

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
  int findChampion(List<List<int>> grid) {
      int n=0;
      int m=0;
    for(int i=0 ; i<grid.length;i++){
         int c=0;
        for(int j=0 ; j<grid[i].length;j++){
            if(grid[i][j]!=0){
            c++;
            }
        }
        if(c>n){
        n=c;
        m=i;
    }
    }
    return m;
  }
}
```