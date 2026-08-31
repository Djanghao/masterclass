# Recursion -> Memoization 2D -> DP 2D -> DP 1D

**Author:** isakovi
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/2089103/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/2089103/)

---

### Recursion (TLE):
```c++
class Solution {
private:
    long long helper(vector<int>& damage, int armor, int i){
        if (i == damage.size()){
            return 1;
        }
        
        long long takeArmor = LONG_MAX;
        if (armor > 0){
            takeArmor = helper(damage, 0, i + 1) + max(0, damage[i] - armor);
        }
        long long notTakeArmor = helper(damage, armor, i + 1) + damage[i];
        
        return min(takeArmor, notTakeArmor);
    }
public:
    long long minimumHealth(vector<int>& damage, int armor){
        return helper(damage, armor, 0);
    }
};
```

### Memoization 2D:
```
class Solution {
private:
    vector<vector<long long>> memo;
    long long helper(vector<int>& damage, int armor, int i){
        if (i == damage.size()){
            return 1;
        }
        else if (memo[i][armor == 0] != -1){
            return memo[i][armor == 0];
        }

        long long takeArmor = LONG_MAX;
        if (armor > 0){
            takeArmor = helper(damage, 0, i + 1) + max(0, damage[i] - armor);
        }
        long long notTakeArmor = helper(damage, armor, i + 1) + damage[i];

        return memo[i][armor == 0] = min(takeArmor, notTakeArmor);
    }
public:
    long long minimumHealth(vector<int>& damage, int armor){
        memo.resize(damage.size(), vector<long long>(2, -1));
        return helper(damage, armor, 0);
    }
};
```

### DP 2D:
```
class Solution {
public:
    long long minimumHealth(vector<int>& damage, int armor){
        int n = damage.size();
        vector<vector<long long>> dp(n + 1, vector<long long>(2));
        dp[0][0] = dp[0][1] = 1;

        for (int i = 1; i <= n; i++){
            dp[i][0] = dp[i - 1][0] + damage[i - 1];
            dp[i][1] = min(dp[i - 1][0] + max(0, damage[i - 1] - armor), dp[i - 1][1] + damage[i - 1]);
        }
        return dp[n][1];
    }
};
```

### DP 1D:
```
class Solution {
public:
    long long minimumHealth(vector<int>& damage, int armor){
        long long takeArmor = 1, notTakeArmor = 1;

        for (int& d : damage){
            takeArmor = min(notTakeArmor + max(0, d - armor), takeArmor + d);
            notTakeArmor = notTakeArmor + d;
        }
        return takeArmor;
    }
};
```