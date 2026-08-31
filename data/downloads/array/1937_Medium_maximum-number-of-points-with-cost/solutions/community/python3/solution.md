# recursive/iterative DP||From TLE to 138ms Beats 99.18%

**Author:** anwendeng
**Votes:** 56
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5647848/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5647848/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1st try got TLE because it's a O(rows* cols^2) solution
The crucial part is to reduce the computational time for taking max.
How to do it?
take left max up to this col, & take right max. So, an O(rows* cols) is possible.
# Approach
<!-- Describe your approach to solving the problem. -->
[Please turn on English subtitles if necessary]
[https://youtu.be/-8MDK8nGcKs?si=aP877C3declmX-Sz](https://youtu.be/-8MDK8nGcKs?si=aP877C3declmX-Sz)
1. 1st try is a recursive DP(recursion+memo) which fails but with 152 / 157 testcases passed, not bad. An iterative version of this has even  156 / 157 testcases passed.
2. An accepted version using recursion+memo is done, with the argument of taking right max & left max.
3. In the version of recursive DP, a function `void right_left_max(int i, vector<vector<int>>& points)` is defined to compute the arrays `left` & `right`. This is called only when `j=0` & performs once for each `i`. So, the place for `dp[i-1][j]` is replaced by the recursive function `f(i-1, j, points)` for ensuring that `dp[i-1][j]` is computed.
4. In the iterative version the part for `void right_left_max(int i, vector<vector<int>>& points)` can be easily inserted within the loop; one can reverse the computational order for `left` & `right` to reduce the number of loops.
5. An iterative DP with optimized space is done with `&1` trick (equivalent to `%2`) to save space.
6.  A python solution doesn't need `dp` & reuse `points`; `right` is a list & `left` is just a variable.( applying the trick of @Sergei used in his C++ implemenatation)

Let's see the 1st attempt which failed
# Code fails but with 152 / 157 testcases passed
```
class Solution {
public:
    int r, c;
    vector<vector<long long>> dp;
    long long f(int i, int j, vector<vector<int>>& points){
        if (i==0) return dp[i][j]=points[i][j];
        if (dp[i][j]!=-1) return dp[i][j];
        long long max_prev=0;
        for (int k=0; k<=j; k++)
            max_prev=max(max_prev, f(i-1, k, points)-(j-k));
        for (int k=j+1; k<c; k++)
            max_prev=max(max_prev, f(i-1, k, points)-(k-j));
        return dp[i][j]=max_prev+points[i][j];
    }
    long long maxPoints(vector<vector<int>>& points) {
        r=points.size(), c=points[0].size();
        dp.assign(r, vector<long long>(c, -1));
        long long ans=0;
        for (int j=0; j<c; j++)
            ans=max(ans, f(r-1, j, points));
        return ans;
    }
};

```
# Real RUN for testcase
Consider the testcase points=`[[10, 1, 1, 1, 1, 1],[1, 1, 1, 1, 1, 8],[1, 1, 1, 1, 1, 1],[7, 1, 1, 1, 1, 1],[1, 15, 1, 1, 1, 1]]`
Let's see the process run by the iterative code with adding some output:
```
points:
  10   1   1   1   1   1
   1   1   1   1   1   8
   1   1   1   1   1   1
   7   1   1   1   1   1
   1  15   1   1   1   1

----
right:
  10   1   1   1   1   1
left:
  10   9   8   7   6   5
row 1:
  11  10   9   8   7  13

----
right:
  11  10  10  11  12  13
left:
  11  10   9   8   7  13
row 2:
  12  11  11  12  13  14

----
right:
  12  11  11  12  13  14
left:
  12  11  11  12  13  14
row 3:
  19  12  12  13  14  15

----
right:
  19  12  12  13  14  15
left:
  19  18  17  16  15  15
row 4:
  20  33  18  17  16  16
=> max=33
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(rc)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(rc)\	o O(c)$
# Code recursion+memo||144ms Beats 98.91%
```
class Solution {
public:
    int r, c;
    vector<vector<long long>> dp;
    vector<long long> left, right;
    long long f(int i, int j, vector<vector<int>>& points){
        if (i==0) return dp[i][j]=points[i][j];
        if (dp[i][j]!=-1) return dp[i][j];
        if (j==0) right_left_max(i, points);
        return dp[i][j]=max(left[j], right[j])+points[i][j];
    }

    void right_left_max(int i, vector<vector<int>>& points){
        // Compute max from left to col j=0...c-1
        left[0]=f(i-1, 0, points);
        for (int j=1; j < c; j++)
            left[j]=max(left[j-1]-1, f(i-1, j, points));

        // Compute max from right downto col j=c-1...0
        right[c-1]=f(i-1, c-1, points);
        for (int j=c-2; j >= 0; j--)
            right[j] = max(right[j+1]-1, f(i-1, j, points));
    }

    long long maxPoints(vector<vector<int>>& points) {
        r=points.size(), c=points[0].size();
        dp.assign(r, vector<long long>(c, -1));
        left.assign(c, LLONG_MIN);
        right=left;

        long long ans=0;
        for (int j=0; j<c; j++)
            ans=max(ans, f(r-1, j, points));
        return ans;
    }
};



auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
# C++ iterative DP with optimized space||138ms beats 99.18%
```
class Solution {
public:
    static long long maxPoints(vector<vector<int>>& points) {
        const int r=points.size(), c=points[0].size();
        vector<vector<long long>> dp(2, vector<long long>(c, 0));

        // Initialize 0th row
        for (int j=0; j<c; j++)
            dp[0][j]=points[0][j];

        // DP Calculation
        for (int i=1; i < r; i++) {
            vector<long long> left(c, 0), right(c, 0);

             // Compute max from right downto col j=c-1...0
            right[c-1]=dp[(i-1)&1][c-1];
            for (int j=c-2; j >= 0; j--)
                right[j] = max(right[j+1]-1, dp[(i-1)&1][j]);

            // Compute max from left to col j=0...c-1
            left[0]=dp[(i-1)&1][0];
            dp[i&1][0]=max(left[0], right[0])+points[i][0];
            for (int j=1; j < c; j++){
                left[j]=max(left[j-1]-1, dp[(i-1)&1][j]);
                dp[i&1][j] = max(left[j], right[j])+points[i][j];// update DP
            }
        }

        // Find the maximum value
        return *max_element(dp[(r-1)&1].begin(), dp[(r-1)&1].end());
    }
};



auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();



```
# Python solution
```
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        r, c=len(points), len(points[0])
        for i in range(1, r):
            right=[0]*c
            right[-1]=points[i-1][-1]
            for j in range(c-2, -1, -1):
                right[j]=max(right[j+1]-1, points[i-1][j])
            
            left=points[i-1][0]
            points[i][0]=max(left, right[0])+points[i][0]
            for j in range(1, c):
                left=max(left-1, points[i-1][j])
                points[i][j]=max(left, right[j])+points[i][j]
                
        return max(points[-1])
```