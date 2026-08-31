# [C++] dp from O(m * n * n) to O(m * n)

**Author:** npes87184
**Votes:** 416
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/1344888/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/1344888/)

---

The initial thought of this problem is dynamic programing. It can be defined simply in the following method.

```cpp
dp[i][j] = max(dp[i - 1][k] + point[i][j] - abs(j - k)) for each 0 <= k < points[i - 1].szie()
```

dp[i][j] means the maximum points in row i and col j. The value is from previous row with costs abs(j - k).

 This recurrence relation is from the definition of problem. Using this recurrence relation we can write code like this.

```cpp
class Solution {
public:
    long long maxPoints(vector<vector<int>>& points) {
        vector<vector<long long>> dp(points.size(), vector<long long>(points[0].size(), -1));
        
        for (int i = 0; i < points[0].size(); ++i) {
            dp[0][i] = points[0][i];
        }
        
        for (int i = 1; i < points.size(); ++i) {
            for (int j = 0; j < points[i].size(); ++j) {
                for (int k = 0; k < points[i].size(); ++k) {
                    dp[i][j] = max(dp[i][j], dp[i - 1][k] - abs(k - j) + points[i][j]);
                }
            }
        }
        
        long long max_ans = -1;
        for (const auto v : dp.back()) {
            max_ans = max(max_ans, v);
        }
        
        return max_ans;
    }
};
```

It produces the time complexity O(m * n * n) also it will gain TLE in the end.

To further reduce the time complexity, I found that there is some similar calculation when we are trying to find the max. That is dp[i - 1][k] - k (or + k depends on the position). To reduce to the smaller problem, we assume that all the max value is from the left side of the current position. With this assumption, the abs(k - j) can be changed to j - k. Due to other values (e.g. points[i][j]) are fixed. The problem becomes to find the max dp[i - 1][k] + k in the left. That is

```cpp
dp[i][j] = max(dp[i - 1][k] + k) + points[i][j] - j for all 0 <= k <= j
```

You may notice that some of the sign is reversed, that is because of we need to subtract the cost.

Now, the right side is similar. If we assume max value is from the right side. The relation will be:

```cpp
dp[i][j] = max(dp[i - 1][k] - k) + points[i][j] + j for all j <= k <= points[i].size() - 1
```

The actual answer will be either from the left side or right side.

From the observation, the code can be modified to

```cpp
class Solution {
public:
    long long maxPoints(vector<vector<int>>& points) {
        vector<vector<long long>> dp(points.size(), vector<long long>(points[0].size(), -1));
        
        for (int i = 0; i < points[0].size(); ++i) {
            dp[0][i] = points[0][i];
        }
        
        for (int i = 1; i < points.size(); ++i) {
            vector<long long> left_dp(points[i].size(), -1);
            vector<long long> right_dp(points[i].size(), -1);
            
            left_dp[0] = dp[i - 1][0];
            for (int k = 1; k < points[i].size(); ++k) {
                left_dp[k] = max(left_dp[k - 1], dp[i - 1][k] + k);
            }
            
            right_dp.back() = dp[i - 1].back() - points[i].size() + 1;
            for (int k = points[i].size() - 2; k >= 0; --k) {
                right_dp[k] = max(right_dp[k + 1], dp[i - 1][k] - k);
            }
            
            for (int j = 0; j < points[i].size(); ++j) {
                dp[i][j] = max(left_dp[j] - j, right_dp[j] + j) + points[i][j];
            }
        }
        
        long long max_ans = -1;
        for (const auto v : dp.back()) {
            max_ans = max(max_ans, v);
        }
        
        return max_ans;
    }
};
```

Which then produces the time complexity O(m * n)