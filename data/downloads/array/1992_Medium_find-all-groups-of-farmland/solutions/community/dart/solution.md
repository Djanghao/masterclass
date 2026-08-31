# BEATS 100% Creative DART solution

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5050944/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5050944/)

---

# Code
```
class Solution {
  List<List<int>> findFarmland(List<List<int>> land) {
    List<List<int>> ans=[];
    for(int i=0;i<land.length;i++){
        for(int j=0;j<land[0].length;j++){
            if(land[i][j]==1){
                var temp = [i,j];
                var r=i,c=j;
                while(r<land.length-1 && land[r+1][c]==1)r++;
                while(c<land[0].length-1 && land[r][c+1]==1)c++;
                for(int row=i;row<=r;row++){
                    for(int col=j;col<=c;col++){
                        land[row][col]=0;
                    }
                }
                temp.add(r);
                temp.add(c);
                ans.add(temp);
            }
        }
    }
    return ans;
  }
}
```