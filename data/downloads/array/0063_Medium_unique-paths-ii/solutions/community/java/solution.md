# Java Simple and clean DP solution,  easy to understand.

**Author:** jinwu
**Votes:** 142
**Link:** [https://leetcode.com/problems/unique-paths-ii/solutions/23395/](https://leetcode.com/problems/unique-paths-ii/solutions/23395/)

---

   
	public int uniquePathsWithObstacles(int[][] obstacleGrid) {
		int m = obstacleGrid.length, n = obstacleGrid[0].length;
		int[][] path = new int[m][n];
	
		for (int i = 0; i < m; i++) {
			if (obstacleGrid[i][0] == 1)  {
				path[i][0] = 0;
				//on the first column, if there is an obstacle, the rest are blocked. 
				//no need to continue.
				break;  
			} else
				path[i][0] = 1;
		}
		
		for (int j = 0; j < n; j++) {
			if (obstacleGrid[0][j] == 1)  {
				path[0][j] = 0;
				//First row, once obstacle found, the rest are blocked.
				break; 
			} else
				path[0][j] = 1;
		}
		
		for (int i = 1; i < m; i++) {
			for (int j = 1; j < n; j++) {
				if (obstacleGrid[i][j] == 1) 
					path[i][j] = 0;
				else
					path[i][j] = path[i-1][j] + path[i][j-1];
			}
		}
		return path[m-1][n-1];
	}