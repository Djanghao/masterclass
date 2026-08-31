# Bruteforce - check all cases

**Author:** kreakEmp
**Votes:** 32
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4813809/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4813809/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
- Write a function to check the operations for a particular value y and a value of not y cell.
- Then check the operation count for all the 6 combinations (0,1), (1,0), (1,2), (2,1), (0,2), (2,0) using above function and take the min as the answer
- To check if the cell is belong to Y or not here are the 3 cases we need to check for :
    - To check for left side diagonal of Y, check if both row & col are equal or not and the row is belong to upper half of the grid => (i <= n/2 && i == j )
    - To check for the right side diagonal of Y, check if the sum of row + col is equal to grid.size()-1 and it must be on upper half of the rows => (i <= n/2 && i + j == n - 1)
    - To check the vertical line of the Y we need to check if the row is in lower half and col is equal to half of the total col size => (i > n/2 && j == n/2)

# Complexity
- Time complexity: O(N.N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++
```
int getOperationCount(vector<vector<int>>& grid, int y, int notY){
    int ans = 0;
    for(int i = 0; i < grid.size(); ++i){
        for(int j = 0; j < grid[0].size(); ++j){
            if((i <= grid.size()/2 && (i == j || i + j == grid.size() - 1)) || (i > grid.size()/2 && j == grid.size()/2)){
                if(y != grid[i][j]) ans++;
            }else{
                if(notY != grid[i][j]) ans++;
            }
        }
    }
    return ans;
}

int minimumOperationsToWriteY(vector<vector<int>>& grid) {
    return min({getOperationCount(grid, 0,1), getOperationCount(grid, 1,0), getOperationCount(grid, 1,2), getOperationCount(grid, 2,1), getOperationCount(grid, 2,0), getOperationCount(grid, 0,2)});
}
```

# Java
```
int getOperationCount(int[][] grid, int y, int notY){
    int ans = 0, n = grid.length;
    for(int i = 0; i < n; ++i){
        for(int j = 0; j < n; ++j){
            if((i <= n/2 && (i == j || i + j == n - 1)) || (i > n/2 && j == n/2)){
                if(y != grid[i][j]) ans++;
            }else{
                if(notY != grid[i][j]) ans++;
            }
        }
    }
    return ans;
}
    
public int minimumOperationsToWriteY(int[][] grid) {
    int ans = Integer.MAX_VALUE;
    for(int i = 0; i < 3; ++i){
        for(int j = 0; j < 3; ++j){
            if(i != j) ans = Math.min(ans, getOperationCount(grid, i,j));
        }
    }
    return ans;
}
```

---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---