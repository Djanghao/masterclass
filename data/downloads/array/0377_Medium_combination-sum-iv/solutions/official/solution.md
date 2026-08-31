# Official Solution

**Link:** [https://leetcode.com/problems/combination-sum-iv/solution/](https://leetcode.com/problems/combination-sum-iv/solution/)

---

[TOC]

## Solution

---
### Overview

At the first glance, the problem seems to be yet another _combination-sum_ problem, as we have seen several examples before, _e.g._ [Combination Sum](https://leetcode.com/problems/combination-sum/), [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/), and [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/).

However, the nature of this problem is very different from the previous combination-sum problems.
The essential algorithm to solve the previous combination-sum problems is called [_Backtracking_](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/).
While for this problem, we should apply the [_Dynamic Programming_](https://en.wikipedia.org/wiki/Dynamic_programming) algorithm, as one will discover later.

>As a matter of fact, this problem can be considered as a variant of another problem called [Coin Changes II](https://leetcode.com/problems/coin-change-2/).

The prolem shares so many similarities with the [Coin Changes II](https://leetcode.com/problems/coin-change-2/) problem, to an extent that by _switching the order of loops_ in one of the solutions of [Coin Changes II](https://leetcode.com/problems/coin-change-2/),
one could solve this problem.

In this article, we will present two approaches of Dynamic Programming, namely **Top-Down** and **Bottom-Up**.


---
### Approach 1: Top-Down Dynamic Programming

**Intuition**

Let us start with an example. Given the input array of `nums = [1, 2, 3]` and the `target = 4`, we are asked to come up with a set of _combinations_ so that the sum of each combination is equal to the target value.

Let us clarify a bit on the reference of _combination_ here, which is more of a **_permutation_**, to be more precise, where the order of elements does matter.
For instance, we could have two combinations such as `[1, 3]` and `[3, 1]`, which are valid and different for this problem.
While, for the problem of [Coin Changes II](https://leetcode.com/problems/coin-change-2/), these two combinations would be considered to be the same.

>So to summarize a bit, the order of elements in the combination does matter for this problem.

Since the **order** is important, let us build the solution **recursively** and in the **backward** manner.
We elaborate the idea with an example in the following:

Given the `target=4` and the candidates array `nums=[1, 2, 3]`, each candidate number potentially can be the **last** number in the final combination.
Here are a few steps on how we can work out a _subset_ of valid combinations.

- 1). Suppose we place the number `1` as the last number in the combinations.
Now, the remainder would be `4-1=3`. We just **_reduce_** the problem into a smaller scale, where we should now find all the combinations that sum up to `3` rather than `4`.

- 2). Suppose that we know the combinations that sum up to `3`, which are `[1, 1, 1]`, `[1, 2]` and `[2, 1]`.

- 3). Now by appending the _last_ number that we chose before (_i.e._ `1`) to each of the above _sub-combinations_, we can now obtain all the __valid__ and final combinations that __end with__ the chosen number (_i.e._ `[1, 1, 1, 1]`, `[1, 2, 1]`, and `[2, 1, 1]`).

>Now if we apply the above steps to each of the candidate numbers in the input array _recursively_, we could then obtain all subsets of _combinations_ that end with each of the candidate numbers.

We illustrate the unfolding of the above process in the following graph.

![combinations unfolding](../Figures/377/377_combinations_123.png)

In the above graph, we construct the combination in a backward manner, where we start from the last number in the combination.

Note that, we can also assume that each time we add a number to the intermediate combination, it would be placed as the **_first_** number rather than the last one.
With this assumption, the process we described above would still hold.

**Mathematics**

If one follows the above intuition, one can come up with a __backtracking__ algorithm to build all possible combinations.

However, in this problem, we are not asked to build the combinations, but rather the total number of combinations, which is actually a simpler problem that can be solved with **Dynamic Programming** as we mentioned at the beginning.

>If one is familar with the dynamic programming problems, one would know that it is imperative to model the problem with some **mathematical representations** (preferably formulas), which will help one to implement the solution.

For this problem, we could summarize the process in the intuition section with the following formula:

$$
    \text{combs}(\text{target}) = \bigcup {\text{combs}(\text{target} - \text{nums}[\text{i}])} \quad \space \text{if}  \space \text{target} \ge \text{nums[i]}
$$

, where the function $$\text{combs(target)}$$ gives the combinations that sum up to the `target` value.

With the above formula, we could obtain all valid combinations.
But as we know, the desired result of this problem is the number of combinations, rather than the combinations themselves.

>Although the desired results are different, the above process of constructing valid combinations still hold.
More importantly, the relationship among the break-down steps remains the same.
To obtain the number of combinations, we could simply reformulate the above formula as follows:

$$
    \text{combs}(\text{target}) = \sum_{i=0}^{n}{\text{combs}(\text{target} - \text{nums}[\text{i}])} \quad \space \text{if}  \space \text{target} \ge \text{nums[i]}
$$

, where the function $$\text{combs(target)}$$ gives the _**number**_ of combinations that sum up to the `target` value.

Intuitively, we could interpret the formula as that the total number of combinations would be the **sum** of all subsets of combinations, where each subset of combinations ends with a _specific_ number.

We could also prove that the combinations built with the above process are **_complete_** and **_non-redundant_**.

- By complete, our solution will cover all valid combinations. If there is ever a combination that ends with a specific number, it would then be included in our solution.

- By non-redundant, each of the combinations constructed at the end would be _unique_.
For combinations in different subsets, they would definitely be different since they end with different numbers.
While for combinations in the same subsets, they could be further _attributed_ to smaller subsets, according to their postfixes.
Hence, they are unique as well.

With the properties of _completeness_ and _non-redundancy_, we prove that our solution is __correct__.


**Algorithm**

Given the above formulas of dynamic programming, in terms of implementation, there are two general strategies, namely **top-down** and **bottom-up**.
In this approach, we will start with the _top-down_ strategy, which arguably is more intuitive.
Then in the next approach, we will cover the _bottom-up_ strategy.

>As the name suggests, with _top-down_ strategy, we start from the original input, and then we _recursively_ reduce the input into a smaller scale until we reach the levels that we can no longer break down.

Due to the _recursive_ nature of the formula, we could translate the formula directly into a recursive function.

Here accordingly we define a recursive function called `combs(remain)` which returns the number of combinations where each combination sums up to the `remain` value.

Here are some sample implementations.

<iframe src="https://leetcode.com/playground/QcXSyzFQ/shared" frameBorder="0" width="100%" height="500" name="QcXSyzFQ"></iframe>

As one might notice in the above implementation, together with the *recursive* function, we applied a critical optimization measure which is called [_memoization_](https://en.wikipedia.org/wiki/Memoization).

Without the memoization, we would end up with much redundant calculation, where we evaluate the function over and over for the same input value.

In addition, as a minor optimization, one could also sort the candidate numbers beforehands.
Later, one could have an early stopping in the loop, rather than going through the entire input list each time.

**Complexity Analysis**

Let $$T$$ be the target value, and $$N$$ be the number of elements in the input array.

- Time Complexity: $$\mathcal{O}(T \cdot N)$$

    - Thanks to the memoization technique, for each invocation of `combs(remain)`, it would be evaluated only once, for each unique input value.
    In the worst case, we could have $$T$$ different input values.

    - For each invocation of `combs(remain)`, in the worst case it takes $$\mathcal{O}(N)$$ time for the non-recursive part.

    - To sum up, the overall time complexity of the algorithm is $$T \cdot \mathcal{O}(N) = \mathcal{O}(T \cdot N) $$.


- Space Complexity: $$\mathcal{O}(T)$$

    - Due to the recursive function, the algorithm will incur additional memory consumption in the function call stack.
    In the worst case, the recursive function can pile up to $$T$$ times.
    As a result, we would need $$\mathcal{O}(T)$$ space for the recursive function.

    - In addition, since we applied the memoization technique where we keep the intermediate results in the cache, we would need addtionally $$\mathcal{O}(T)$$ space.

    - To sum up, the overall space complexity of the algorithm is $$\mathcal{O}(T) + \mathcal{O}(T) = \mathcal{O}(T)$$.


---
### Approach 2: Bottom-Up Dynamic Programming

**Intuition**

>Another well-known form of dynamic programming algorithm is _bottom-up_, as opposed to _top-down_, where one often sees the application of one dimentional or multi-dimentional array (_i.e._ `dp[]`).

As a reminder, here is the formula we derived before:

$$
    \text{combs}(\text{target}) = \sum_{i=0}^{n}{\text{combs}(\text{target} - \text{nums}[\text{i}])} \quad \space \text{if}  \space \text{target} \ge \text{nums[i]}
$$

, where the function $$\text{combs(target)}$$ gives the _**number**_ of combinations that sum up to the `target` value.

Accordingly, we can define an array named `dp[i]` where each element corresponds to the result of function `combs(i)`, _i.e._ the number of combinations that sum up to the value of `i`.

In the previous approach, to obtain the value of `combs(target)`, we start off from the desired `target` value, and recursively reduce it down to the base case (_i.e._ `target=0`).

In this approach though, we start from the base case (_i.e._ `dp[0]`) and then _iteratively_ calcalate all the intermediate results until we reach the target value (_i.e._ `dp[target]`).

Here we demonstrate how to calculate the `dp[i]` array values in _bottom-up_ manner, with the same example we used before.

Given the input of `nums=[1, 2, 3]` and `target=4`, here is what the `dp[i]` array looks like at the beginning.

![DP array init](../Figures/377/377_dp_init.png)

- As one can see, initially all the values are set to be zero, except the first element (`dp[0]`) which is set to be one.
Although literally it indicates that there is one combination that sum up to zero, which does not make sense, the value is set artificially to facilitate the calculation later as one will see.

- We then move from low index to high index to work out each value in the `dp[i]` array.
With the value of `dp[0]` known, we can now deduct the value for `dp[1]` which can be broken down into one single case where we place the number `1` as the last number in the combination and the remainder sum become zero.
As a result, `dp[1] = dp[0] = 1` according to the formula.
We set the value of `dp[0]` to one, which can be interpreted that there exists **one** combination if the target value can be reduced down to zero.

![DP array step 1](../Figures/377/377_dp_step_1.png)

- We now move on the index of `2` in the `dp[i]` array.
This time, it can be broke down into two cases, which depends on the values of `dp[1]` and `dp[0]` respectively.
    - For case 1, we can place the number `1` as the last number in the combination. The case is now reduced down to `dp[1]`.
    - For case 2, we can place the number `2` as the last number in the combination. The case is now reduced down to `dp[0]`.
    - To sum up the above two cases, the value of `dp[2]` can be expressed as `dp[2] = dp[1] + dp[0]`, as one can see in the following graph:

![DP array step 2](../Figures/377/377_dp_step_2.png)

- We can repeat the above process to work out all the rest values in the `dp[i]` array.
In the following graph, we show the final values, as well as the dependencies during the calculation.

![DP array final](../Figures/377/377_dp_final.png)

The approach is called bottom-up, since we start from the base case and move towards the final case where the input is the target value.
At each step, the calculation of the current value only depends on the previously calculated intermediate values.

**Algorithm**

Based on the above intuition, here are some sample implementations.

One can see the ressemblance between the top-down and bottom-up approaches.
In certain perspective, the bottom-up approach is equivalent to the unfolding of the top-down approach with memoization.

<iframe src="https://leetcode.com/playground/3Sdoav5x/shared" frameBorder="0" width="100%" height="395" name="3Sdoav5x"></iframe>



**Complexity Analysis**


Let $$T$$ be the target value, and $$N$$ be the number of elements in the input array.

- Time Complexity: $$\mathcal{O}(T \cdot N)$$

    - We have a nested loop, with the number of iterations as $$T$$ and $$N$$ respectively.

    - Hence, the overall time complexity of the algorithm is $$\mathcal{O}(T \cdot N) $$.


- Space Complexity: $$\mathcal{O}(T)$$

    - We allocate an array `dp[i]` to hold all the intermediate values, which amounts to $$\mathcal{O}(T)$$ space.


---