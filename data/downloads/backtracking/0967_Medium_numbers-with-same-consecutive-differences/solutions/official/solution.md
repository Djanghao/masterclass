# Official Solution

**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solution/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solution/)

---

[TOC]

## Solution

---
### Overview

The problem asks us to come up a list of digit combinations that follow the defined pattern.
Before jumping to the implementation, it is always helpful to _manually_ deduce some examples.

Suppose that we have `N=3` and `K=2`, _i.e._ we should come up a series of 3-digits numbers, where for each number the difference between each adjacent digits is 2.

Let us try to build the number _**digit by digit**_. Starting from the highest digit (in the image), we can pick the digit `1`.
Then for the next digit, we need to pick `3` (_i.e._ $$1+2$$).
Finally, for the last digit, we could have two choices: `5` and `1` (_i.e._ $$3+2, 3-2$$).
We illustrate the process in the following graph, where each **_node_** represents a digit that we pick, and the **_level_** of the node corresponds to the position that the digit situates in the final number.

![tree illustration](../Figures/967/967_tree_illustration.png)

>As one might notice that, we just converted the problem into a tree traversal problem, where each path from the root to a leaf forms a solution for the problem.

As we know, the common algorithms for the tree traversal problem would be _**DFS**_ (Depth-First Search) and _**BFS**_ (Breadth-First Search), which are exactly what we will present in the following sections.


---
### Approach 1: DFS (Depth-First Search)

**Intuition**

