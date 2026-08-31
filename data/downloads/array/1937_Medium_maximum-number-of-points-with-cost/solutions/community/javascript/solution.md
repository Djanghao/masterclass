# Recursion + Memoization + Tabulation solution ------>

**Author:** its_shiv43
**Votes:** 35
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648893/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648893/)

---


# Recursive Function (find_sum):

1. The function calculates the maximum points obtainable from a given cell (row, col) to the last row.
2. For each possible move to the next row, it calculates the points obtained minus a penalty (abs(i-col)) and recursively finds the best path onward.
3. Main Function (maxPoints):

4. Iterates through all possible starting columns in the first row.
For each starting column, it calculates the maximum points using find_sum.
5. Tracks the highest points among all possible starting columns and returns it as the final result.
Key Points:
6. Recursion is used to explore all paths from the first row to the last row.
7. Penalties are applied based on column shifts between consecutive rows.
8. Maximum points are computed by exploring all paths and keeping the best result.

# Tabulation

# Initialization:

1. Create a 2D dp array where dp[i][j] represents the maximum points attainable up to row i if you end at column j.
2. Initialize the first row of dp with the values of the first row of points.
3. DP Transition:

4. For each row, compute the maximum points for each column using two auxiliary arrays:
5. Left Array (left[j]): Tracks the maximum points considering transitions from left to right.
6. Right Array (right[j]): Tracks the maximum points considering transitions from right to left.
7. For each cell, the maximum points are computed as the sum of the current cell's value and the best transition from the previous row (either from left[j] or right[j]).
Result Calculation:

8. The final result is the maximum value in the last row of dp.
Key Points:
9. Dynamic Programming is used to efficiently compute the maximum points by storing intermediate results.
10. Auxiliary Arrays (left and right) are used to handle penalties and ensure that transitions between columns are considered optimally.
11. Final Answer is the maximum value in the last row of the dp array, representing the best possible outcome for the entire grid.






# Complexity
- Time complexity:
O(n*m)

- Space complexity:
O(n*m) 

