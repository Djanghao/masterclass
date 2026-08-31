# [C++] [Explained] Calculating prefix sums twice

**Author:** charizard21
**Votes:** 4
**Link:** [https://leetcode.com/problems/stamping-the-grid/solutions/1676050/](https://leetcode.com/problems/stamping-the-grid/solutions/1676050/)

---

First things first, we want to take all the stamps which are not illegal (do not tread over an occupied cell) since we are not supposed to optimize the number of stamps
I have used the concept of prefix sums twice in the problem:
1) Firstly, to calculate all the positions in the grid which can be the leftmost and uppermost points for a particular stamp say at i, j. For this the logic that I use it that there needs to be 0 unoccupied cells in the rectangular region defined by i, j and i + stamp_height - 1, j + stamp_width - 1.
2) To check whether we have 0 unoccupied cells can be done by using the concept of prefix sums
3) Now we know all the indices which are stamps
4) Now we calculate the prefix sum over stamps such that stamps[i][j] now gives the the number of stamps located in the rectangular region defined by 0,0 to i,j
5) Now we require that all the points which are unocciped in the grid must be reachable by atleast one stamp
6) Using the same concept of prefix sums as above we can check that.

In the code the first loop calculate prefix sums of grid, second loop calculates valid stamps, third loop calculated prefix sums of stamps and the fourth one checks if all the points are valid.
Thanks for reading, this is my first post
```
bool possibleToStamp(vector<vector<int>>& grid, int sh, int sw) {
	int m = grid.size();
	int n = grid[0].size();
	vector<vector<int>> stamp(m, vector<int>(n));
	vector<vector<int>> gridc = grid;
	for(int i = 0; i < m; i++){
		for(int j = 0; j < n; j++){
			grid[i][j] += (i>0 ? grid[i-1][j] : 0) + (j > 0 ? grid[i][j-1] : 0) - (i > 0 && j > 0 ? grid[i-1][j-1]: 0);
		}
	}
	for(int i = 0; i + sh <= m; i++){
		for(int j = 0; j + sw <= n; j++){
			if(grid[i+sh-1][j+sw-1] == (j > 0 ? grid[i+sh-1][j-1] : 0) + (i > 0 ? grid[i-1][j+sw-1] : 0) - (i > 0 && j > 0 ? grid[i-1][j-1] : 0)){
				stamp[i][j] = 1;
			}
		}
	}
	for(int i = 0; i < m; i++){
		for(int j = 0; j < n; j++){
			stamp[i][j] += (i>0 ? stamp[i-1][j] : 0) + (j > 0 ? stamp[i][j-1] : 0) - (i > 0 && j > 0 ? stamp[i-1][j-1]: 0);
		}
	}
	for(int i = 0; i < m; i++){
		for(int j = 0; j < n; j++){
			if(gridc[i][j] == 1) continue;
			if(stamp[i][j] == 0 + (j >= sw ? stamp[i][j-sw]  : 0) + (i >= sh ? stamp[i-sh][j] : 0) - (i >= sh && j >= sw ? stamp[i-sh][j-sw] : 0)) return false;
		}
	}
	return true;
}
```