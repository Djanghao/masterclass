# Official Solution

**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solution/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solution/)

---

[TOC]

## Solution

---

>**Note.** For this problem, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this article.

### Approach 1: Bottom-up Dynamic Programming

#### Intuition

Let `dp[i][coins]` be the maximum total value of coins you can have in your wallet if you choose at most `coins` coins from the leftmost `i` piles optimally.

>For example, `dp[4][7]` is the maximum total value when one takes at most seven coins from the leftmost four piles. Since all coins have positive denomination, if the leftmost four piles contain at least seven coins in total, it is optimal to take exactly seven coins. In other words, it is never optimal to take less coins than we are allowed.

The base case of this DP is `i = 0` – no piles are considered, so one didn't take any coins from any piles. Since the total value of $0$ coins is zero, `dp[0][coins] = 0`.

Now consider `i > 0` when one takes at most `coins` coins from the leftmost `i` piles (numbered from `0` to `i - 1`). We want to know the optimal answer for this DP state.

Since we use dynamic programming, we will reduce the problem with `i` piles to the smaller subproblem. As it is common in DP, we solve the problem of size `i` using the result for the problem of size `i - 1`.

* One may not take any coins from the (`i - 1`)-th pile and take at most `coins` coins from the leftmost `i - 1` piles.
* One may take one coin from the (`i - 1`)-th pile, and at most `coins - 1` coins from the leftmost `i - 1` piles.
* One may take two coins from the (`i - 1`)-th pile, and at most `coins - 2` coins from the leftmost `i - 1` piles.
* ...
* One may take `currentCoins` coins from the (`i - 1`)-th pile, and at most `coins - currentCoins` coins from the leftmost `i - 1` piles.
* ...

When we choose `currentCoins` coins from the (`i - 1`)-th pile, we must optimally choose at most `coins - currentCoins` coins from the leftmost `i - 1` piles (numbered from `0` to `i - 2`). It may be easier to think about it in reverse: when we are at pile `i - 1` with `coins` remaining space in our wallet, every coin we take reduces our space by 1. We need to determine the optimal number of coins to take before moving to the next pile.

Let `currentSum` be the sum of the taken coins from the (`i - 1`)-th pile (their quantity is `currentCoins`).

When the value of `currentCoins` is optimal, `dp[i][coins] = dp[i - 1][coins - currentCoins] + currentSum`, because `dp[i - 1][coins - currentCoins]` gives the optimal answer to the smaller subproblem of size `i - 1`.

There are two constraints for `currentCoins`: first, one cannot take more coins from the (`i - 1`)-th pile than the amount of coins the pile has (`piles[i - 1].length`); and second, we cannot take more coins than we are allowed, so `currentCoins` must not exceed `coins`.

Combining these two constraints, one concludes that all values of `currentCoins` between `0` and `min(piles[i - 1].length, coins)` inclusively are feasible. We try all these values to find the optimal one.

Finally, we can formulate the DP transitions: `dp[i][coins]` is the maximum `dp[i - 1][coins - currentCoins] + currentSum` over `currentCoins` between `0` and `min(piles[i - 1].length, coins)` inclusively.

Since it is never optimal to take less than `k` coins if it is allowed to take `k`, the answer to the problem is `dp[n][k]` – one takes at most `k` coins (in the optimal solution we will take **exactly** `k`) from `n` piles.

#### Algorithm

1. Declare the DP table and initialize it with zeros.
2. Iterate `i` from `1` to `n`.
	* Iterate `coins` from `0` to `k`.
		* Initialize `currentSum = 0`.
		* Iterate `currentCoins` from `0` to `min(piles[i - 1].length, coins)`.
			* If `currentCoins > 0`, increase `currentSum` by `piles[i - 1][currentCoins - 1]`.
			* Update the value of `dp[i][coins]` with `dp[i - 1][coins - currentCoins] + currentSum`.
3. Return `dp[n][k]`.

#### Implementation


<iframe src="https://leetcode.com/playground/NodY6mL3/shared" frameBorder="0" width="100%" height="378" name="NodY6mL3"></iframe>


#### Complexity Analysis

Let $s$ be the total number of coins in all piles. Formally, $s = \sum_{i=0}^{n - 1} \text{len}(\text{piles}[i])$.

* Time complexity: $O(k \cdot s)$.

We have three for-loops: `for i`, `for coins`, and `for currentCoins`. 

