# Explained : take and skip next i elements || 1D - DP

**Author:** kreakEmp
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4328786/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4328786/)

---

# Intuition
- As the problem says when we buy ith item then next i items are free => this can be reframed as take the ith price and then you cna skip next i prices. And by this we need to take min price and reach the end. This hints of going with take and skip approach of DP.

# Approach
- Take i-th item, then dierectly move to i+1 to 2*i + 2 items and try taking each of them. So when we call with recursion with i value equal to i+2 that means we have skipped i+1 th value. This is because the problem says if we purchsed ith item then we don't have buy next i the items. As the index is zero index in our code we can skip i+1 items from ith index. So we can skip i+1 item from ith index => we can move to i + (i+1) + 1 => 2*i + 2 th index item we can move directly without taking any item in between.

- Accumulate min from each move 
- Add the ith item price to min possible and return it.
- To optimise add memorisation. We set zero value to memorisation as default because zero price is not possible.

Note : We need to start with 0th item always, as there is no way to skip to it(basically we can get the first item for free).


### C++
```
class Solution {
public:
    int dp[1001] = {};
    int solve(vector<int>& prices, int i){
        if(i >= prices.size()) return 0;
        if(dp[i]) return dp[i];
        int res = INT_MAX;
        for(int j = i+1; j <= 2*i + 2; ++j){
            res = min(res, solve(prices, j));
        }
        return dp[i] = res + prices[i];
    }

    int minimumCoins(vector<int>& prices) {
        return solve(prices, 0);
    }
};
```

### Java
```
class Solution {
    int[] dp = new int[1001];
    int solve(int[] prices, int i){
        if(i >= prices.length) return 0;
        if(dp[i] != 0) return dp[i];
        int res = Integer.MAX_VALUE;
        for(int j = i+1; j <= 2*i + 2; ++j) {
            res = Math.min(res, solve(prices, j));
        }
        return dp[i] = res + prices[i];
    }
    public int minimumCoins(int[] prices) {
        return solve(prices, 0);
    }
}
```

---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---


