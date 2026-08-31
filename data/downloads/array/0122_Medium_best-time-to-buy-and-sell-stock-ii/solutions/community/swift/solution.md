# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 16
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/2040292/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/2040292/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int[] dp = new int[n];
        dp[0]=0;
        for(int i=1;i<n;i++){
            dp[i] = dp[i-1] + Math.max(0,prices[i]-prices[i-1]);
        }
        return dp[n-1];
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```


class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
        auto [_, finalNotHold] = trade( prices.size()-1, prices );
        
        // Max profit must come from notHold state finally.
        return finalNotHold;
    }
    
    tuple<int, int> trade(int day, vector<int>& prices){
        
        if( day == 0 ){
            
            // Hold on day_0 = buy at day_#0 = -prices[0]
            // Not hold on day_0 = do nothing = 0            
            return tuple<int, int>{ -prices[0], 0};
        }
        
        auto [prevHold, prevNotHold] = trade( day - 1, prices );
        
        // either keep hold, or buy in stock today at stock price
        int curHold = max( prevHold, prevNotHold - prices[ day ] );

        // either keep not-hold, or sell out stock today at stock price
        int curNotHold = max( prevNotHold, prevHold + prices[ day ] );        
        
        return tuple<int, int>{ curHold, curNotHold};
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        @cache
        def trade(day_d):
            
            if day_d == 0:
                
                # Hold on day_#0 = buy stock at the price of day_#0
                # Not-hold on day_#0 = doing nothing on day_#0
                return -prices[day_d], 0
            
            prev_hold, prev_not_hold = trade(day_d-1)
            
            hold = max(prev_hold, prev_not_hold - prices[day_d] )
            not_hold = max(prev_not_hold, prev_hold + prices[day_d] )
            
            return hold, not_hold
        
        # --------------------------------------------------
        last_day= len(prices)-1
        
        # Max profit must come from not_hold state (i.e., no stock position) on last day
        return trade(last_day)[1]
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let prev = prices[i - 1];
        let current = prices[i];

        if (prev < current) {
            profit += current - prev;
        }
    }
    
    return profit;
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
fun maxProfit(prices: IntArray): Int {
        var localMin = -1
        var localMax = -1
        var result = 0
        
        prices.forEach{
            if(localMin == -1 || (localMax == -1 && it < localMin)){
                localMin = it
            } else if(it > localMax){
                localMax = it
            } else {
                result += localMax - localMin
                localMin = it
                localMax = -1
            }
        }
        
        if(localMax > 0){
            result += localMax - localMin
        }
        
        return result
    }
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        var maxProfit = 0
        
        for i in prices.indices.dropFirst() { 
            let priceChange = prices[i] - prices[i-1]
            if priceChange > 0 { 
                maxProfit += priceChange
            }
        }
        return maxProfit
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***