# SLIDING WINDOW || TIME 95% AND SPACE 80% BEATS || C++

**Author:** yash___sharma_
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/3228510/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/3228510/)

---

```
class Solution {
public:
    int maximumWhiteTiles(vector<vector<int>>& tiles, int l) {
        int i = 0, j = 0, ans = 0,cover = 0,n=tiles.size(),p;
        sort(tiles.begin(),tiles.end());
        for(i = 0; i < n&&ans<l; ){
            if(tiles[j][0]+l>tiles[i][1]){
                cover += tiles[i][1]-tiles[i][0]+1;
                ans = max(ans,cover);
                i++;
            }else{
                p = max(tiles[j][0]+l-tiles[i][0],0);
                ans = max(ans,cover+p);
                cover -= (tiles[j][1]-tiles[j][0]+1);
                j++;
            }
        }
        return ans;
    }
};
```