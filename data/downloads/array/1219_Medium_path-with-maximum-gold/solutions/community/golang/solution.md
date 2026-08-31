# Backtrack + DFS with explanation | [c++/java/python/go]

**Author:** anupsingh556
**Votes:** 5
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5155296/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5155296/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- This is a standard backtrack problem with dfs in grid. For any cell as starting point we can pick gold from it marking it as 0 then traverse in all 4 directions to find maximum solution then backtrack to make it same as original value

# Approach
<!-- Describe your approach to solving the problem. -->
- Traverse over all cell as starting point and start dfs from that
- go in all 4 directions from a node and check if the index is valid and value is not zero
- If we can jump to next node mark previous node as 0 and repeat same process form new node
- In the end set value of original node to original one as we dont want to reform our grid after a traversal

# Complexity
- Time complexity: If k is number of gold cells then we will go in 4 direcetion from each cell hence it is O(4^k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k) for recursive calls
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c++ []
class Solution {
public:
    vector<vector<int>> next = {{0,1},{0,-1},{1,0},{-1,0}};
    int getMaximumGold(vector<vector<int>>& g) {
        int res =0,n=g.size(),m=g[0].size();
        for(int i=0;i<n;i++) {
            for(int j=0;j<m;j++) {
                res = max(res, backTrack(g,i,j,n,m));
            }
        }
        return res;
    }

    int backTrack(vector<vector<int>>& g, int r, int c, int n, int m) {
        if(!isValid(r, c, n, m) || g[r][c]==0) return 0;
        int currVal = g[r][c];
        g[r][c]=0;
        int res = currVal;
        int nextRes = 0;
        for(int i=0;i<4;i++) {
            int nextR = r + next[i][0];
            int nextC = c + next[i][1];
            nextRes = max(backTrack(g,nextR, nextC,n,m), nextRes);
        }
        g[r][c]=currVal;
        return res + nextRes;
    }

    bool isValid(int r, int c, int n, int m) {
        bool res = (r>=0 && c>=0 && r<n && c<m);
        return res;
    }
};
```
```python []
class Solution:
    def __init__(self):
        self.next = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    def getMaximumGold(self, g):
        res = 0
        n = len(g)
        m = len(g[0])
        for i in range(n):
            for j in range(m):
                res = max(res, self.backTrack(g, i, j, n, m))
        return res

    def backTrack(self, g, r, c, n, m):
        if not self.isValid(r, c, n, m) or g[r][c] == 0:
            return 0
        currVal = g[r][c]
        g[r][c] = 0
        res = currVal
        nextRes = 0
        for i in range(4):
            nextR = r + self.next[i][0]
            nextC = c + self.next[i][1]
            nextRes = max(self.backTrack(g, nextR, nextC, n, m), nextRes)
        g[r][c] = currVal
        return res + nextRes

    def isValid(self, r, c, n, m):
        return 0 <= r < n and 0 <= c < m

```
```java []
class Solution {
    int[][] next = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

    public int getMaximumGold(int[][] g) {
        int res = 0;
        int n = g.length;
        int m = g[0].length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                res = Math.max(res, backTrack(g, i, j, n, m));
            }
        }
        return res;
    }

    public int backTrack(int[][] g, int r, int c, int n, int m) {
        if (!isValid(r, c, n, m) || g[r][c] == 0) return 0;
        int currVal = g[r][c];
        g[r][c] = 0;
        int res = currVal;
        int nextRes = 0;
        for (int i = 0; i < 4; i++) {
            int nextR = r + next[i][0];
            int nextC = c + next[i][1];
            nextRes = Math.max(backTrack(g, nextR, nextC, n, m), nextRes);
        }
        g[r][c] = currVal;
        return res + nextRes;
    }

    public boolean isValid(int r, int c, int n, int m) {
        return (r >= 0 && c >= 0 && r < n && c < m);
    }
}
```
```go []
func getMaximumGold(g [][]int) int {
	maxGold := 0
	for i := range g {
		for j := range g[i] {
			if g[i][j] != 0 {
				gold := backtrack(g, i, j)
				if gold > maxGold {
					maxGold = gold
				}
			}
		}
	}
	return maxGold
}

func backtrack(g [][]int, r, c int) int {
	if r < 0 || r >= len(g) || c < 0 || c >= len(g[0]) || g[r][c] == 0 {
		return 0
	}

	currGold := g[r][c]
	g[r][c] = 0

	maxGold := 0
	for _, dir := range [][]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}} {
		newR, newC := r+dir[0], c+dir[1]
		maxGold = max(maxGold, currGold+backtrack(g, newR, newC))
	}

	g[r][c] = currGold
	return maxGold
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```
