# Official Solution

**Link:** [https://leetcode.com/problems/stone-game-iii/solution/](https://leetcode.com/problems/stone-game-iii/solution/)

---

[TOC]

## Solution

--- 

### Overview

>**Note.** For this problem, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this article.

The game described in the problem is a [zero-sum game](https://en.wikipedia.org/wiki/Zero-sum_game). Since the sum of all stones is constant, Alice getting more points means Bob getting less, and vice versa. In zero-sum games with two rational players, both want to minimize their opponent's score since it is equivalent to maximizing their own.

If Alice has a higher score than Bob, she wins. If Bob's score is higher, he wins. If their scores are equal, it is a tie.

The thing that matters to determine the outcome of this game is the **difference** between the player's scores. To know the result, one checks whether the difference is positive, negative, or zero at the end of the game. Each player wants to maximize the difference between their score and their opponent's.

---

### Approach 1: Bottom-Up Dynamic Programming

#### Intuition

Let $n$ denote the number of stones in the row.

For $0 \le i \le n$, define $\text{dp}[i]$ as follows. Consider a game with only the last $n - i$ stones (imagine $\text{stoneValues}[i]$ is the first stone). $\text{dp}[i]$ is the first player's score minus the second player's score at the end of the game.

The base case of this DP is $\text{dp}[n] = 0$. Since there are no stones in the game, thus the players cannot make any moves, and the difference between their scores will be zero.

Consider now $i < n$ when at least one stone is in the game. Let's call the first player X and the second one Y. Then $\text{dp}[i]$ is the difference $\text{score}_\text{X} - \text{score}_\text{Y}$.
*  If the player X takes $1$ stone (with index $i$), X's score for the current move is $\text{stoneValue}[i]$. After that, the next state will be $\text{dp}[i + 1]$, since there is one less stone in the game. However, the players exchange their roles - X becomes Y, and Y becomes X.

> This might be confusing, so consider an example with names. Let's say X = Alice, and Y = Bob, at $\text{dp}[i]$. Alice takes one stone, and now we move to $\text{dp}[i + 1]$. However, now it's Bob's turn. We defined X as the player who takes the first turn, and in this new state $\text{dp}[i + 1]$, Bob is moving first. Therefore, X is now Bob, and Y is now Alice.

* Remember, we defined $\text{dp}[i]$ as $\text{score}_\text{X} - \text{score}_\text{Y}$. Thus, $\text{dp}[i + 1]$ is actually the future value of $\text{score}_\text{Y} - \text{score}_\text{X}$ from the "perspective" of $\text{dp}[i]$, since X and Y have swapped.
* Thus, if player X only takes $1$ stone, then it will result in a score difference of $\text{stoneValue}[i] - \text{dp}[i + 1]$. The minus is to flip $\text{score}_\text{Y} - \text{score}_\text{X}$ into $\text{score}_\text{X} - \text{score}_\text{Y}$.
* Similarly, if X takes two stones (with indices $i$ and $i + 1$), the difference $\text{score}_\text{X} - \text{score}_\text{Y}$ will be $\text{stoneValue}[i] + \text{stoneValue}[i + 1] - \text{dp}[i + 2]$.
* Finally, if X takes three stones, the difference will be $\text{stoneValue}[i] + \text{stoneValue}[i + 1] + \text{stoneValue}[i + 2] - \text{dp}[i + 3]$.

> If you're confused about this logic, think about it like this.
>
> 1. $\text{dp}[i]$ is some number that the first player wants to maximize.
>
> 2. After the first player moves, the second player moves. Therefore the next $\text{dp}$ state will be some number the second player wants to maximize.
>
> 3. Since both players try to maximize these values, we can think of these values as their scores.
> 
> 4. Because one player's gain is the other player's loss, we need to **subtract** the next $\text{dp}$ state. It is because the next $\text{dp}$ state represents the other player's "score", and their gain is our loss.

Since X plays optimally, they will choose the option that maximizes the difference $\text{score}_\text{X} - \text{score}_\text{Y}$. It implies that $\text{dp}[i]$ is the maximum of the above three values. We will try all three.

Having all DP values computed, one can answer who wins using only $\text{dp}[0]$, which is the score difference in the game with all $n$ stones present. Since Alice is the first player, this value being positive means Alice wins.

#### Algorithm

1. Let $n$ be the number of stones.
2. Declare the array $\text{dp}$ of size $n + 1$.
3. Set $\text{dp}[n] = 0$. (The base case of the DP).
4. Iterate $i$ from $n - 1$ to $0$.
	* Set $\text{dp}[i] = \text{stoneValue}[i] - \text{dp}[i + 1]$ (take one stone).
	* If $i + 2 \le n$, update $\text{dp}[i]$ with $\text{stoneValue}[i] + \text{stoneValue}[i + 1] - \text{dp}[i + 2]$ (take two stones) if it's larger.
	* If $i + 3 \le n$, update $\text{dp}[i]$ with $\text{stoneValue}[i] + \text{stoneValue}[i + 1] + \text{stoneValue}[i + 2] - \text{dp}[i + 3]$ (take three stones) if it's larger.
5. If $\text{dp}[0] > 0$, Alice wins.
6. If $\text{dp}[0] < 0$, Bob wins.
7. If $\text{dp}[0] = 0$, it is a tie.

#### Implementation


<iframe src="https://leetcode.com/playground/NqNuspsp/shared" frameBorder="0" width="100%" height="446" name="NqNuspsp"></iframe>


#### Complexity Analysis

* Time complexity: $O(n)$.

There is a `for` loop that performs $n$ iterations. For each state, we try up to three options: to take $1$, $2$, or $3$ stones, so each iteration takes $O(1)$ time.

* Space complexity: $O(n)$.

We store the array `dp[n + 1]` of size $O(n)$.

---

### Approach 2: Top-Down Dynamic Programming (Memoization)

#### Intuition

In this approach, we will calculate the same DP as in the previous one, but the manner of organizing computations will differ.

We will use the recursive function $f(i)$ that returns the value of $\text{dp}[i]$.

The base case of the recursive function is $i = n$ – the same as the base case of the DP: $f(n)$ returns zero.

One can rewrite the DP recurrence relation in terms of $f$ as follows: $f(i)$ returns the maximum of three values: $\text{stoneValue}[i] - f(i + 1)$ (take one stone), $\text{stoneValue}[i] + \text{stoneValue}[i + 1] - f(i + 2)$ (take two stones), $\text{stoneValue}[i] + \text{stoneValue}[i + 1] + \text{stoneValue}[i + 2] - f(i + 3)$ (take three stones).

The answer to the problem is $f(0) = \text{dp}[0]$.

Here is an implementation of this function.

<iframe src="https://leetcode.com/playground/gEJYqMpp/shared" frameBorder="0" width="100%" height="500" name="gEJYqMpp"></iframe>

The issue here is that $f$ might be called (exponentially) many times for the same parameter $i$.

Each time we call, for instance, $f(4)$, we recompute the same result for $i = 4$.

Instead, one may keep the calculated values of $f(i)$ in memory. We will store the same DP array as in the previous approach. In this case, the process will be as follows.

For example, we call $f(4)$ for the first time, calculate the result for $i = 4$, and write this result into $\text{dp}[4]$. When we call $f(4)$ for the second time, we immediately return $\text{dp}[4]$.

In this way, we calculate the value of $f$ for each state (each parameter $i$) only once.

There remains one small technical question: how to know whether we call $f(i)$ for the first time and need to compute the result, or we call it later and can return $\text{dp}[i]$ found earlier? One can handle this by initializing the $\text{dp}$ array with a huge value like $10^9$ that could not possibly occur normally. Then $\text{dp}[i] = 10^9$ will mean that we have not calculated $f(i)$ yet. As soon as we find the result of $f(i)$, we will write it into $\text{dp}[i]$, and this value will not be $10^9$ anymore.

#### Algorithm

The function $f$ takes a parameter $i$.
1. If $i = n$, return $0$.
2. If $\text{dp}[i]$ was computed previously, return $\text{dp}[i]$.
3. Set $\text{dp}[i] = \text{stoneValue}[i] - f(i + 1)$ (take one stone).
4. If $i + 2 \le n$, update $\text{dp}[i]$ with $\text{stoneValue}[i] + \text{stoneValue}[i + 1] - f(i + 2)$ (take two stones).
5. If $i + 3 \le n$, update $\text{dp}[i]$ with $\text{stoneValue}[i] + \text{stoneValue}[i + 1] + \text{stoneValue}[i + 2] - f(i + 3)$ (take three stones).
6. Return $\text{dp}[i]$.

One needs to call $f(0)$.
* If $f(0) > 0$, Alice wins.
* If $f(0) < 0$, Bob wins.
* If $f(0) = 0$, it is a tie.

#### Implementation

<iframe src="https://leetcode.com/playground/Rf5V5ZYr/shared" frameBorder="0" width="100%" height="500" name="Rf5V5ZYr"></iframe>


#### Complexity Analysis

* Time complexity: $O(n)$.

Even though we changed the order of calculating DP, the time complexity is the same as in the previous approach: for each $i$, we compute $\text{dp}[i]$ in $O(1)$. Since we store the results in memory, we will calculate each $\text{dp}[i]$ only once.

* Space complexity: $O(n)$.

It is the same as in the first approach.


---

### Approach 3: Bottom-Up Dynamic Programming, Space Complexity Optimized

#### Intuition

To solve the problem with $O(1)$ space complexity, we can use the observation that we only ever need the values $\text{dp}[i+1]$, $\text{dp}[i+2]$, and $\text{dp}[i+3]$ to calculate $\text{dp}[i]$. Therefore, we only need to keep track of the current and the next three values of $\text{dp}$.

Now, the size of $\text{dp}$ will be $4$ instead of $n + 1$. Whenever we want to access $\text{dp}[i]$, we will use $\text{dp}[i \% 4]$ instead.

When counting $\text{dp}[i \% 4]$, we will use the values of $\text{dp}[(i + 1) \% 4]$, $\text{dp}[(i + 2) \% 4]$, and $\text{dp}[(i + 3) \% 4]$. All four indices in the array are distinct.

Note that an array of size $3$ would be insufficient, since $\text{dp}[i \% 3]$ would "collide" with $\text{dp}[(i + 3) \% 3]$.

#### Algorithm

It is the same as in Approach 1, with the only difference being the size of $\text{dp}$ and that we take all indices in the array $\text{dp}$ modulo $4$.

1. Let $n$ be the number of stones.
2. Declare the array $\text{dp}$ of size $4$.
3. Set $\text{dp}[n \% 4] = 0$. (The base case of the DP).
4. Iterate $i$ from $n - 1$ to $0$.
	* Set $\text{dp}[i \% 4] = \text{stoneValue}[i] - \text{dp}[(i + 1) \% 4]$ (take one stone).
	* If $i + 2 \le n$, update $\text{dp}[i]$ with $\text{stoneValue}[i] + \text{stoneValue}[i + 1] - \text{dp}[(i + 2) \% 4]$ (take two stones) if it's larger.
	* If $i + 3 \le n$, update $\text{dp}[i]$ with $\text{stoneValue}[i] + \text{stoneValue}[i + 1] + \text{stoneValue}[i + 2] - \text{dp}[(i + 3) \% 4]$ (take three stones) if it's larger.
5. If $\text{dp}[0] > 0$, Alice wins.
6. If $\text{dp}[0] < 0$, Bob wins.
7. If $\text{dp}[0] = 0$, it is a tie.

#### Implementation

<iframe src="https://leetcode.com/playground/J6A484PW/shared" frameBorder="0" width="100%" height="480" name="J6A484PW"></iframe>


#### Complexity Analysis

* Time complexity: $O(n)$.

It is the same as in Approach 1.

* Space complexity: $O(1)$.

We have eliminated the need for an entire array to store the DP values. Instead, we only keep track of the current and next three values. Therefore, the space complexity of this solution is $O(1)$.