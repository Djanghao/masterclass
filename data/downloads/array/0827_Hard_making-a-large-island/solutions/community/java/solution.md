# ✅ Making a large island | Detailed Explanation | Java

**Author:** varunsharma-codes
**Votes:** 74
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/1376435/](https://leetcode.com/problems/making-a-large-island/solutions/1376435/)

---

**Intuition**
* The idea is to find all the distinct regions(islands) in the grid. We name these regions with a number starting from `2` (Since `0`,`1` are reserved for the grid). Then we apply the flood fill algorithm with the regions.
* While applying flood fill algorithm we need to also get the area of the region and store it. So we can use a map to get area of any region.
* Once we have marked all the regions what should we do. The problem we have to solve now is merge multiple islands if there is just one `0` separating these.
* So we have to iterate over all the `0`s and check the distinct neighbors. Now all these neighbors will become one island if we flip this `0` to `1`. So we add the area for all the neighbors.
* If this area is greater than the max area, we update the max.

```
class Solution {
    public int largestIsland(int[][] grid) {
        Map<Integer, Integer> regionsArea = new HashMap<>();
        regionsArea.put(0,0);
        
        int n = grid.length;
        int region = 2;
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]==1){
                    int area = floodFill(grid, i, j, region);
                    regionsArea.put(region, area);
                    region++;
                }
            }
        }
        
        int max = regionsArea.getOrDefault(2,0);
        for(int r=0;r<n;r++){
            for(int c=0;c<n;c++){
                if(grid[r][c]==0){
                    Set<Integer> neighbors = new HashSet<>();
                    neighbors.add(r>0?grid[r-1][c]:0);
                    neighbors.add(c>0?grid[r][c-1]:0);
                    neighbors.add(r<n-1?grid[r+1][c]:0);
                    neighbors.add(c<n-1?grid[r][c+1]:0);
                    int area = 1;
                    for(int neighbor: neighbors){
                        area+=regionsArea.get(neighbor);
                    }
                    if(area>max){
                        max = area;
                    }
                }
            }
        }
        
        return max;
    }
    
    public int floodFill(int[][] grid, int r, int c, int region) {
        int n = grid.length;
        if(r<0||r>=n||c<0||c>=n||grid[r][c]!=1){
            return 0;
        }
        
        grid[r][c] = region;
        
        int sum = 1;
        sum+=floodFill(grid, r, c+1, region);
        sum+=floodFill(grid, r+1, c, region);
        sum+=floodFill(grid, r, c-1, region);
        sum+=floodFill(grid, r-1, c, region);
        
        return sum;
    }
}
```

**Please upvote if this solution helps you so that it can reach others. Cheers :)**