# JAVA | Easy_to_Understand

**Author:** IAmCoderrr
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/1844551/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/1844551/)

---

```
class Solution {
    public int digArtifacts(int n, int[][] artifacts, int[][] dig) {
        
        boolean visit[][]=new boolean[n][n];
        for(int arr[]:dig){
            visit[arr[0]][arr[1]]=true;
        }
        
        int ans=0;
        for(int arr[]:artifacts){
            
            boolean flag=true;
            for(int i=arr[0];i<=arr[2];i++){
                for(int j=arr[1];j<=arr[3];j++){
                    if(!visit[i][j]) flag=false;
                }
            }
            if(flag) ans++;
        }
        return ans;
    }
}
```