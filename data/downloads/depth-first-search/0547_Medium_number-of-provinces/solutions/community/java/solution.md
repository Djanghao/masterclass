# Java Solution | 100% faster | Connected Components

**Author:** jyotiprakashrout434
**Votes:** 22
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/729258/](https://leetcode.com/problems/number-of-provinces/solutions/729258/)

---

A must watch video if you're not already familier with connected compoents in graph theory: 
https://www.youtube.com/watch?v=z49Ohr5Ypnw
```
class Solution {
    public int findCircleNum(int[][] M) {
        int N = M.length;
        boolean[]visited = new boolean[N];
        int count = 0;
        
        for(int i = 0; i < N ;i++){
            if(!visited[i]){
                count++;
                dfs(M,i,visited);
            }
        }
      return count;  
    }
    
    
    private void dfs(int[][]M,int i,boolean[]visited){
        for(int j = 0 ; j < M[i].length ; j++){
            if(!visited[j] && M[i][j] != 0){
                visited[j] = true;
                dfs(M,j,visited);
            }
        }
    }
    
}
```