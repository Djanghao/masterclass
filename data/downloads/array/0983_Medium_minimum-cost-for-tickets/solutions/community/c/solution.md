# [C++] DP Solution w/ Detailed Explanation

**Author:** Dennosity
**Votes:** 98
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/762493/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/762493/)

---

Working Example: days = [1,4,6,7,8,20], costs = [2,7,15]
Essentially the question breaks down to "what is your total expenses on `day 20`". Since we have three possible tickets with varying durations, the total cost of  `day 20` is either the cost of your total expenses on `day 19` + `2`,  `day 13` + `7`, or `day 0` + `15`, (`day 0` being the day before any possible trip, we can't have negative days). As you can see the total cost of any day relies on the total cost of previous days. Furthermore, you should see that our original problem breaks itself down into the same issue just with earlier days. If you have an idea on how to approach the problem, I suggest you stop reading and try the problem out for yourself.

1) This is a classic [Minimum (Maximum) Path to Reach a Target](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns#Minimum-(Maximum)-Path-to-Reach-a-Target) problem. First we have to initialize a vector/array `dp` representing all 365 days plus 1 (`day 0`). Since we are trying to minimize cost, I initalize the total cost of each day to `INT_MAX`. However, if `dp[0]` or `day 0` represents the day before any trip we shouldn't have to minimize the cost of this day thus its value is set to zero.

```
unordered_map<int,int> tickets;
        tickets[1] = costs[0];
        tickets[7] = costs[1];
        tickets[30] = costs[2];
		
vector<int> dp(366, INT_MAX);
dp[0] = 0
```
*You could do some clever indexing with `dp[0]` and `dp[n]` representing your first and last trip respectively, but I found that to be overall too confusing. (It is also here I initialized the cost and duration of each ticket*

2) We take a bottom-up approach to this problem as before answering `dp[20]` we answer `dp[19]`, `dp[13]`, etc. Also note that we start on `day 1` as we are not trying to minimize the cost of `day 0`
```
for(int i=1; i<366; ++i){
//...
}
```

3) Taking our idea from our intro and `2)` we have our solution. We should note that if `day i` is not included in our argument `days` that day's total expensenses is equal `day i-1` since we didn't have to consider buying a ticket.
```
if(find(days.begin(), days.end(), i) == days.end()){
	dp[i] = dp[i-1];
	continue;
}
for(auto ticket : tickets){
	dp[i] = min(dp[i], dp[max(0, i-ticket.first)] + ticket.second);
}
```

4) **To illustrate the process**
* dp[1] = 2 or `min(dp[0] + 2 dp[0] + 7, dp[0] + 15)`
* dp[2] = 2 (we don't have to consider buying a ticket here so we just take the total cost of the previous day)
* dp[3] = 2 
* dp[4] = 4 or `min(dp[3] + 2, dp[0] + 7, dp[0] + 15)`
* dp[5] = 4
* dp[6] = 6
* dp[7] = 7 or `min(dp[6] + 2, dp[0] + 7, + dp[0]  + 15)`
* dp[8] = 9 or `min(dp[7] + 2, dp[1] + 7, + dp[0] + 15)` 
* etc.
*Technically we could just break out of the loop on the last day, but I chose not too. After the last day, the total expenses will remain the same because of our if statement.*

5) **Full Solution** (please don't copy pasta the solution without reading the post!)
```
class Solution {
public:
    int mincostTickets(vector<int>& days, vector<int>& costs) {
        unordered_map<int,int> tickets;
        tickets[1] = costs[0];
        tickets[7] = costs[1];
        tickets[30] = costs[2];
        
        vector<int> dp(366, INT_MAX);
        dp[0] = 0;
        for(int i=1; i<366; ++i){
            if(find(days.begin(), days.end(), i) == days.end()){
                dp[i] = dp[i-1];
                continue;
            }
            for(auto ticket : tickets){
                dp[i] = min(dp[i], dp[max(0, i-ticket.first)] + ticket.second);
            }
        }
        
        return dp[365];
    }
};
```
6) Useful [post](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns) for those starting out with DP
7) Don't forget to upvote if this post helped you :)
...if it didn't please don't downvote... I'm sorry I can change!

