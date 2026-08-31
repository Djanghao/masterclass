# C++ solutions

**Author:** Infox_92
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/2836045/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/2836045/)

---

```
	class Solution {
public:

pair<long long,long long> util(int val){
    
    int x=0;
    while(val>0 && val%5==0){
        val=val/5;
        x++;
    }
    int y=0;
    while(val>0 && val%2==0){
        val=val/2;
        y++;
    }
    return {x,y};
    
}

long long util(vector<vector<int>>& grid){
    
    int n=grid.size();
    int m=grid[0].size();
    pair<long long,long long> matrix[n][m];
    pair<long long,long long> matrix1[n][m];
    pair<long long,long long> matrix2[n][m];
    
    //making the first grid;
    for(int i=0;i<n;i++)
        for(int j=0;j<m;j++){
            int val=grid[i][j];
            matrix[i][j]=util(val);
        }
    
    //right to left
    for(int i=0;i<n;i++){
        for(int j=m-1;j>=0;j--){
            if(j==m-1)
                matrix1[i][j]=matrix[i][j];
            else
                matrix1[i][j]={matrix[i][j].first+matrix1[i][j+1].first,matrix[i][j].second+matrix1[i][j+1].second};

        }
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(j==0)
                matrix2[i][j]=matrix[i][j];
            else
                matrix2[i][j]={matrix[i][j].first+matrix2[i][j-1].first,matrix[i][j].second+matrix2[i][j-1].second};
        }
    }
    long long res=0;
    
    //calculating by traversing from up to down
    
    for(int j=0;j<m;j++){
        pair<long long,long long>sum={0,0};
        for(int i=0;i<n;i++){
            sum={sum.first+matrix[i][j].first,sum.second+matrix[i][j].second};
            res=max(res,min(sum.first,sum.second));
            if(j>0){
            pair<long long,long long>p1=matrix2[i][j-1];
            res=max(res,min(sum.first+p1.first,sum.second+p1.second));
            }
            if(j<m-1){
                pair<long long,long long>p1=matrix1[i][j+1];
            res=max(res,min(sum.first+p1.first,sum.second+p1.second));
            }
               
        }            
        
    }
    return res;
    
}

int maxTrailingZeros(vector<vector<int>>& grid) {
    
int m=grid[0].size();
    int n=grid.size();
    vector<vector<int>>grid2(m,vector<int>(n,0));
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            grid2[j][i]=grid[i][j];
        }
    }
    long long res=0;
      res=max(util(grid),util(grid2));
    vector<vector<int>>grid3(n,vector<int>(m,0));
    for(int i=0;i<grid.size();i++){
        for(int j=0;j<grid[0].size();j++){
            grid3[n-i-1][j]=grid[i][j];       
        }
    }
    return max(res,util(grid3));
    
    
}
};
```