# Easy solution with simple idea  🔥🔥🔥

**Author:** AbdalrhmanALMohammad
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-rectangle/solutions/5016300/](https://leetcode.com/problems/maximal-rectangle/solutions/5016300/)

---

# Complexity
- Time complexity:
O( N * M * ( N + M ) )

# Code
```
class Solution {
  int maximalRectangle(List<List<String>> matrix) {
    int n=matrix.length;
    int m=matrix[0].length;
    int ans=0;
    List<List<int>> sum=List.generate(n+1,(_)=>List.generate(m+1,(_)=>0));
    for(int i=1;i<=n;i++){
      for(int j=1;j<=m;j++){
          sum[i][j]=matrix[i-1][j-1].codeUnitAt(0)-'0'.codeUnitAt(0);
          sum[i][j]+=sum[i-1][j]+sum[i][j-1]-sum[i-1][j-1];
      }
    }
    for(int i=1;i<=n;i++){
      for(int j=1;j<=m;j++){
        int y=i,x=0;
        while(x<=j){
          while(y>0&&sum[i][j]-sum[y][j]-sum[i][x]+sum[y][x]==(i-y)*(j-x)){
            y--;
          }
          if(sum[i][j]-sum[y][j]-sum[i][x]+sum[y][x]!=(i-y)*(j-x))
            y++;
          if(sum[i][j]-sum[y][j]-sum[i][x]+sum[y][x]==(i-y)*(j-x))
            if((i-y)*(j-x)>ans)
              ans=(i-y)*(j-x);
          x++;
        }
      }
    }
    return ans;
  }
}
```