If one is not familiar with the concepts of DFS and BFS, we have an Explore card called [Queue & Stack](https://leetcode.com/explore/learn/card/queue-stack/) where we cover the [DFS traversal](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/) as well as the [BFS traversal](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/).

In this section, we will start from the DFS strategy, which arguably is more intuitive for this problem.

As we stated in the overview section, we could build a valid digit combination _digit by digit_ or (node by node in terms of tree).

For a number consisting of `N` digits, we start from the highest digit and walk through to the lowest digit.
At each step, we might have several candidates that are eligible to be explored.

With the DFS strategy, we prioritize the _depth_ over the _breadth_, _i.e._ we pick one of the candidates and continue the exploration before moving on to the other candidates that are of the same level.

**Algorithm**

Intuitively we could implement the DFS algorithm with recursion. Here we define a recursive function `DFS(N, num)` (in Python) whose goal is to come up the combinations for the remaining `N` digits, starting from the current `num`.
Note that, the signature of the function is slightly different in our Java implementation. Yet, the semantics of the function remains the same.

![DFS example](../Figures/967/967_dfs_example.png)

For instance, in the previous examples, where `N=3` and `K=2`, and there is a moment we would invoke `DFS(1, 13)` which is to add another digit to the existing number `13` so that the final number meets the requirements.
If the DFS function works properly, we should have the numbers of `135` and `131` as results after the invocation.

We could implement the recursive function in the following steps:

- As a base case, when `N=0` _i.e._ no more remaining digits to complete, we could return the current `num` as the result.

- Otherwise, there are still some remaining digits to be added to the current number, _e.g._ `13`. There are two potential cases to explore, based on the last digit of the current number which we denote as `tail_digit`.

    - Adding the difference `K` to the last digit, _i.e._ `tail_digit + K`.

    - Deducting the difference `K` from the last digit, _i.e._ `tail_digit - K`.

- If the result of either above case falls into the valid digit range (_i.e._ $$[0, 9]$$), we then continue the exploration by invoking the function itself.

Once we implement the `DFS(N, num)` function, we then simply call this function over the scope of $$[1, 9]$$, _i.e._ the valid digits for the highest position.

**Note**: _If we are asked to return numbers of a single digit (_i.e._ `N=1`), then regardless of `K`, all digits are valid, including zero._
We treat this as a special case in the code, since in our implementation of DFS function, we will never return zero as the result.

<iframe src="https://leetcode.com/playground/o99eFuUT/shared" frameBorder="0" width="100%" height="500" name="o99eFuUT"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of digits for a valid combination, and $$K$$ be the difference between digits.

First of all, let us estimate the number of potential solutions.
For the highest digit, we could have 9 potential candidates.
Starting from the second highest position, we could have at most 2 candidates for each position.
Therefore, at most, we could have $$9 \cdot 2^{N-1}$$ solutions, for $$N > 1$$.

- Time Complexity: $$\mathcal{O}(2^{N})$$

    - Essentially, the execution of the algorithm will unfolder itself as a binary tree, where each node in the tree represents an invocation of the `DFS()` function.
    The execution of the `DFS()` function itself takes a constant time.
    Therefore, the overall time complexity is proportional to the number of nodes in the execution binary tree.

    - In the worst case, the total number of nodes in a binary tree of depth $$N-1$$ is $$2^N$$.
    Hence, the overall time complexity of the algorithm is $$\mathcal{O}(2^{N})$$.

    - Note that, when $$K = 0$$, at each position, there is only one possible candidate, _e.g._ $$333$$.
    In total, we would have 9 numbers in the result set, and each number is of $$N$$ digits. The time complexity would then be reduced down to $$\mathcal{O}(N)$$.

- Space Complexity: $$\mathcal{O}(2^{N})$$

    - Since we adopt a recursive solution, we would have some additional memory consumption on the function call stack. The maximum number of consecutive calls on the recursion function is $$N$$. Hence, the space complexity for the call stack is $$\mathcal{O}(N)$$.

    - We use a list to keep all the solutions, which could amount to $$9 \cdot 2^{N-1}$$ number of elements.

    - To sum up, the overall space complexity of the algorithm is $$\mathcal{O}(N) + \mathcal{O}(9 \cdot 2^{N-1}) = \mathcal{O}(2^{N})$$.


---
### Approach 2: BFS (Breadth-First Search)

**Intuition**

It might be more intuitive to come up a DFS solution as we presented before.
However, it is also viable to solve this problem with _BFS_ (Breadth-First Search) traversal strategy.

>Rather than building the solution one by one, we could do it _batch by batch_, _i.e._ level by level.

Each level contains the numbers that are of the same amount of digits.
Also, each level corresponds to the solutions with a specific number of digits.

![BFS](../Figures/967/967_BFS.png)

For example, given `N=3` and `K=7`, at the first level, we would have potentially 9 candidates (_i.e._ `[1, 2, 3, 4, 5, 7, 8, 9]`).
When we move on to the second level, the candidates are reduced down to `[18, 29, 70, 81, 92]`.
Finally, at the last level, we would have the solutions as `[181, 292, 707, 818, 929]`.

**Algorithm**

Here are a few steps to implement the BFS algorithm for this problem.

- We could implement the algorithm with nested two-levels loops, where the outer loop iterates through levels and the inner loop handles the elements within each level.

- We could use a list data structure to keep the numbers for a single level, _i.e._ here we name the variable as `queue`.

- For each number in the queue, we could apply the same logics as in the DFS approach, except the last step, rather than making a recursive call for the next number we simply append the number to the queue for the next level.

<iframe src="https://leetcode.com/playground/5ajtXWDv/shared" frameBorder="0" width="100%" height="500" name="5ajtXWDv"></iframe>



**Complexity Analysis**

Let $$N$$ be the number of digits for a valid combination, and $$K$$ be the difference between digits.

- Time Complexity: $$\mathcal{O}(2^{N})$$

    - Essentially with the BFS approach, all the intermeidate candidates form a binary tree, same as the execution tree as in the DFS approach.
    Only this time, we traverse in a breadth-first manner, rather than the depth-first.

    - Therefore, the overall time complexity of the algorithm would be $$\mathcal{O}(2^{N})$$.

- Space Complexity: $$\mathcal{O}(2^{N})$$

    - We use two queues to maintain the intermediate solutions, which contain no more than two levels of elements.
    The number of elements at the level of $$i$$ is up to $$9 \cdot 2^{i-1}$$.

    - To sum up, the space complexity of the algorithm would be $$\mathcal{O}(9 \cdot 2^{N-1} + 9 \cdot 2^{N-2}) = \mathcal{O}(2^N)$$.


---