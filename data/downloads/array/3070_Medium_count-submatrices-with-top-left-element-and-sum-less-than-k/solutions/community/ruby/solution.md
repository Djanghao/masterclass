# Ruby 90% 327ms & C 100 %

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4839581/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4839581/)

---

First count sum for each row starting from left:
row = [a,b,c,...]
a,a+b,a+b+c...
put on grid2
then count sum for each column of grid2 and count each one <=k
in var cnt


```C []
int countSubmatrices(int** grid, int gridSize, int* gridColSize, int k) {
    int m = gridSize;
    int n = *gridColSize;
    int grid2[m][n];
    for(int j=0;j<m;j++){
        int s=0;
        for(int i=0;i<n;i++){
            s+=grid[j][i];
            grid2[j][i]=s;
    }}
    int cnt = 0;
    for(int i=0;i<n;i++){
        int s=0;
        for(int j=0;j<m;j++){
            s+=grid2[j][i];
            if(s<=k){ cnt++; }else{ break; }
    }}
    return cnt;
}
```
```ruby []
def count_submatrices(grid, k)
    m = grid.size
    n = grid[0].size
    grid2 = (0...m).map{ [0]*n }
    m.times{ |j|
        s=0
        n.times{ |i|
            s+=grid[j][i]
            grid2[j][i]=s
    }}
    cnt = 0
    n.times{ |i|
        s=0
        m.times{ |j|
            s+=grid2[j][i]
            s<=k ? cnt+=1 : break
    }}
    cnt
end
```