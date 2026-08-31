# Simmmmmmple solution 🔥🔥🔥

**Author:** AbdalrhmanALMohammad
**Votes:** 0
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/5041757/](https://leetcode.com/problems/island-perimeter/solutions/5041757/)

---

# UPVOTE

# Complexity
- Time complexity:
O(N*M)

# Code
```
class Solution {
  int islandPerimeter(List<List<int>> grid) {
    int ans=0;
    for(int i=0;i<grid.length;i++){
      for(int j=0;j<grid[0].length;j++){
        if(grid[i][j]==0)
          continue;
        if(i-1<0||grid[i-1][j]==0)
          ans++;
        if(j-1<0||grid[i][j-1]==0)
          ans++;
        if(i+1>=grid.length||grid[i+1][j]==0)
          ans++;
        if(j+1>=grid[0].length||grid[i][j+1]==0)
          ans++;
        
      }
    }
    return ans;
  }
}
```