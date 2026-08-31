# [C++/Go] DFS + Memoization

**Author:** ankit729
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2020337/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2020337/)

---

Total numner of cells in any path are `R+C-1`
A path is invalid if
* it's length is odd
* open brackets `count < 0`
* open brackets `count > R-1-r + C-1-c` remaining cells count

C++
```
class Solution {
    int8_t R, C;
    bool memo[100][100][100] = {};
public:
    bool hasValidPath(vector<vector<char>>& grid) {
        R = grid.size();
        C = grid[0].size();
        if(grid[0][0]==')' || grid[R-1][C-1]=='(' || ((R+C-1)&1))
            return false;
        return helper(0, 0, 0, grid);
    }
private:
    bool helper(int r, int c, int curr, vector<vector<char>>& grid) {
        curr += grid[r][c]=='(' ? 1 : -1;
        if(curr < 0 || curr > R-1-r+C-1-c || memo[r][c][curr])
            return false;
        if(r==R-1 && c==C-1)
            return curr==0;
        memo[r][c][curr] = true;
        return (r+1<R && helper(r+1, c, curr, grid)) || (c+1<C && helper(r, c+1, curr, grid));
    }
};
```

Go
```
var memo [100][100][100]bool
var R, C int

func helper(r, c, curr int, grid [][]byte) bool {
	if grid[r][c] == '(' {
		curr++
	} else {
		curr--
	}
	if curr < 0 || curr > R-1-r+C-1-c || memo[r][c][curr] {
		return false
	}
	if r == R-1 && c == C-1 {
		return curr == 0
	}
	memo[r][c][curr] = true
	return (r+1 < R && helper(r+1, c, curr, grid)) || (c+1 < C && helper(r, c+1, curr, grid))
}

func hasValidPath(grid [][]byte) bool {
	R, C = len(grid), len(grid[0])
	if grid[0][0] == ')' || grid[R-1][C-1] == '(' || ((R+C-1)&1) == 1 {
		return false
	}
	for r := 0; r < R; r++ {
		for c := 0; c < C; c++ {
			for val := 0; val <= R-1-r+C-1-c && val <= (R+C-1)>>1; val++ {
				memo[r][c][val] = false
			}
		}
	}
	return helper(0, 0, 0, grid)
}
```