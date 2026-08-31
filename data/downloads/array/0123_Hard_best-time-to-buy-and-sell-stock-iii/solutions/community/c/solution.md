# [C++] Worst to Best Solution Explained (for dummies like me)

**Author:** anandthegreat
**Votes:** 407
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/796990/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/796990/)

---

**Approach 1** (Recursion+Memo): [199/200 CASES PASSED, TLE] 
The most intuitive approach is to explore all choices, if we haven't bought a stock yet, we either buy it or skip it. Similarly we have two choices for selling also. We also keep a track of number of transactions completed so that we stop after 2 transactions. This way we end up exploring all possibilties and return the optimal combination. Here's the code:
```
    unordered_map<string, int> memo;
    int profit(vector<int> prices, int i, int isBuy, int k){
        if(i == prices.size() || k == 2)     // return if two transactions are completed
            return 0;
        string key = to_string(i) + "-" + to_string(isBuy) + "-" + to_string(k);
        if(memo.find(key)!=memo.end())
            return memo[key];
        int a,b;
        if(isBuy){                           // if isBuy is 1, we have a choice to purchase the stock
            a = profit(prices, i + 1, 1, k);                       // do not buy
            b = profit(prices, i + 1, 0, k) - prices[i];           // buy and add the cost 
        }  
        else{                                // if isBuy is 0, we can only sell as we have already bought
            a = profit(prices, i + 1, 0, k);                       // do not sell
            b = profit(prices, i + 1, 1, k + 1) + prices[i];       // sell and add the profit
        }   
        return memo[key] = max(a, b);        // best choice among trading and skipping
    }
    
    int maxProfit(vector<int>& prices) {
        return profit(prices, 0, 1, 0);
    }
```
---
**Approach 2** (Setting break points, O(N) TIME and SPACE): [ACCEPTED]
The idea here is to set a break point before which we have completed the first transaction and will complete the second transaction in the remaining days. There are N -1 such break points. Instead of explicitly setting break points and computing the profit for the left part and right part, we precompute the profit for every break point. Starting from the left, for every element we check the least price in the array to its left and check if the selling at current price can make us a larger profit than skipping it. Similarly, starting from the right, for every element, we check the array to the right of it and find an element larger to the current; and check if buying at current price makes us a larger profit than skipping it. This will be clear with the example mentioned below:
```
int maxProfit(vector<int>& prices) {
        if(!prices.size())
            return 0;
        int n = prices.size();
        int left[n], right[n];
        int leftmin = prices[0], rightmax = prices[n-1], maxprofit = 0;
        left[0] = 0; right[n - 1] = 0;                                     // because we can't make any profit with just 1 element
        int i,j;
        for(i = 1, j = n-2; i < n, j >= 0; i++, j--){
            leftmin  = min(leftmin, prices[i]);                            // find the minimum price till now
            left[i]  = max(left[i - 1], prices[i] - leftmin);              // max of selling today or skipping (previous max profit)
            rightmax = max(rightmax, prices[j]);                           // find the maximum price to the right
            right[j] = max(right[j + 1], rightmax - prices[j]);            // max of buying today or skipping
        }
        for(int i = 0; i < n; i++){
            maxprofit = max(maxprofit, left[i] + right[i]);
        }
        return maxprofit;
    }
    
    // EG: PRICES = [3,3,5,0,0,3,1,4]
    //     LEFT   = [0,0,2,2,2,2,2,3]
    //     RIGHT  = [2,2,4,4,4,1,0,0]
    //     SUM    = [2,2,6,6,6,3,2,3] 
	//     MAX PROFIT = 6
```
---

**Approach 3** (O(N) time O(1) space) [ACCEPTED]
Suppose you make some profit **p1** by doing your first transaction in the stock market. Now you are excited to purchase another stock to earn more profit. Suppose the price of the second stock you aim to buy is **x**. Now, for you, the net effective price that you are spending from your pocket for this stock will be **x-p1**, because you already have **p1** bucks in your hand. Now, if you sell the second stock at price **y** your net profit **p2** will be **p2 = y - (x-p1)**. You have to do nothing but maximize this profit **p2**. Here's the code:
```
int maxProfit(vector<int>& prices) {
        if(!prices.size())
            return 0;
        int buy1    = INT_MAX;
        int profit1 = INT_MIN;
        int buy2    = INT_MAX;
        int profit2 = INT_MIN;
        for(int i = 0; i < prices.size(); i++){
            buy1    = min(buy1, prices[i]);
            profit1 = max(profit1, prices[i] - buy1);
            buy2    = min(buy2, prices[i] - profit1);
            profit2 = max(profit2, prices[i] - buy2);
        }
        return profit2;
    }
```
Hope it helps! Please upvote if you understood.
