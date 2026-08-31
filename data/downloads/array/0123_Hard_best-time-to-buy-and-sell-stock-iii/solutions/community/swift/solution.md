# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 31
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/2040316/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/2040316/)

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
        if(prices == null || prices.length < 1) return 0;
        int buy1 = -prices[0], sell1 = 0, buy2 = -prices[0], sell2 = 0;
        for(int i = 1; i < prices.length; i++) {
            buy1 = Math.max(buy1, -prices[i]);
            sell1 = Math.max(sell1, buy1 + prices[i]);
            buy2 = Math.max(buy2, sell1 - prices[i]);
            sell2 = Math.max(sell2, buy2 + prices[i]);
        }
        return sell2;
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
    
    int solve(vector<int>&prices, int day, int transactionsLeft){
        
        if(day == prices.size()){
            return 0;
        }
        
        if(transactionsLeft == 0){
            return 0;
        }
        
        // choice 1
        // no transaction today
        int ans1 = solve(prices, day + 1, transactionsLeft);
        
        
        // choice 2
        // doing the possible transaction today     
        int ans2 = 0;
        bool buy = (transactionsLeft % 2 == 0);
        
        if(buy == true){ // buy
            ans2 = -prices[day] + solve(prices, day + 1, transactionsLeft - 1);
        }else{ // sell
            ans2 = prices[day] + solve(prices, day + 1, transactionsLeft - 1);
        }
        
        return max(ans1, ans2);
        
        
    }
    
    
    int maxProfit(vector<int>& prices) {
        
        int ans = solve(prices, 0, 4); // starting with day 0 and max 4 transactions can be done
        return ans;
        
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
        buy, sell = [inf]*2, [0]*2
        for x in prices:
            for i in range(2): 
                if i: buy[i] = min(buy[i], x - sell[i-1])
                else: buy[i] = min(buy[i], x)
                sell[i] = max(sell[i], x - buy[i])
        return sell[1]
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var maxProfit = function(prices) {
  if(prices.length == 0) return 0
  
  let dp = new Array(prices.length).fill(0);
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);  // or Math.min(min, prices[i] - dp[i]) , FYI: dp[i] is 0
    max = Math.max(max, prices[i] - min);
    dp[i] = max;
  }
  
  // 1st run dp = [0,0,2,2,2,3,3,4];
  
  min = prices[0];
  max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i] - dp[i]); // substract dp[i]  = current price - what profit we made during 1st run.
    max = Math.max(max, prices[i] - min);
    dp[i] = max;
  }
  
  // 2nd run dp = [0,0,2,2,2,5,5,6];
  
  return dp.pop();
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***C***
```
int maxProfit(int* prices, int pricesSize){
    int *s1 = (int *)malloc(sizeof(int) * pricesSize);
    int *s2 = (int *)malloc(sizeof(int) * pricesSize);
    
    memset(s1, 0, sizeof(int) * pricesSize);
    memset(s2, 0, sizeof(int) * pricesSize);
    
    int max = INT_MIN, min= prices[0];

    for(int i=1; i<pricesSize-1; i++){
        if(min > prices[i]) min = prices[i]; 
        
        if(max < (prices[i]- min)) max = prices[i] - min;
        s1[i] = max;
    }//for i
   
    min= INT_MIN, max=prices[pricesSize-1];
    s2[pricesSize-1] = 0;

    for(int i=pricesSize-2; i>=0; i--){
        if(prices[i] > max) max = prices[i]; 
        if(min < (max- prices[i])) min = max - prices[i];
    
        s2[i] = min;
    }//for i
    
    max=INT_MIN;
    for(int i=0;i<pricesSize;i++){
        max = max < (s1[i] + s2[i]) ?  (s1[i] + s2[i]) : max;
    }

    return max;
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
    // - Complexity:
    //   - time: O(n), where n is the length of the prices.
    //   - space: O(1), only constant space is used.

    func maxProfit(_ prices: [Int]) -> Int {
        var buy1 = Int.max
        var buy2 = Int.max
        var sell1 = 0
        var sell2 = 0

        for price in prices {
            buy1 = min(buy1, price)
            sell1 = max(sell1, price - buy1)

            buy2 = min(buy2, price - sell1)
            sell2 = max(sell2, price - buy2)
        }

        return sell2
    }

}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***