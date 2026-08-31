# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 42
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2040282/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2040282/)

---

**As a professional with a passion for problem-solving and collaboration, I am always looking to expand my network of like-minded individuals on LinkedIn. By connecting with me, we can work together to tackle complex challenges, share ideas, and grow both professionally and personally.**

**Whether you're an expert in your field or just starting out, I welcome connections from all backgrounds and experiences. By building a diverse and collaborative network, we can leverage our unique perspectives and skill sets to push the boundaries of what's possible.**

**So, if you're interested in connecting and exploring the potential for future collaborations, please don't hesitate to reach out. Let's start a conversation and see where it takes us!**

---

https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/

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
        
        int max=0,min=prices[0];
        for(int i=1;i<prices.length;i++)   {
		
            if(min<prices[i])
                max=Math.max(prices[i]-min,max);
            else
                min=prices[i];
        }
        return max;
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
int maxProfit(vector<int>& prices) {
        int n= prices.size();
        int maxprofit = 0;
        int minvalue = INT_MAX;
        for(int i =0;i<n;i++){
            minvalue = min(prices[i],minvalue);
            maxprofit= max(maxprofit,prices[i] - minvalue);
        }
        return maxprofit;
    }
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
    def maxProfit(self,prices):
        left = 0 #Buy
        right = 1 #Sell
        max_profit = 0
        while right < len(prices):
            currentProfit = prices[right] - prices[left] #our current Profit
            if prices[left] < prices[right]:
                max_profit =max(currentProfit,max_profit)
            else:
                left = right
            right += 1
        return max_profit
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
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
   prices.foldIndexed<Int>(prices[0]) { i, min, n ->
		prices[i] = n - min
		if (n < min) n else min
   }
   return prices.max() ?: 0
} 
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
func maxProfit(_ prices: [Int]) -> Int {
    guard prices.count > 1 else { return 0 }
    var best = 0, current = 0
    for index in 1..<prices.endIndex {
        current = max(0, current + prices[index] - prices[index-1])
        best = max(best, current)
    }
    return best
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***