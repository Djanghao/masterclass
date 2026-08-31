# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/5971578/](https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/5971578/)

---

# **Explanation**
DP equation formula:
```
dp[i][dest] = max(dp[i-1][curr] + travelScore[curr][dest], dp[i-1][dest] + stayScore[i][dest])
```

# **Complexity**
Time `O(nnk)`
Space `O(n)`

```Java [Java]
    public int maxScore(int n, int k, int[][] stayScore, int[][] travelScore) {
        int[] dp = new int[n];
        for (int i = 0; i < k; ++i) {
            int[] dp2 = dp.clone();
            for (int curr = 0; curr < n; ++curr)
                dp2[curr] += stayScore[i][curr];
            for (int curr = 0; curr < n; ++curr)
                for (int dest = 0; dest < n; ++dest)
                    dp2[dest] = Math.max(dp2[dest], dp[curr] + travelScore[curr][dest]);
            dp = dp2;
        }
        return Arrays.stream(dp).max().getAsInt();
    }
```

```C++ [C++]
    int maxScore(int n, int k, vector<vector<int>>& stayScore, vector<vector<int>>& travelScore) {
        vector<int> dp(n, 0);
        for (int i = 0; i < k; ++i) {
            vector<int> dp2 = dp;
            for (int curr = 0; curr < n; ++curr)
                dp2[curr] += stayScore[i][curr];
            for (int curr = 0; curr < n; ++curr)
                for (int dest = 0; dest < n; ++dest)
                    dp2[dest] = max(dp2[dest], dp[curr] + travelScore[curr][dest]);
            dp = move(dp2);
        }
        return *max_element(dp.begin(), dp.end());
    }
```

```py [Python3]
    def maxScore(self, n: int, k: int, stayScore: List[List[int]], travelScore: List[List[int]]) -> int:
        dp = [0] * n
        for i in range(k):
            dp2 = dp[:]
            for curr in range(n):
                dp2[curr] += stayScore[i][curr]
            for curr in range(n):
                for dest in range(n):
                    dp2[dest] = max(dp2[dest], dp[curr] + travelScore[curr][dest])
            dp = dp2
        return max(dp)
```
