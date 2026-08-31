# Official Solution

**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solution/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solution/)

---

[TOC]

## Solution

---
### Overview
First of all, as one should know, this is one of the problems from the series of [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) problem. One could start from the first problem in the series and progress one by one from easy to hard.

If there is ever a God of the stock market, who knows the price of stock at any moment, then the strategies to gain the maximum profits from the stock market is actually surprisingly intuitive, which also depends on the number of transactions that one can make.

>If one can only make one transaction (_i.e._ buy and sell once), then better to make this one _bet_ count. The best strategy would be to _buy_ at the **_lowest_** price and then _sell_ at the **_highest_** price. To put it simple, _buy low sell high._

![example of price sequence](../Figures/123/123_example.png)

Let us look at a concrete example as shown in the above graph, given a list of prices, the task becomes to find maximal _difference_ between a **_latter_** stock price and an **_earlier_** one, which would be the maximal profits that we could gain, if only one transaction is allowed.

In the above example, the best moment to buy the stock would be the timestamp `t1`, and the best moment to sell the stock would be the timestamp `t9`.

The above strategy is actually the solution to the first problem of the series, _i.e._ [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/).

>On the other hand, if one can make as many transactions as one would like, then in order to gain the maximal profits, one must _capture_ each **augmentation** and _avoid_ each **plunging** of stock price.

Specifically, given a list of prices, for any two adjacent time points with stock prices `p1` and `p2`, the above best strategies can be broke down into the following two cases:

- If later the price augments, _i.e._ `p2 > p1`, then a good trader should buy at `p1` and then sell at `p2`, seizing this moment to make profits.
<br/>

- If later the price stays the same or even plunges, _i.e._ `p2 <= p1`, then a good trader should just hold the money in the pocket, neither to buy nor sell any stock.

With the above strategies, as one can see, we would _perfectly_ capitalize at each right moment, meanwhile avoiding any loss. At the end, the accumulative profits that we gain over the time would reach the maximum.

![example of price sequence](../Figures/123/123_example.png)

With the same example above, we would buy at the moment of `t1` and sell it at the moment of `t2`. Similarly, we would also buy at the moment of `t2` and sell the moment of `t3`. As one might notice, the profits we gain from these two transactions are equivalent to the single transaction of buying at the moment of `t1` and selling at the moment of `t3`. 

The above strategy would be the solution for the second problem of series, _i.e._ [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) where there is no limit on the number of transactions.
<br/>
<br/>

---
### Approach 1: Bidirectional Dynamic Programming

**Intuition**

The only difference between this problem and the previous two problems is that in this problem we are allowed to make **at most two** transactions.

Additionally, there is a constraint on the order of transactions stated in the problem description as follows:

>You may not engage in multiple transactions at the same time, (_i.e._ you must sell the stock before you buy again).

We could interpret this constraint as that there would be **no overlapping** in the sequence of transactions. 

![order of transaction actions](../Figures/123/123_division.png)

In other words, the two transactions that we should make would situate in two different subsequences of the stock prices, without any overlapping, which we illustrate in the above graph.

>That being said, we can solve the problem in a **divide-and-conquer** manner, where we divide the original sequence of prices into two subsequences and then we calculate the maximum profit that we could gain from making a single transaction in each subsequence.

The total profits would be the sum of profits from each subsequence. If we enumerate all possible divisions (or we could consider them as combinations of subsequences), we could find the maximum total profits among them, which is also the desired result of the problem.

![visual of partitions on sequence](../Figures/123/123_partition.png)

So we divide this problem into two subproblems, and each subproblem is actually of the same problem of [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) as we discussed in the overview section.

**Algorithm**

A naive implementation of the above idea would be to divide the sequences into two and then enumerate each of the subsequences, though this is definitely not the most optimized solution.

For a sequence of length $$N$$, we would have $$N$$ possible divisions (including no division), each of the elements would be visited once in each division. As a result, the overall time complexity of this naive implementation would be $$\mathcal{O}(N^2)$$.

We could do better than the naive $$\mathcal{O}(N^2)$$ implementation. Regarding the algorithms of divide-and-conquer,
one common technique that we can apply in order to optimize the time complexity is called **dynamic programming** (DP) where we trade less repetitive calculation with some extra space.

In dynamic programming algorithms, normally we create an array of one or two dimensions to keep the intermediate optimal results. In this problem though, we would use two arrays, with one array keeping the results of sequence from left to right and the other array keeping the results of sequence from right to left. For the sake of name, we could call it **_bidirectional dynamic programming_**.

![visualization of dp arrays](../Figures/123/123_dp.png)

First, we denote a sequence of prices as `Prices[i]`, with index starting from `0` to `N-1`. Then we define two arrays, namely `left_profits[i]` and `right_profits[i]`.

- As suggested by the name, each element in the `left_profits[i]` array would hold the maximum profits that one can gain from doing one single transaction on the left subsequence of prices from the index zero to `i`, (_i.e._ `Prices[0], Prices[1], ... Prices[i]`).
For instance, for the subsequences of `[7, 1, 5]`, the corresponding `left_profits[2]` would be 4, which is to buy the price of 1 and sell it at the price of 5.
<br/>

