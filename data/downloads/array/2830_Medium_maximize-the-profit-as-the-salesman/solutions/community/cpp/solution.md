# Easy Solution || Knapsack DP || Binary Search

**Author:** kartikeyy31
**Votes:** 45
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934072/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934072/)

---

**Explanation**
* The core idea of the algorithm is to find the maximum earnings that can be achieved by selecting non-overlapping offers from a given set of offers sorted by their end times.
* To maximize the earnings, we need to determine whether including the current offer in selecting and selling houses to buyers that will lead to a higher total profit or not.
* Basically, sort the offers array and solve it like **`Knapsack dp.`**

**C++**
```
class Solution {
private:
    int solve(int idx, vector<vector<int>> &offers, vector<int> &dp) {
        
        if (idx == offers.size()) return 0;
        if (dp[idx] != -1) return dp[idx];
        
        int notTake = solve(idx+1, offers, dp);
        
        int low = idx+1, high = offers.size() - 1;
        int next_idx = offers.size();
        
        // finding the idx for the next offer if we take idx as the current offer
        while (low <= high) {
            int mid = (low+high)/2;
            if (offers[mid][0] > offers[idx][1]) {
                high = mid - 1;
                next_idx = mid;
            } else {
                low = mid + 1;
            }
        }

        // peforming this & use binary search to find the next idx to perform;
        int take = offers[idx][2] + solve(next_idx, offers, dp);
        return dp[idx] = max(take, notTake);
    }
public:
    int maximizeTheProfit(int n, vector<vector<int>> &offers) {
        int m = offers.size();
        sort(offers.begin(), offers.end());

        vector<int> dp(m, -1);
        return solve(0, offers, dp);
    }
};
```