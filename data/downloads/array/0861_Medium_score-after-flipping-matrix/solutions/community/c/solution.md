# flip rows then filp columns with proof||0ms Beats 100%

**Author:** anwendeng
**Votes:** 21
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5150118/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5150118/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Greedy! How?
Each row whose first digit is `0`, flip it.
Each column whose number for 1's is <=`|row|/2`, flip it.
C, C++, python are implemented.

2nd approach interchanges the order row & column in the nested loop which has less memory O(1).(Since the matrix `grid` is so small, the trick of interchanging order in loop is applicable )
# Proof for Greedy
Suppose that `grid` is a r-by-c matrix.
Let $x_0, x_1\\cdots, x_{r-1}$ denote the numbers represented by  binary expressions for row vectors. Suppose some $x_i$ has first bit 0 , then $x_i<2^{c-1}$; the fipping of $x_i<2^{c-1}$, say $$\\bar{x_i}\\geq2^{c-1}$$; So flip the $x_i$.
Let $y_0, y_1, \\cdots y_{c-1}$ denote the column vectors in the matrix `grid`. For any $i$ such that $y_i$ has number of 1s $\\leq \\frac{r}{2}$; each 1 in this column contributes of amount of $2^{c-1-i}$; so the flipping $\\bar{y_i}$ of $y_i$ has 1s with number $\\geq\\frac{r}{2}$ 1's,& contributes a larger amount. **Q.E.D.**
# Approach
<!-- Describe your approach to solving the problem. -->
1. Set up an array `col1` to count 1s in each column.
2. Use a nested loop to deal each row & count 1's in each column; 
    - the row should be flipped $\\iff$ `row[0]==0` 
    - `one = (row[0] == 0) ^ (row[i] == 1)`
    - ` x = (x << 1) + one; col1[i] += one;`
    - `sum+=x` at outer loop
3. second loop a single for-loop deals with flipping columns
    - if `col1[i] <= |row| / 2` flip the column
    - The effect is `sum += (1<<(|col|-1-i)) * (|row|-col1[i]-col1[i])`
4. return `sum`
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(|row|*|col|)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(|col|)$
# Codes||C, C++ 0ms Beats 100%
```C []
#pragma GCC optimize("O3", "unroll-loops")
int matrixScore(int** grid, int r, int* gridColSize) {
    const int c = *gridColSize;
    uint8_t col1[c];
    memset(col1, 0, sizeof(col1));
    int sum = 0;
    for (register int i = 0; i < r; i++) {
        int x = 0;
        bool one = 0;
        for (register int j = 0; j < c; j++) {
            one = (grid[i][0] == 0) ^ (grid[i][j] == 1);
            x = (x << 1) + one;
            col1[j] += one;
        }
        sum += x;
    }
    for (register int i = 0; i < c; i++) {
        if (col1[i] > r / 2)
            continue;
        sum += (1 << (c - 1 - i)) * (r - 2 * col1[i]);
    }
    return sum;
}
```
```C++ []
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    int matrixScore(vector<vector<int>>& grid) {
        const int n = grid.size(), m = grid[0].size();
        vector<uint8_t> col1(m, 0);
        int sum = 0;
        for (auto& row : grid) {
            int x = 0;
            bool one = 0;
            for (int i = 0; i < m; i++) {
                one = (row[0] == 0) ^ (row[i] == 1);
                x = (x << 1) + one;
                col1[i] += one;
            }
            sum += x;
        }
        for (int i = 0; i < m; i++) {
            if (col1[i] <= n / 2) 
                sum += (1 << (m - 1 - i)) * (n - 2 * col1[i]);
        }
        return sum;
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
```Python []
class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
        n, m= len(grid), len(grid[0])
        col1=[0]*m
        sum=0
        for row in grid:
            x=0
            one=False
            for i, b in enumerate(row):
                one=(row[0]==0)^(b==1)
                x=(x<<1)+one
                col1[i]+=one
            sum+=x
        for i in range(m):
            if col1[i]<=n//2:
                sum+=(1<<(m-1-i))*(n-2*col1[i])
        return sum
        
```
# C++ 2nd approach interchanges the order row & column with memory O(1)||0ms Beats 100%

```
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    int matrixScore(vector<vector<int>>& grid) {
        const int r= grid.size(), c= grid[0].size();
        int sum = 0;
        for (int j=0; j<c; j++) {
            int col1= 0;
            int b=1<<(c-1-j);
            for (int i = 0; i < r; i++) {
                bool one = (grid[i][0] == 0) ^ (grid[i][j] == 1);
                col1+=one;
            }
            sum += max(r-col1, col1)*b;
        }
        return sum;
    }
};


```