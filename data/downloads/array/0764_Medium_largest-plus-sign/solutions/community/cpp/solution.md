# C++ || SIMPLE || TIME O(n^2)

**Author:** abhay_12345
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/2638309/](https://leetcode.com/problems/largest-plus-sign/solutions/2638309/)

---

```
class Solution {
public:
    int orderOfLargestPlusSign(int n, vector<vector<int>>& mines) {
        vector<vector<int>> grid(n,vector<int>(n,1));
        for(auto &i: mines){
            grid[i[0]][i[1]] = 0;
        }
        vector<vector<int>> left,right,top,bottom;
        left = vector<vector<int>>(n,vector<int>(n,0));
        right = vector<vector<int>>(n,vector<int>(n,0));
        top = vector<vector<int>>(n,vector<int>(n,0));
        bottom = vector<vector<int>>(n,vector<int>(n,0));
        int i,j;
        // for(auto &i: grid){
        //     for(auto &j: i)cout<<j<<" ";
        //     cout<<endl;
        // }
        for(i = 0; i < n; i++){
            for(j = 0; j < n; j++){
                if(j==0){
                    left[i][j] = (grid[i][j]);
                }else if(grid[i][j]){
                    left[i][j] = left[i][j-1]+1;
                }
               // cout<<left[i][j]<<" ";
            }
            // cout<<endl;
        }
        //cout<<endl;
        for(i = 0; i < n; i++){
            for(j = n-1; j >= 0; j--){
                if(j==n-1){
                    right[i][j] = (grid[i][j]);
                }else if(grid[i][j]){
                    right[i][j] =1+ right[i][j+1];
                }
                
               // cout<<right[i][j]<<" ";
            }
            // cout<<endl;
        }//cout<<endl;
        for(i = 0; i < n; i++){
            for(j = 0; j < n; j++){
                if(i==0){
                    top[i][j] = (grid[i][j]);
                }else if(grid[i][j]){
                    top[i][j] +=1+ top[i-1][j];
                }
               // cout<<top[i][j]<<" ";
            }
            // cout<<endl;
        }//cout<<endl;
        for(i = n-1; i >= 0; i--){
            for(j = 0; j < n; j++){
                if(i==n-1){
                    bottom[i][j] = (grid[i][j]);
                }else if(grid[i][j]){
                    bottom[i][j] +=1+ bottom[i+1][j];
                }
                // cout<<bottom[i][j]<<" ";
            }
            // cout<<endl;
        }
        int ans = 0;
        for(i = 0; i < n; i++){
            for(j = 0; j < n; j++){
                ans = max(ans,min(min(left[i][j],right[i][j]),min(top[i][j],bottom[i][j])));
            }
        }
        return ans;
    }
};
```