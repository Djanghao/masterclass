# Implementation | Brute Force | C++

**Author:** absolute-mess
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674072/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674072/)

---

```
class Solution {
public:
    
    vector<vector<int>> resultGrid(vector<vector<int>>& image, int th) {
        int m = image.size();
        int n = image[0].size();
        vector<vector<int>> result(m, vector<int>(n, 0)), cnt(m, vector<int>(n, 0));
        vector<int> dx={0,1,0,-1}, // movements
                    dy={1,0,-1,0}; 
        for (int i = 0; i < m-2; i++) { //Len of 3 requires 3 empty spaces
            for (int j = 0; j < n-2; j++) {  //Width of 3 requires 3 empty spaces
                int sum = 0;
                int no=0;
                for(int x=i;x<i+3;x++) { //Len of 3 formation (square)
                    for(int y=j;y<j+3;y++) { //Width of 3
                        bool ad=0; //To add only once
                        for(int z=0;z<4;z++) { //For all the adjacent directions
                            int nx=x+dx[z],ny=y+dy[z];
                            if(nx>=i and nx<i+3 and ny>=j and ny<j+3) { //Checking if it is valid and in the square
                                if(abs(image[nx][ny]-image[x][y])<=th) { //Checking if it is less than threshold
                                    if(!ad) //If added once, no need to add again else repetation will result in WA
                                    sum+=image[x][y],ad=1; //Mark as added by ad=1
                                }
                                else {
                                    no=1; //If outside threshold, not possible, break
                                    break;
                                }
                            }
                        }
                    }
                }
                if(no) continue;
                sum/=9; //Square of 3*3 = 9
                for(int x=i;x<i+3;x++) {
                    for(int y=j;y<j+3;y++) {
                        result[x][y]+=sum; //Add the sum
                        cnt[x][y]++;  //Count to get the average in the end
                    }
                }
            }
        }
        for(int i=0;i<m;i++) { //For answer
            for(int j=0;j<n;j++) {
                // cout<<result[i][j]<<" "<<cnt[i][j]<<" "<<i<<" "<<j<<endl;
                if(cnt[i][j]==0)  
                    result[i][j]=image[i][j];
                else
                    result[i][j]/=cnt[i][j]; 
            }
        }
        return result;
    }
};
```