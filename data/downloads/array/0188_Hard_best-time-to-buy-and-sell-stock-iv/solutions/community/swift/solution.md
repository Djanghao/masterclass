# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/1987196/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/1987196/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
    public int maxProfit(int k, int[] prices) {
        int n = prices.length;
        int[] sell = new int[k+1], buy = new int[k+1];
        for(int i = 0; i < k+1; i++){
            sell[i] = 0;
            buy[i] = Integer.MIN_VALUE;
        }
        for(int i = 0; i < n; i++){
            for(int j = k; j > 0; j--){
                sell[j] = Math.max(sell[j], prices[i] + buy[j]);
                buy[j] = Math.max(buy[j], sell[j-1] - prices[i]);
            }
        }
        return sell[k];
    }
}
```

***JavaScript***
```
var maxProfit = function(k, prices) {
    if(prices.length == 0) return 0;
    
    // When k becomes so much larger than the number of prices we can make transactions whenever.
    if(k > (prices.length / 2) ){
        let profit = 0;
        for(let i = 1; i < prices.length; i++){
            if(prices[i] > prices[i - 1]){
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }
    else{
        let dp = new Array(prices.length).fill(0);
        let size = prices.length;
        for(let t = 1; t <= k; t++){
            let min = prices[0];
            let max = 0;
            for(let i = 0; i < size; i++){
                min = Math.min(min, prices[i] - dp[i]);
                max = Math.max(max, prices[i] - min);
                dp[i] = max
            }
        }
        return dp.pop();   
    }
};
```

***C++***
```
class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {

        // Step 1: Find out all profit opportunities            
        vector<int> profits;
        stack<pair<int, int>> vps; // valley-peak pairs
        
        int v;
        int p = -1;
        for (;;) {
            // find next valley-peak pair
            for (v = p+1; (v+1 < prices.size()) && (prices[v] >= prices[v+1]); ++v);
            for (p = v  ; (p+1 < prices.size()) && (prices[p] <= prices[p+1]); ++p);
            
            if (v == p) { // v==p means that both v and p reach the end of the array
                break;
            }
            
            // Consider two transactions (v1, p1) (back of the stack) and (v2, p2) (the new-found).
            // If prices[v1] >= prices[v2], 
            // it is meaningless to combine the two transactions.
            // Save of profit of (v1, p1), and pop it out of the record.
            while ((!vps.empty()) && (prices[v] <= prices[vps.top().first])) {
                profits.push_back(prices[vps.top().second] - prices[vps.top().first]);
                vps.pop();
            }
            
            // If prices[v1]<prices[v2] and prices[p1]<prices[p2], 
            // then it is meaningful to combine the two transactions
            // update (v1, p1) to (v1, p2), and save the profit of (v2, p1)
            while ((!vps.empty()) && (prices[p] >= prices[vps.top().second])) {
                profits.push_back(prices[vps.top().second] - prices[v]);
                v = vps.top().first;
                vps.pop();
            }
            
            // save the new-found valley-peak pair
            vps.emplace(v, p);
        }
        
        // save all remaining profits
        while (!vps.empty()) {
            profits.push_back(prices[vps.top().second] - prices[vps.top().first]);
            vps.pop();
        }
        
        // Step 2: Calculate the k highest profits
        int ret;
        if (profits.size() <= k) {
            ret = accumulate(profits.begin(), profits.end(), 0);
        } else {
            nth_element(profits.begin(), profits.end() - k, profits.end());
            ret = accumulate(profits.end() - k, profits.end(), 0);
        }
        return ret;
    }
};
```

***Python***
```
class Solution(object):
    def maxProfit(self, k, prices):
        n = len(prices)
        sell = [0 for i in range(k+1)]
        buy = [float('-inf') for i in range(k+1)]
        for i in range(n):
            for j in range(k, 0, -1):
                sell[j] = max(sell[j], prices[i] + buy[j])
                buy[j] = max(buy[j], sell[j-1] - prices[i])
        return sell[k]
```

***Kotlin***
```
class Solution {
    fun maxProfit(K: Int, prices: IntArray): Int {
        val totalDays = prices.size
        
        // lc0122
        if(K >= totalDays){
            var maxProfit = 0
            for(day in 1 until totalDays){
                if(prices[day - 1] < prices[day]){
                    maxProfit += prices[day] - prices[day - 1]
                }
            }
            
            return maxProfit
        }
        
        val dp = Array(K + 1){ IntArray(totalDays) { 0 }}
        for(k in 1..K){
            var localMax = dp[k - 1][0] - prices[0];
            
            for(day in 1 until totalDays){
                dp[k][day] = maxOf(dp[k][day - 1], prices[day] + localMax)
                localMax = maxOf(localMax, dp[k - 1][day] - prices[day])
            }
        }
        
        return dp[K][totalDays - 1]
    }
}

```

***Swift***
```
class Solution {
    func maxProfit(_ k: Int, _ prices: [Int]) -> Int {
        guard k > 0 && prices.count > 1 else { return 0 }
        guard k >= prices.count/2 else {
            var low = [Int](repeating: prices[0], count: k)
            var res = [Int](repeating: 0, count: k)
            for i in prices.indices {
                for s in 0..<k {
                    let mj = low[s], pn = prices[i]
                    low[s] = min(mj, s == 0 ? pn : pn - res[s-1])
                    res[s] = max(res[s], pn - mj)
                }
            }
            return res[k - 1]
        }
        var res = 0
        for i in 1..<prices.count where prices[i] > prices[i-1] {
            res += (prices[i] - prices[i-1])
        }
        return res
    }
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***