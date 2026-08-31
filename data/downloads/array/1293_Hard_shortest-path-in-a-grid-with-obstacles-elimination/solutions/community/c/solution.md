# C++ | EXPLAINED | BFS | Simplest Solution

**Author:** hg3994
**Votes:** 66
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/1364224/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/1364224/)

---

Hi,
I've taken the solution from https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/discuss/712992/C%2B%2B-or-BFS by @jainkartik203 and I think this is the simplest of all the solutions available till now.
Others seem to be talking about some new concepts which maybe I am not familiar with.

```

/*

Harshit Gupta | 26th July, 2021
---------------------------------

Problem Statement:

Given a m * n grid, where each cell is either 0 (empty) or 1 (obstacle). In one step, you can move up, down, left or right 
from and to an empty cell.
Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m-1, n-1) given that 
you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

Example 1:
	Input: 
		grid = 
		[[0,0,0],
		 [1,1,0],
		 [0,0,0],
		 [0,1,1],
		 [0,0,0]], 
		k = 1
	Output: 6
	Explanation: 
		The shortest path without eliminating any obstacle is 10. 
		The shortest path with one obstacle elimination at position (3,2) is 6. 
		Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
	 

Example 2:
	Input: 
		grid = 
		[[0,1,1],
		 [1,1,1],
		 [1,0,0]], 
		k = 1
	Output: -1
	Explanation: 
		We need to eliminate at least two obstacles to find such a walk.

https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
------

Solution: 
	1. Since it talks about the shortest paths, we immediately think about BFS here.
	2. We use the visited array in a different way to keep storing the number of obstacles 
		that we can still remove after walking through that cell. (Basically BEST remaining K after reaching that cell)
	3. Simply traverse the BFS by storing the X, Y, currentLength and currentK remaining in the queue.
	4. If you reach the destination index, return the currentLength
	5. If you try to access an invalid cell, 
		or you hit an obstacle but have no K to spend, 
		or this index X and Y have already been accessed and with a better remaining K than yours, WE SKIP/continue.
	6. Push the adjacent indexes into the queue.

    TC: O(mn)
    SC: O(mn)

Paradigm: BFS
---
    NOTE: 

*/


class Solution {
public:
    int shortestPath(vector<vector<int>>& grid, int k) {
        int m = grid.size();
        int n = grid[0].size();
        // This vector stores the number of obstacles that we can still remove after walking through that cell
        vector<vector<int>> visited(m, vector<int>(n, -1));
        
        queue<vector<int>> q;
        // x, y, currentLength, remaining k
        q.push({0,0,0,k});
        while(!q.empty()){
            
            auto t = q.front();
            q.pop();
            
            int x = t[0], y = t[1];
            
            // Invalid cases being dealt here since it's easier to write one condition instead of 4 while pushing.
            if(x<0 || x>=m || y<0 || y>=n)
                continue;
            
            // If you've reached the end, great, return the currentLength!
            if(x == m-1 && y == n-1)
                return t[2]; //currentLength of the path
             
            // If we hit an obstacle & we don't have any Ks remaining, continue
            // If we still have Ks to spend, we spend 1.
            if(grid[x][y] == 1){
                if(t[3] > 0)
                    t[3]--;
                else
                    continue;
            }
            
            // If this cell is already visited with a K value lesser than this one, we would want to save Ks for future use, so we continue
            // This is the most important condition and part of the solution!
            if(visited[x][y]!=-1 && visited[x][y] >= t[3]){
                continue;
            }
            
            // We store the currentRemaining K after spending K (if required) into the visited matrix.
            visited[x][y] = t[3];
                
            // Push the adjacent nodes in the queue.
            q.push({x+1, y, t[2]+1, t[3]});
            q.push({x-1, y, t[2]+1, t[3]});
            q.push({x, y+1, t[2]+1, t[3]});
            q.push({x, y-1, t[2]+1, t[3]});
        }
        
        return -1;
    }
};
```