# Code
```C++ []
# Recursion solution gives tle at 47 test case 

class Solution {
public:
    typedef long long ll;
    ll find_sum(vector<vector<int>>&points,int row,int col){

        //base case
        if(row>=points.size()){
            return 0;
        }

        ll ans=0;

        for(int i=0;i<points[0].size();i++){
           ll sum=points[row][i]-abs(i-col)+find_sum(points,row+1,i);
           ans=max(ans,sum);
        }

        return ans;

    }
    long long maxPoints(vector<vector<int>>& points) {
        
        int n=points.size();
        int m=points[0].size();

        ll ans=INT_MIN;

        for(int i=0;i<m;i++){
           ll sum=points[0][i]+find_sum(points,1,i);
            ans=max(ans,sum);
        }

        return ans;
    }
};

# Memoization gives tle at 143 test case

class Solution {
public:
    typedef long long ll;
    ll find_sum(vector<vector<int>>&points,int row,int col,vector<vector<int>>&dp){

        //base case
        if(row>=points.size()){
            return 0;
        }
        
        if(dp[row][col]!=-1){
            return dp[row][col];
        }
        ll ans=0;

        for(int i=0;i<points[0].size();i++){
           ll sum=points[row][i]-abs(i-col)+find_sum(points,row+1,i,dp);
           ans=max(ans,sum);
        }

        return dp[row][col]=ans;

    }
    long long maxPoints(vector<vector<int>>& points) {
        
        int n=points.size();
        int m=points[0].size();

        ll ans=INT_MIN;

        vector<vector<int>>dp(n+1,vector<int>(m+1,-1));

        for(int i=0;i<m;i++){
           ll sum=points[0][i]+find_sum(points,1,i,dp);
            ans=max(ans,sum);
        }

        return ans;
    }
};

# Tabulation accepted 

class Solution {
public:
    long long maxPoints(vector<vector<int>>& points) {
        
        int n=points.size();
        int m=points[0].size();

        vector<vector<long long>>dp(n+1,vector<long long>(m+1,-1));

        for(int i=0;i<m;i++){
            dp[0][i]=points[0][i];
        }

        for(int i=1;i<n;i++){

            vector<long long>left(m),right(m);
            
            left[0]=dp[i-1][0];

            for(int j=1;j<m;j++){
             left[j]=max(left[j-1]-1,dp[i-1][j]);
            }

            right[m-1]=dp[i-1][m-1];

            for(int j=m-2;j>=0;j--){
             right[j]=max(right[j+1]-1,dp[i-1][j]);
            }

            for(int j=0;j<m;j++){
                dp[i][j]=points[i][j]+max(left[j],right[j]);
            }
            
        }

        long long ans=INT_MIN;

        for(int i=0;i<m;i++){
            ans=max(ans,dp[n-1][i]);
        }

        return ans;
    }
};
 
```
```java []
# Recursion solution gives tle at 47 test case 

class Solution {
    public long find_sum(int[][] points, int row, int col) {
        // base case
        if (row >= points.length) {
            return 0;
        }

        long ans = 0;

        for (int i = 0; i < points[0].length; i++) {
            long sum = points[row][i] - Math.abs(i - col) + find_sum(points, row + 1, i);
            ans = Math.max(ans, sum);
        }

        return ans;
    }

    public long maxPoints(int[][] points) {
        int n = points.length;
        int m = points[0].length;

        long ans = Integer.MIN_VALUE;

        for (int i = 0; i < m; i++) {
            long sum = points[0][i] + find_sum(points, 1, i);
            ans = Math.max(ans, sum);
        }

        return ans;
    }
}

# Memoization gives tle at 143 test case

class Solution {
    public long find_sum(int[][] points, int row, int col, int[][] dp) {
        // base case
        if (row >= points.length) {
            return 0;
        }

        if (dp[row][col] != -1) {
            return dp[row][col];
        }

        long ans = 0;

        for (int i = 0; i < points[0].length; i++) {
            long sum = points[row][i] - Math.abs(i - col) + find_sum(points, row + 1, i, dp);
            ans = Math.max(ans, sum);
        }

        dp[row][col] = ans;
        return ans;
    }

    public long maxPoints(int[][] points) {
        int n = points.length;
        int m = points[0].length;

        long ans = Integer.MIN_VALUE;

        int[][] dp = new int[n + 1][m + 1];
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= m; j++) {
                dp[i][j] = -1;
            }
        }

        for (int i = 0; i < m; i++) {
            long sum = points[0][i] + find_sum(points, 1, i, dp);
            ans = Math.max(ans, su

# Tabulation accepted 

class Solution {
    public long maxPoints(int[][] points) {
        int n = points.length;
        int m = points[0].length;

        long[][] dp = new long[n + 1][m + 1];

        for (int i = 0; i < m; i++) {
            dp[0][i] = points[0][i];
        }

        for (int i = 1; i < n; i++) {
            long[] left = new long[m];
            long[] right = new long[m];

            left[0] = dp[i - 1][0];
            for (int j = 1; j < m; j++) {
                left[j] = Math.max(left[j - 1] - 1, dp[i - 1][j]);
            }

            right[m - 1] = dp[i - 1][m - 1];
            for (int j = m - 2; j >= 0; j--) {
                right[j] = Math.max(right[j + 1] - 1, dp[i - 1][j]);
            }

            for (int j = 0; j < m; j++) {
                dp[i][j] = points[i][j] + Math.max(left[j], right[j]);
            }
        }

        long ans = Long.MIN_VALUE;
        for (int i = 0; i < m; i++) {
            ans = Math.max(ans, dp[n - 1][i]);
        }

        return ans;
    }
}


```
```python []
Recursion solution gives tle at 47 test case 

class Solution:
    def find_sum(self, points: List[List[int]], row: int, col: int) -> int:
        # base case
        if row >= len(points):
            return 0

        ans = 0

        for i in range(len(points[0])):
            sum_val = points[row][i] - abs(i - col) + self.find_sum(points, row + 1, i)
            ans = max(ans, sum_val)

        return ans

    def maxPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        m = len(points[0])

        ans = float('-inf')

        for i in range(m):
            sum_val = points[0][i] + self.find_sum(points, 1, i)
            ans = max(ans, sum_val)

        return ans


 Memoization gives tle at 143 test case

class Solution:
    def find_sum(self, points: List[List[int]], row: int, col: int, dp: List[List[int]]) -> int:
        # base case
        if row >= len(points):
            return 0

        if dp[row][col] != -1:
            return dp[row][col]

        ans = 0

        for i in range(len(points[0])):
            sum_val = points[row][i] - abs(i - col) + self.find_sum(points, row + 1, i, dp)
            ans = max(ans, sum_val)

        dp[row][col] = ans
        return ans

    def maxPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        m = len(points[0])

        ans = float('-inf')

        dp = [[-1] * (m + 1) for _ in range(n + 1)]

        for i in range(m):
            sum_val = points[0][i] + self.find_sum(points, 1, i, dp)
            ans = max(ans, sum_val)

        return ans

 Tabulation accepted
 
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        m = len(points[0])

        dp = [[0] * (m + 1) for _ in range(n + 1)]

        for i in range(m):
            dp[0][i] = points[0][i]

        for i in range(1, n):
            left = [0] * m
            right = [0] * m

            left[0] = dp[i - 1][0]
            for j in range(1, m):
                left[j] = max(left[j - 1] - 1, dp[i - 1][j])

            right[m - 1] = dp[i - 1][m - 1]
            for j in range(m - 2, -1, -1):
                right[j] = max(right[j + 1] - 1, dp[i - 1][j])

            for j in range(m):
                dp[i][j] = points[i][j] + max(left[j], right[j])

        return max(dp[n - 1])


```
```javascript []
# Recursion solution gives tle at 47 test case 

var Solution = function() {};

Solution.prototype.find_sum = function(points, row, col) {
    // base case
    if (row >= points.length) {
        return 0;
    }

    let ans = 0;

    for (let i = 0; i < points[0].length; i++) {
        let sum = points[row][i] - Math.abs(i - col) + this.find_sum(points, row + 1, i);
        ans = Math.max(ans, sum);
    }

    return ans;
};

Solution.prototype.maxPoints = function(points) {
    let n = points.length;
    let m = points[0].length;

    let ans = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < m; i++) {
        let sum = points[0][i] + this.find_sum(points, 1, i);
        ans = Math.max(ans, sum);
    }

    return ans;
};

# Memoization gives tle at 143 test case

var Solution = function() {};

Solution.prototype.find_sum = function(points, row, col, dp) {
    // base case
    if (row >= points.length) {
        return 0;
    }

    if (dp[row][col] !== -1) {
        return dp[row][col];
    }

    let ans = 0;

    for (let i = 0; i < points[0].length; i++) {
        let sum = points[row][i] - Math.abs(i - col) + this.find_sum(points, row + 1, i, dp);
        ans = Math.max(ans, sum);
    }

    dp[row][col] = ans;
    return ans;
};

Solution.prototype.maxPoints = function(points) {
    let n = points.length;
    let m = points[0].length;

    let ans = Number.MIN_SAFE_INTEGER;

    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

    for (let i = 0; i < m; i++) {
        let sum = points[0][i] + this.find_sum(points, 1, i, dp);
        ans = Math.max(ans, sum);
    }

    return ans;
};


# Tabulation accepted 

var maxPoints = function(points) {
    let n = points.length;
    let m = points[0].length;

    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (let i = 0; i < m; i++) {
        dp[0][i] = points[0][i];
    }

    for (let i = 1; i < n; i++) {
        let left = Array(m).fill(0);
        let right = Array(m).fill(0);

        left[0] = dp[i - 1][0];
        for (let j = 1; j < m; j++) {
            left[j] = Math.max(left[j - 1] - 1, dp[i - 1][j]);
        }

        right[m - 1] = dp[i - 1][m - 1];
        for (let j = m - 2; j >= 0; j--) {
            right[j] = Math.max(right[j + 1] - 1, dp[i - 1][j]);
        }

        for (let j = 0; j < m; j++) {
            dp[i][j] = points[i][j] + Math.max(left[j], right[j]);
        }
    }

    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < m; i++) {
        ans = Math.max(ans, dp[n - 1][i]);
    }

    return ans;
};

```
![c2d27b08-ffbe-4bc6-8b29-5fc4d8effd5f_1723775276.9029489.jpeg](./images/0.jpeg)

