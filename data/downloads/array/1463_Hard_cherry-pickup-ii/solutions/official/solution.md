# Official Solution

**Link:** [https://leetcode.com/problems/cherry-pickup-ii/solution/](https://leetcode.com/problems/cherry-pickup-ii/solution/)

---

[TOC]

### Overview
You probably can guess from the problem title that this problem is an extension of the original [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/). 

In this problem, we do not need to return to the starting point but have two robots instead of one. However, the essence of this problem does not change, and the same method is still available.

Below, we will discuss two similar approaches: *Dynamic Programming (Top Down)* and *Dynamic Programming (Bottom Up)*.

The first one is also known as dfs with memoization or memoization dp, and the second one is also known as tabulation dp. They have the same main idea but different coding approaches.

---
### Approach #1: Dynamic Programming (Top Down)

**Intuition**

>In this part, we will explain how to think of this approach step by step.
>
>If you are only interested in the pure algorithm, you can jump to the algorithm part.

We need to move two robots! Note that the order of moving robot1 or robot2 does not matter since it would not impact the cherries we can pick. The number of cherries we can pick only depends on the tracks of our robots.

Therefore, we can move the robot1 and robot2 in any order we want. We aim to apply DP, so we are looking for an order that suitable for DP.

Let's try a few possible moving orders.

Can we move robot1 firstly to the bottom row, and then move robot2?

Maybe not. In this case, the movement of robot1 will impact the movement of robot2. In other words, the optimal track of robot2 depends on the track of robot1. If we want to apply DP, we need to record the whole track of robot1 as the state. The number of sub-problems is too much.

In fact, in any case, when we move one robot several steps earlier than the other, the movement of the first robot will impact the movement of the second robot.

Unless we move them **synchronously** (i.e., move one step of robot1 and robot2 at the same time).

Let's define the DP state as `(row1, col1, row2, col2)`, where `(row1, col1)` represents the location of robot1, and `(row2, col2)` represents the location of robot2.

If we move them synchronously, robot1 and robot2 will always on the same row. Therefore, `row1 == row2`.

Let `row = row1`. The DP state is simplified to `(row, col1, col2)`, where `(row, col1)` represents the location of robot1, and `(row, col2)` represents the location of robot2.

OK, time to define the DP function.

>Since it's a top-down DP approach, we try to solve the problem with the DP function. Check approach 2 for DP array (bottom-up).

Let `dp(row, col1, col2)` return the maximum cherries we can pick if robot1 starts at `(row, col1)` and robot2 starts at `(row, col2)`.

>You can try changing different `dp` meaning to yield some other similar approaches. For example, let `dp(row, col1, col2)` mean the maximum cherries we can pick if robot1 **ends** at `(row, col1)` and robot2 **ends** at `(row, col2)`.

The base cases are that robot1 and robot2 both start at the bottom line. In this case, they do not need to move. All we need to do is to collect the cherries at current cells. Remember not to double count if robot1 and robot2 are at exactly the same cell.

In other cases, we need to add the maximum cherries robots can pick in the future. Here comes the transition function.

Since we move robots synchronously, and each robot has three different movements for one step, we totally have $$3*3 = 9$$ possible movements for two robots:

```text
    ROBOT1 | ROBOT2
------------------------
 LEFT DOWN |  LEFT DOWN
 LEFT DOWN |       DOWN
 LEFT DOWN | RIGHT DOWN
      DOWN |  LEFT DOWN
      DOWN |       DOWN
      DOWN | RIGHT DOWN
RIGHT DOWN |  LEFT DOWN
RIGHT DOWN |       DOWN  
RIGHT DOWN | RIGHT DOWN  
```

The maximum cherries robots can pick in the future would be the max of those 9 movements, which is the maximum of `dp(row+1, new_col1, new_col2)`, where `new_col1` can be `col1`, `col1+1`, or `col1-1`, and `new_col2` can be `col2`, `col2+1`, or `col2-1`.

Remember to use a map or an array to store the results of our `dp` function to prevent redundant calculating.

**Algorithm**

Define a `dp` function that takes three integers `row`, `col1`, and `col2` as input.

`(row, col1)` represents the location of robot1, and `(row, col2)` represents the location of robot2.

The `dp` function returns the maximum cherries we can pick if robot1 starts at `(row, col1)` and robot2 starts at `(row, col2)`.

In the `dp` function:

- Collect the cherry at `(row, col1)` and `(row, col2)`. Do not double count if `col1 == col2`.

- If we do not reach the last row, we need to add the maximum cherries we can pick in the future.

- The maximum cherries we can pick in the future is the maximum of `dp(row+1, new_col1, new_col2)`, where `new_col1` can be `col1`, `col1+1`, or `col1-1`, and `new_col2` can be `col2`, `col2+1`, or `col2-1`.

- Return the total cherries we can pick.

Finally, return `dp(row=0, col1=0, col2=last_column)` in the main function.

**Implementation**

<iframe src="https://leetcode.com/playground/ci5CrUra/shared" frameBorder="0" width="100%" height="500" name="ci5CrUra"></iframe>

**Complexity Analysis**

Let $$M$$ be the number of rows in `grid` and $$N$$ be the number of columns in `grid`.

* Time Complexity: $$\mathcal{O}(MN^2)$$, since our `helper` function have three variables as input, which have $$M$$, $$N$$, and $$N$$ possible values respectively. In the worst case, we have to calculate them all once, so that would cost $$\mathcal{O}(M \cdot N \cdot N) = \mathcal{O}(MN^2)$$. Also, since we save the results after calculating, we would not have repeated calculation.

* Space Complexity: $$\mathcal{O}(MN^2)$$, since our `helper` function have three variables as input, and they have $$M$$, $$N$$, and $$N$$ possible values respectively. We need a map with size of $$\mathcal{O}(M \cdot N \cdot N) = \mathcal{O}(MN^2)$$ to store the results.

---

### Approach #2: Dynamic Programming (Bottom Up)

**Intuition**

Similarly, we need a three-dimension array `dp[row][col1][col2]` to store calculated results:

`dp[row][col1][col2]` represents the maximum cherries we can pick if robot1 starts at `(row, col1)` and robot2 starts at `(row, col2)`.

Remember, we move robot1 and robot2 synchronously, so they are always on the same row.

The base cases are that robot1 and robot2 both start at the bottom row. In this case, we only need to calculate the cherry at current cells.

Otherwise, apply the transition equation to get the maximum cherries we can pick in the future.

Since the base case is at the bottom row, we need to iterate from the bottom row to the top row when filling the `dp` array.

>You can use state compression to save the first dimension since we only need `dp[row+1]` when calculating `dp[row]`.

>You can change the meaning of `dp[row][col1][col2]` and some corresponding codes to get some other similar approaches. For example, let `dp[row][col1][col2]` mean the maximum cherries we can pick if robot1 **ends** at `(row, col1)` and robot2 **ends** at `(row, col2)`.

**Algorithm**

Define a three-dimension `dp` array where each dimension has a size of `m`, `n`, and `n` respectively.

`dp[row][col1][col2]` represents the maximum cherries we can pick if robot1 starts at `(row, col1)` and robot2 starts at `(row, col2)`.

To compute `dp[row][col1][col2]` (transition equation):

- Collect the cherry at `(row, col1)` and `(row, col2)`. Do not double count if `col1 == col2`.

- If we are not in the last row, we need to add the maximum cherries we can pick in the future.

- The maximum cherries we can pick in the future is the maximum of `dp[row+1][new_col1][new_col2]`, where `new_col1` can be `col1`, `col1+1`, or `col1-1`, and `new_col2` can be `col2`, `col2+1`, or `col2-1`.

Finally, return `dp[0][0][last_column]`.

>State compression can be used to save the first dimension: `dp[col1][col2]`. Just reuse the dp array after iterating one row.

**Implementation**

<iframe src="https://leetcode.com/playground/DvwFT49y/shared" frameBorder="0" width="100%" height="500" name="DvwFT49y"></iframe>

**Complexity Analysis**

Let $$M$$ be the number of rows in `grid` and $$N$$ be the number of columns in `grid`.

* Time Complexity: $$\mathcal{O}(MN^2)$$, since our dynamic programming has three nested for-loops, which have $$M$$, $$N$$, and $$N$$ iterations respectively. In total, it costs $$\mathcal{O}(M \cdot N \cdot N) = \mathcal{O}(MN^2)$$.

* Space Complexity: $$\mathcal{O}(MN^2)$$ if not use state compression, since our `dp` array has $$\mathcal{O}(M \cdot N \cdot N) = \mathcal{O}(MN^2)$$ elements. $$\mathcal{O}(N^2)$$ if use state compression, since we can reuse the first dimension, and our `dp` array only has $$\mathcal{O}(N \cdot N) = \mathcal{O}(N^2)$$ elements.