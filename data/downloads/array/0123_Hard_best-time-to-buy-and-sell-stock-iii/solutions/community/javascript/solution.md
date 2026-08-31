# Complete explanation of the Buy and Sell Stock problems using DP.

**Author:** Puss0o0
**Votes:** 83
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/1326824/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/1326824/)

---

I will be going over what I have learned while trying to solve these problems. I was initially using `Kadane's algorithm` to do these problems. Infact, completed the first, second, and third **Buy and Sell Stock problems** using Kadane's but the fourth problem gave me a concussion so, I embarked on a journey to learn a framework using which I can solve the complete set of these problems and handle any tweaks that an interviewer might throw at me in the future. I visited a number of resources, watched a number of videos and here is the culmination of everything I have picked so far.

These are all the problems we have in the Buy and Sell Stock set.
1. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
2. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
3. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
4. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
5. [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
6. [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

First, we will see how we can come up with a framework which we can apply for all the above problems. A framework which is flexible enough to accomodate any tweaks an interviewer might throw at us in the future. *A framework which exhausts all the possible outcomes and then come up with the best solution*. A recursive solution would be exhaustive but we will use "states" for exhaustion in these problems. **We will consider each day and see how many possible "states" do we have for each day and then find "choices" corresponding to each state.**

**Let's talk about the constraints first.**
1. `Sell` must be after `Buy`.
2. `Buy` must be after `Sell`.
3.  Limit on the number of transaction(k), `k>0`.

**For each day we have three choices.**
1. `Buy`.
2. `Sell`.
3. `Rest`. Which further has two states.
	 a. `Rest after buy`. Here we are holding the stock. We are not selling or buying. We are just resting.
	 b. `Rest after selling`. Here we are not holding any stocks. We are not selling or buying. We are just resting.

**Let's talk about the states now.**
1. The day we are on i.e `i`.
2. The maximum number of allowed transactions i.e `k`.
3. The holding state i.e the resting state we talked about before. This is either `1(holding stock)` or `0(not holding stock)`.

Now, we can put all the combinations of these states in a 3D matrix like so :

```
for 0 <= i <= n:             // n is the number of days
	for i <= k <= k:        // k is the maximum number of transactions
		for s in {1,0}:    // s is the rest state
				dp[i][k][s] = max(buy,sell,rest)
```


***For every problem we have to find the `dp[n-1][k][0]`, which is the maximum profit for the maximum number of transactions allowed on the last day.***

One important observation. Why didn't we say **`dp[n-1][k][1]`** instead of saying **`dp[n-1][k][0]`**? because if the resting state `S` is 1, it means we are still holding a stock and the profit cannot be maximum until and unless we are done selling all the stocks we have.




Now, let's think about what choices do we have for each state and how we can update the "state". Let's write our state transition equations. They will be something like this.

`dp[i][k][0] = Max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]) // prices is the array of stocks`

***This equation corresponds to when you are not holding a stock. You are not holding a stock today because perhaps you didn't have any stocks yesterday which we could sell today or maybe you have stocks that you want to sell today, so at the end of the day we will not be holding any stocks.***

`dp[i][k][1] = Max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])`

***This equation corresponds to when you are holding a stock. You are holding a stock today because perhaps you had stocks yesterday or maybe you want to buy stocks today, so at the end of the day we will be holding stocks.***

***This explanation should be clear. If you buy, you need to subtract prices[i] from the profit, and if you sell, you need to increase prices[i] to the profit.***


Now, let's talk about the base cases.

1. `dp[-1][k][0]  = 0`     **// Because the day starts with 0 and here i is -1**
2. `dp[-1][k][1] = -Infinity`  **// Because we can't hold any stocks before the first day**
3. `dp[i][0][0] = 0`  **// Because k = 0. There won't be any transactions so the profit will be zero** 
4. `dp[i][0][1] = -Infinity`  **// Because k = 0. We can't hold any stocks without starting a transaction** 


So, to summarize the above base conditions and state transition equations

```
base case\uFF1A
dp[-1][k][0] = dp[i][0][0] = 0
dp[-1][k][1] = dp[i][0][1] = -infinity

state transition equation\uFF1A
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
```


Now, let's begin with the problems.

1. ***When k = 1***

We will put k = 1 directly in the state transition equations and see for ourselves.

```
dp[i][1][0] = Max(dp[i-1][1][0], dp[i-1][1][1] + prices[i];
dp[i][1][1] = Max(dp[i-1][1][1], dp[i-1][0][0] - prices[i];
	        = Max(dp[i-1][1][1], 0 - prices[i];  // from the above base case when k is 0
```

We can also see that the presence of k when it is 1 does not change the state in any way so, we can simply ignore it.

```
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], -prices[i])
```

We can write the solution for it like so:

```
var maxProfit = function(prices){
  let n = prices.length;
  let dp = [];
  
  for(let i=0; i<n; i++){
    dp[i] = [];
    if(i-1 === -1){
      dp[i][0] = 0; 
        // Explanation\uFF1A
        //   dp[i][0] 
        // = max(dp[-1][0], dp[-1][1] + prices[i])
        // = max(0, -infinity + prices[i]) = 0
      dp[i][1] = -prices[i];
        // Explanation\uFF1A
        //   dp[i][1] 
        // = max(dp[-1][1], dp[-1][0] - prices[i])
        // = max(-infinity, 0 - prices[i]) 
        // = -prices[i]
      continue;
    }
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1],  -prices[i])
  }
  return dp[n-1][0];
}
```

***We can reduce the Space complexity to 0(1) by not constructing the DP matrix as the new state is only related to an adjacent state. So, instead of the DP matrix we can store the states in a single variable. One variable for not holding and one for holding.***

Code for that would look something like :

```
var maxProfit = function(prices){
  let d_i10 = 0;
  let d_i11 = -Infinity;
  
  for(let i=0; i<prices.length;i++){
    d_i10 = Math.max(d_i10, d_i11 + prices[i]);
    d_i11 = Math.max(d_i11, 0 - prices[i]);
  }
  return d_i10;
}
```

2. ***When k = + Infinity***

When k is Infinity, k and k-1 are practically the same. We will use that in our state transition equations.


```
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
            = max(dp[i-1][k][1], dp[i-1][k][0] - prices[i]) // k and k-1 are the same
```

Since, the presence of k is not really impacting the states, we will ignore it.

```
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
```

And the solution would look like this : 

```
var maxProfit = function(prices){
  let d_ik0 = 0;
  let d_ik1 = -Infinity;
  
  for(let i=0;i<prices.length;i++){
    d_ik0 = Math.max(d_ik0 , d_ik1 + prices[i]);
    d_ik1 = Math.max(d_ik1, d_ik0 - prices[i]);
  }
  return d_ik0;
}
```


3. ***When k = 2***

Now, we need to exhaust the value of k as well. Before this we were ignoring k because it was not impacting our states. We need to hold the states for the second transaction as well along with the first transaction. 

```
dp[i][2][0] = max(dp[i-1][2][0], dp[i-1][2][1] + prices[i])
dp[i][2][1] = max(dp[i-1][2][1], dp[i-1][1][0] - prices[i])
dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
dp[i][1][1] = max(dp[i-1][1][1], -prices[i])
```

The solution would look like this :

```
var maxProfit = function(prices){
  let d_i20 = 0;
  let d_i21 = -Infinity; // base case for second transaction
  let d_i10 = 0;
  let d_i11 = -Infinity; //base case for second transaction
  
  for(let i=0; i<prices.length; i++){
    d_i10 = Math.max(d_i10, d_i11 + prices[i]);
    d_i11 = Math.max(d_i11,  0 - prices[i]);
    d_i20 = Math.max(d_i20, d_i21 + prices[i]);
    d_i21 = Math.max(d_i21, d_i10 - prices[i]);
   
  }
  return d_i20
}
```


4. ***When k = + interger***

**Important observation** : A transaction consists of buying and selling, which takes atleast 2 days. Therefore, the effective limit k should not exceed n/2( n is the number of days). If it exceeds, there is no contraint effect which makes k equivalent to +Infinity.

This is the only problem from this set which is a little difficult.

Solution would look like this 
```
var maxProfit = function(k, prices) {
    if(prices.length == 0) return 0;
    
    // When k becomes so much larger than the number of prices we can make transactions whenever.
    if(k > (prices.length / 2) ){
      let d_ik0 = 0;
      let d_ik1 =  -Infinity;
      for(let i =0; i<prices.length;i++){
        d_ik0 = Math.max(d_ik0, d_ik1 + prices[i]);
        d_ik1 = Math.max(d_ik1, d_ik0 - prices[i]);
      }
      return d_ik0
    }
    else{
        let dp = [];
        let size = prices.length;
        for(let i=0; i<size; i++){
          dp[i] = [];
          for(let j=0; j<=k; j++){
            dp[i][j] = []
            if(i-1 === -1 || j-1 === -1){
              dp[i][j][0] = 0;
              dp[i][j][1] = -prices[i];
              continue;
            }
            dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i])
          }
        }
      return dp[size-1][k][0]
    }
};
```

5. ***When k = +Infinity with cooldown***

We must wait one day after selling a stock to continue trading. We can write the state transition equations as :

```
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-2][0] - prices[i])
Explanation: When we choose to buy on day i, the state of i-2 should be transferred instead of i-1
```

Code would look like 

```
var maxProfit = function(prices){
  let d_ik0 = 0;
  let d_ik1 = -Infinity;
  let d_ik0_pre = 0;
  
  for(let i=0;i<prices.length;i++){
    let d_ik0_old = d_ik0; 
    d_ik0 = Math.max(d_ik0 , d_ik1 + prices[i]);
    d_ik1 = Math.max(d_ik1, d_ik0_pre - prices[i]);
    d_ik0_pre = d_ik0_old;
  }
  return d_ik0;
}
```



6. ***When k = +Infinity with transaction fee***

Since now we need to pay some fee for each transaction made, the profit after buying or selling the stock on the i-th day should be subtracted by this amount, therefore the new recurrence relations will be either

```
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k][0] - prices[i] - fee)

or

dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i] - fee)
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k][0] - prices[i])
```

Code can we written as  :

```
var maxProfit = function(prices, fee){
  let d_ik0 = 0;
  let d_ik1 = -Infinity;
  
  for(let i=0;i<prices.length;i++){
    d_ik0 = Math.max(d_ik0 , d_ik1 + prices[i]);
    d_ik1 = Math.max(d_ik1, d_ik0 - prices[i] - fee);
  }
  return d_ik0;
}
```


I hope you enjoyed this post.