- And each element in the `right_profits[i]` array would hold the maximum profits that one can gain from doing one single transaction on the right subsequence of the prices from the index `i` up to `N-1`, (_i.e._ `Prices[i], Prices[i+1], ... Prices[N-1]`).
For example, for the right subsequence of `[3, 6, 4]`, the corresponding `right_profits[3]` would be 3, which is to buy at the price of 3 and then sell it at the price of 6.

Now, if we divide the sequence of prices around the element at the index `i`, into two subsequences, with left subsequences as `Prices[0], Prices[1], ... Prices[i]` and the right subsequence as `Prices[i+1], ... Prices[N-1]`,
then the total maximum profits that we obtain from this division (denoted as `max_profits[i]`) can be expressed as follows:
$$
    \text{max\_profits[i]} = \text{left\_profits[i]} + \text{right\_profits[i+1]}
$$

>Then if we exhaust all possible divisions, _i.e._ we place the two transactions in all possible combinations of subsequences, we would then obtain the global maximum profits that we could gain from this sequence of stock prices, which can be expressed as follows:
$$
    \max_{i=[0, N)}{(\text{max\_profits[i]})}
$$

We demonstrate how the DP arrays are calculated in the following animation.

!?!../Documents/123_LIS.json:1000,418!?!

Following the above idea, Here are some sample implementations.

<iframe src="https://leetcode.com/playground/c3gfKKQR/shared" frameBorder="0" width="100%" height="500" name="c3gfKKQR"></iframe>

In the above implementations, we refined the code a bit to make it a bit more concise and hopefully more intuitive. Here are some tweaks that we applied.

- Rather than constructing the two DP arrays in two separate loops, we do the calculation in a single loop (two birds with one stone).
<br>

- We pad the `right_profits[i]` array with an additional zero, which indicates the maximum profits that we can gain from an empty right subsequence, so that we can compare the result of having only one transaction (_i.e._ `left_profits[N-1]`) with the profits gained from doing two transactions. 

By the way, one can try the above algorithm on another problem called [Sliding Window Maximum](https://leetcode.com/articles/sliding-window-maximum/).


**Complexity**

- Time Complexity: $$\mathcal{O}(N)$$ where $$N$$ is the length of the input sequence, since we have two iterations of length $$N$$. 
<br/>

- Space Complexity: $$\mathcal{O}(N)$$ for the two arrays that we keep in the algorithm.
<br/>
<br/>

---
### Approach 2: One-pass Simulation

**Intuition**

Just when we think that the space complexity of $$\mathcal{O}(N)$$ is the best we can get for this problem, many users in the Discussion forum proposed a more optimized solution that reduced the space complexity to $$O(1)$$, (just to name a few of them [@weijiac](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/39611/Is-it-Best-Solution-with-O(n)-O(1).), [@shetty4l](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/149383/Easy-DP-solution-using-state-machine-O(n)-time-complexity-O(1)-space-complexity)).
The idea is quite brilliant, and requires only a single iteration without the additional DP arrays.

The intuition is that we can consider the problem as a game, and we as agent could make at most two transactions in order to gain the maximum points (profits) from the game.

The two transactions be decomposed into 4 actions: _"buy of transaction #1"_, _"sell of transaction #1"_, _"buy of transaction #2"_ and _"sell of transaction #2"_.

>To solve the game, we simply run a simulation along the sequence of prices, at each time step, we calculate the potential outcomes for each of our actions. At the end of the simulation, the outcome of the final action _"sell of transaction #2"_ would be the desired output of the problem.

![game simulation](../Figures/123/123_game.png)

**Algorithm**

Overall, we run an iteration over the sequence of prices.

Over the iteration, we calculate 4 variables which correspond to the costs or the profits of each action respectively, as follows:

- `t1_cost`: the _minimal_ cost of buying the stock in transaction #1. The minimal cost to acquire a stock would be the minimal price value that we have seen so far at each step.
<br/>

- `t1_profit`: the _maximal_ profit of selling the stock in transaction #1. Actually, at the end of the iteration, this value would be the answer for the first problem in the series, _i.e._ [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/).
<br/>

- `t2_cost`: the _minimal_ cost of buying the stock in transaction #2, while taking into account the profit gained from the previous transaction #1. One can consider this as the cost of reinvestment. Similar with `t1_cost`, we try to find the lowest price so far, which in addition would be partially compensated by the profits gained from the first transaction.
<br>

- `t2_profit`: the _maximal_ profit of selling the stock in transaction #2. With the help of `t2_cost` as we prepared so far, we would find out the maximal profits with at most two transactions at each step.

<iframe src="https://leetcode.com/playground/NKR7mkJp/shared" frameBorder="0" width="100%" height="395" name="NKR7mkJp"></iframe>


**Complexity**

- Time Complexity: $$\mathcal{O}(N)$$, where $$N$$ is the length of the input sequence.
<br/>

- Space Complexity: $$\mathcal{O}(1)$$, only constant memory is required, which is invariant from the input sequence.