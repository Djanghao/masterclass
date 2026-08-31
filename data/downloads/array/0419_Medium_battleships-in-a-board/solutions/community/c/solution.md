# 3 C++ SOLUTIONS || One Pass || DFS || WITH TIME COMPLEXITY

**Author:** brijendrakrydv
**Votes:** 18
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/2035295/](https://leetcode.com/problems/battleships-in-a-board/solutions/2035295/)

---

**1. Brute Force**

Solution similar to Leetcode 200. Number of Islands
```
class Solution {
public:
    int countBattleships(vector<vector<char>>& grid) {
      int n=grid.size();
        int m=grid[0].size();
        int count=0;
        for(int i=0;i<n;i++)
        { for(int j=0;j<m;j++)
            {
			// if the cell is land cell, call dfs function and increment the count by 1
            if(grid[i][j]=='1')
            {  dfs(grid,i,j);
                count++;
            }
        }
            
        }
        return count;
    }
    
    void dfs(vector<vector<char>>& grid,int i,int j)
    {
        int n=grid.size();
        int m=grid[0].size();

    // base case 
     // if i,j goes out of bound or it is not a land cell ,then return
        if(i<0 || j<0 || i>=n || j>=m || grid[i][j]!='1')
            return ;
        
		// marking this cell as visited by assigning 2
        grid[i][j]=2;
		
		// calling dfs for given valid directions
        dfs(grid,i+1,j);
        dfs(grid,i-1,j);
        dfs(grid,i,j+1);
        dfs(grid,i,j-1);
        
    }
};
```


**2. Optimised**
```
class Solution {
public:
    int countBattleships(vector<vector<char>>& grid) {
      int n=grid.size();
        int m=grid[0].size();
        int count=0;
        for(int i=0;i<n;i++)
        { for(int j=0;j<m;j++)
            {
			// if the cell is 'X', call dfs function and increment the count by 1
            if(grid[i][j]=='X')
            {  dfs(grid,i,j);
                count++;
            }
        }
            
        }
        return count;
    }
    
    void dfs(vector<vector<char>>& grid,int i,int j)
    {
        int n=grid.size();
        int m=grid[0].size();

    // base case 
     // if i,j goes out of bound or it is not 'X' ,then return
        if(i<0 || j<0 || i>=n || j>=m || grid[i][j]!='X')
            return ;
        
		// marking this cell as visited by assigning 'Y'
        grid[i][j]='Y';
		
		// calling dfs for only for down and right as left and upward cells are already visited and taken into consideration
        // given in question that there are no adjacent battleships
        dfs(grid,i+1,j);
        dfs(grid,i,j+1);
        
    }
};
```

**3. Optimal in one pass**
```
class Solution {
public:
    int countBattleships(vector<vector<char>>& grid) {
        int n=grid.size();
        int m=grid[0].size();
        
        int count=0;
        
        for(int i=0;i<n;i++)
        { for(int j=0;j<m;j++)
            {
               if((grid[i][j]=='X') 
                  && (i==0 || (i-1>=0 && grid[i-1][j]!='X'))  // 'X' is not in the upward cell 
                  && (j==0 || (j-1>=0 && grid[i][j-1]!='X')))  // 'X' is not in the left cell 
                   
                   // that means 'X' is starting from here so increase the count
                   count++;
              
            }
            
        }
        return count;
    }
};
```

***Time Complexity: O(mn) for all the solutions***

#### DO UPVOTE IF U FIND IT HELPFUL :)