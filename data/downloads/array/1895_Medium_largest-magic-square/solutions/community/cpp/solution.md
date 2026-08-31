# C++ | Simple Brute force sol | With constant space

**Author:** BlazeYP
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-magic-square/solutions/1750857/](https://leetcode.com/problems/largest-magic-square/solutions/1750857/)

---

Idea is simple to check every square array from biggest possible size *(min(row,col))* to smallest size of 2.
TC: O(n^5) ---> but fits according to constraints
SC: O(1)

```
class Solution {
public:
    
    bool check(vector<vector<int>> &arr, int x, int y, int k){
        //First sum
        int s = 0;
        for(int i=0; i<k; i++){
            s += arr[x][y+i];          
        }
        
        //Checking rows
        for(int i=0; i<k; i++){
            int rs = 0;
            for(int j=0; j<k; j++){
                rs +=arr[x+i][y+j];
            }
            
            if(rs != s)
                return false;
        }
        
        //Checking columns
        for(int i=0; i<k; i++){
            int cs = 0;
            for(int j=0; j<k; j++){
                cs +=arr[x+j][y+i];
            }
            
            if(cs != s)
                return false;
        }
        
        //Checking diagonals
        int ds1 = 0, ds2=0;
        for(int i=0; i<k; i++){
            ds1 +=arr[x+i][y+i];
            ds2 +=arr[x+i][y+k-1-i];
        }
        if(ds1 != s || ds2 != s)
            return false;
        
        //If everything satisfies 
        return true;
    }
    
    int largestMagicSquare(vector<vector<int>>& arr) {
        int r = arr.size(), c = arr[0].size();
        int i,j,k = min(r,c);
        
        for(; k>=2; k--){
            for(int i=0; i<=r-k; i++){
                for(int j=0; j<=c-k; j++){
                    if(check(arr, i, j, k))
                        return k;
                }
            } 
        }
        
        return k;
    }
};
```
If you find it simple to understand then Please upVote the solution... Thanks :)