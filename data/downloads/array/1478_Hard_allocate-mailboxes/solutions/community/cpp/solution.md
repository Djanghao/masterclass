# C++ || Recursion || Memoization || DP

**Author:** Pratik_26
**Votes:** 6
**Link:** [https://leetcode.com/problems/allocate-mailboxes/solutions/3080770/](https://leetcode.com/problems/allocate-mailboxes/solutions/3080770/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Find all possible combinations of consecutive K groups. 
2. From each group find the median element and calculate the cost of the group. Cost can be calculated as the absolute difference between the elements of the group and the median element.
3. Track the minimum answer from all possible combinations.

# Recursion
```
class Solution {
private:
    int recursion(int index, int k, int size, vector<int>&houses)
    {
        if(k == 1)
        {
            int median = houses[((size - index) / 2) + index];
            int ans = 0;
            for(int i = index; i < size; ++i)
            {
                ans += abs(houses[i] - median);
            }
            return ans;
        }
        int mini = INT_MAX;
        for(int i = index; i <= (size - k); ++i)
        {
            int median = houses[((i - index) / 2) + index];
            int currAns = 0;
            for(int j = index; j <= i; ++j)
            {
                currAns += abs(houses[j] - median);
            }
            int ans = currAns + recursion(i + 1, k - 1, size, houses);
            mini = min(mini, ans);
        }
        return mini;
    }
public:
    int minDistance(vector<int>& houses, int k) {
        int size = houses.size();
        sort(houses.begin(), houses.end());
        return recursion(0, k, size, houses);
    }
};
```


# Memoization
```
class Solution {
private:
    int memoization(int index, int k, int size, vector<int>&houses, vector<vector<int>>&dp)
    {
        if(k == 1)
        {
            int average = houses[((size - index) / 2) + index];
            int ans = 0;
            for(int i = index; i < size; ++i)
            {
                ans += abs(houses[i] - average);
            }
            return ans;
        }
        if(dp[index][k] != -1)
        {
            return dp[index][k];
        }
        int mini = INT_MAX;
        for(int i = index; i <= (size - k); ++i)
        {
            int average = houses[((i - index) / 2) + index];
            int currAns = 0;
            for(int j = index; j <= i; ++j)
            {
                currAns += abs(houses[j] - average);
            }
            int ans = currAns + memoization(i + 1, k - 1, size, houses, dp);
            mini = min(mini, ans);
        }
        return dp[index][k] = mini;
    }
public:
    int minDistance(vector<int>& houses, int k) {
        int size = houses.size();
        sort(houses.begin(), houses.end());
        vector<vector<int>>dp(size, vector<int>(k + 1, -1));
        return memoization(0, k, size, houses, dp);
    }
};
```