For specified `i` and `coins`, the number of iterations of the `for currentCoins` loop is $\min (\text{len}(\text{piles}[i - 1]), \text{coins}) + 1 = O(\text{len}(\text{piles}[i - 1]))$.

To find the total number of iterations, we need to calculate the sum of this value over all possible values of `i` and `coins`: $\sum_{i=1}^n \sum_{\text{coins}=0}^k O(\text{len}(\text{piles}[i - 1])) = \sum_{i=1}^n (k + 1) \cdot O(\text{len}(\text{piles}[i - 1])) = (k + 1) \cdot \sum_{i=1}^n O(\text{len}(\text{piles}[i - 1])) = (k + 1) \cdot O(s) = O(k \cdot s)$.

Since each iteration takes $O(1)$ time, the total time complexity is the total number of iterations.

* Space complexity: $O(n \cdot k)$.

We store the DP table of size `[n + 1][k + 1]`.

---

### Approach 2: Top-Down Dynamic Programming (Memoization)

#### Intuition

In this approach we will calculate the same DP table using the same recurrence relation as in the previous one, but the manner of organizing computations will be different.

We will use the recursive function `f(i, coins)` that returns the value of `dp[i][coins]`.

The base case of the recursive function is `i = 0`: `f(0, coins)` returns zero.

One can rewrite the DP recurrence relation as follows in terms of `f`: `f(i, coins)` returns the maximum `f(i - 1, coins - currentCoins) + currentSum` over `currentCoins` between `0` and `min(piles[i - 1].length, coins)` inclusively. This is exactly the same relation as in the first approach.

The answer to the problem is `f(n, k) = dp[n][k]`.

Here is an implementation of this function.

<iframe src="https://leetcode.com/playground/CHRPbiQu/shared" frameBorder="0" width="100%" height="395" name="CHRPbiQu"></iframe>

The issue here is that `f` might be called (exponentially) many times for the same parameters `(i, coins)`.

For example, we call `f(4, 7)` for the first time and calculate the result for `i = 4`, `coins = 7`. When we call `f(4, 7)` for the second time, we again compute the same result.

Instead, one may store the calculated values of `f(i, coins)` in memory. We will store the same DP table as in the previous approach. In this case, the process will be as follows.

For example, we call `f(4, 7)` for the first time, calculate the result for `i = 4`, `coins = 7` and write this result into `dp[4][7]`. When we call `f(4, 7)` for the second time, we don't compute the same result again, but return the value of `dp[4][7]`.

This is how we achieve calculating the value of `f` for each state (each pair of parameters `(i, coins)`) only once.

There remains one small technical question: how to know whether we call `f(i, coins)` for the first time and need to compute the result, or we call it later and can return `dp[i][coins]` which was computed earlier? One can handle this by initializing the `dp` matrix with `-1`. Then `dp[i][coins] = -1` will mean that `f(i, coins)` was not calculated yet. As soon as we find the result `f(i, coins)`, we will write it in into `dp[i][coins]` and this value will not be `-1` anymore.

#### Algorithm

The function `f` takes two parameters: `i` and `coins`.
1. If `i = 0`, return $0$.
2. If `dp[i][coins] != -1` (which means that we found this value earlier), return `dp[i][coins]`.
3. Initialize `currentSum = 0`.
4. Iterate `currentCoins` from `0` to `min(piles[i - 1].length, coins)`.
	* If `currentCoins > 0`, increase `currentSum` by `piles[i - 1][currentCoins - 1]`.
	* Update the value of `dp[i][coins]` with `f(i - 1, coins - currentCoins) + currentSum`.
5. Return `dp[i][coins]`.

One needs to return `f(n, k)` from the main function.

#### Implementation

<iframe src="https://leetcode.com/playground/PNqmV4kZ/shared" frameBorder="0" width="100%" height="500" name="PNqmV4kZ"></iframe>


#### Complexity Analysis

Let $s$ be the total number of coins in all piles. Formally, $s = \sum_{i=0}^{n - 1} \text{len}(\text{piles}[i])$.

* Time complexity: $O(k \cdot s)$.

Even though we changed the order in which we calculate DP, the time complexity is the same as in the previous approach: for each pair `(i, coins)` we calculate `dp[i][coins]` in $O(\text{len}(\text{piles}[i - 1]))$. Since we store the results in the memory, we will compute `dp[i][coins]` only once.

* Space complexity: $O(n \cdot k)$.

We store the DP table of size `[n + 1][k + 1]`.