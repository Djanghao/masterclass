# Official Solution

**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solution/](https://leetcode.com/problems/solving-questions-with-brainpower/solution/)

---

[TOC]

## Solution

--- 

### Overview

First, we provide an example in the picture below. Note that `questions[0] = [points_0, brainpower_0] = [3, 2]`, so if we solve the first question, we can earn `3` points and have to skip at least `2` following questions. 


![img](../Figures/2140/intro.png)



---

### Approach 1: Dynamic Programming (Iterative)

#### Intuition   

For each question `questions[i]`, we have two options:
- Solve it, earn points, skip some following questions.
- Skip it.

Both choices affect the options on the remaining questions. This distinctive feature implies that we can use dynamic programming.


Let `n` be the number of questions. Define an array `dp` where `dp[i]` is the maximum points we can get by processing the questions in the suffix subarray `questions[i ~ n - 1]`, as shown in the colored cells in the picture below.


![img](../Figures/2140/1.png)

Now we try to fill `dp` backward. What is the value of `dp[i]`? Recall the two options we have for `questions[i]`, we can either solve it or skip it.

![img](../Figures/2140/2.png)

<br>

Notice the non-decreasing feature of `dp`, that is, `dp[i] ≥ dp[i + 1], (For i < n - 1)`. The reason is that:

- `dp[i]` is the optimal points we get for `questions[i ~ n - 1]`.
- `dp[i + 1]` is the optimal points we get for `questions[i + 1 ~ n - 1]`, which has one less question than `questions[i ~ n - 1]`.

In short, the question range for `dp[i]` includes the question range for `dp[i + 1]`, so we can always have at least the same points as `dp[i + 1]` for `dp[i]`.    

![img](../Figures/2140/3.png)

Now we can update each cell. For `dp[i]`, if we solve this problem, it means that we have to skip the following `skip[i]` questions. Therefore, the maximum points we can get is determined by:

- The score of question `i`, which is `points[i]`.
- The maximum score we can get in the range `dp[i + skip[i] + 1 ~ n]`, since we have to skip at least `skip[i]` following questions. 

**You may wonder why we use `dp[i + skip[i] + 1]` if we don't necessarily have to solve question `i + skip + 1`. What if we actually skipped more questions?**

> We have showed that `dp` is non-increasing, thus `dp[i + skip[i] + 1]` is the maximum value in the range `dp[i + skip[i] + 1 ~ n]`. We can safely use `dp[i + skip[i] + 1]` as the maximum points we can get among all possible plans, regardless of whether we solve `i + skip[i] + 1`.

Therefore, by solving the problem `i`, we have the maximum points as `points[i] + dp[i + skip[i] + 1]`.

![img](../Figures/2140/5.png)

On the other hand, if we skip problem `i`, the maximum points we get is the same as the case for `i + 1`. That is, `dp[i] = dp[i + 1]`.


![img](../Figures/2140/4.png)

To sum up, we can update `dp[i]` as the larger of the points of the two options:

`dp[i] = max(dp[i + 1], points[i] + dp[i + skip[i] + 1])`.

Note the boundary condition: If `i + skip[i] + 1 >= n`, it means that after skipping `skip[i]` questions, there are no more available questions or gainable points, so we can just treat `dp[i + skip[i] + 1]` as `0`. 


Finally, we just need to return `dp[0]` after the update ends, which stands for the optimal solution for the whole question array `questions[0 ~ n - 1]`. Please take the following slides as an example.


!?!../Documents/2140/s1.json:601,301!?!



<br>

#### Algorithm

1) Initialize an array `dp` of size `n`, set `dp[n - 1] = questions[n - 1][0]`.

2) Iterate backward over index `i` from `n - 2`:
    - If we skip question `i`, we have `dp[i] = dp[i + 1]`.
    - If we solve question `i`, we have `dp[i] = questions[i][0] + dp[i + questions[i][1] + 1]`.


    Update `dp[i]` as the larger one.

3) Return `dp[0]` once we finish the iteration.

#### Implementation

<iframe src="https://leetcode.com/playground/mvdWNcuL/shared" frameBorder="0" width="100%" height="395" name="mvdWNcuL"></iframe>


#### Complexity Analysis

Let $$n$$ be the length of the input array `questions`.

* Time complexity: $$O(n)$$

    - We need to iterate over `dp`. At each step, we calculate and update `dp[i]` which take $$O(1)$$ time. 
    

* Space complexity: $$O(n)$$

    - We initialize an array of size `n`.

<br/>



---

### Approach 2: Dynamic Programming (Recursive)

#### Intuition   

We will implement the same algorithm as in approach 1, but using a recursive method. 

The idea is that each time a recursive function calls itself, it reduces the given problem into subproblems. The recursion call continues until it reaches the base cases, where the subproblem can be solved without further recursion. 

We define `dfs(i)` as the maximum points we can get by processing the problems in the range `[i ~ n - 1]`. Similar to approach 1, we have the same recursive formula where `dfs(i)` is the larger of the points of the two options:

`dfs(i) = max(dfs(i + 1), points[i] + dfs(i + skip[i] + 1))`

Once we move on from `dfs(i)` to either `dfs(i + 1)` or `dfs(i + skip[i] + 1)`. Then the function calls itself for smaller subproblems. When we meet the case that `i ≥ n`, we have reached the base case where the problem can be solved by just returning `0` without further recursion!

As you may have noticed from the picture, there may be many repeated calls to `dfs`. To avoid repeated computation over the same case, we can use an array `dp` as memory.

![img](../Figures/2140/rec.png)

<br>

#### Algorithm

1) Initialize an array `dp` of size `n` as memory.
2) Define function `dfs(i)` as the maximum points in the range `[i ~ n - 1]`.
    - If `i >= n`, return `0`, since we can get `0` points from `0` question.
    - If `dp[i] != 0`, it means we have already computed `dfs(i)`, return `dp[i]`.
    - Otherwise, we can either solve question `i` or skip it.
        - By solving it, the point we get is `questions[i][0] + dfs(i + questions[i][1] + 1)`.
        - By skipping it, the point we get is `dfs(i + 1)`.
    - Update `dp[i]` as the larger one.
3) Call `dfs(0)` and return its result.  

#### Implementation

<iframe src="https://leetcode.com/playground/C3bYJ42K/shared" frameBorder="0" width="100%" height="463" name="C3bYJ42K"></iframe>


#### Complexity Analysis

Let $$n$$ be the length of the input array `questions`.

* Time complexity: $$O(n)$$

    - Recall the picture at the beginning of this approach, the time complexity is proportional to the number of the function calls. Since we use `dp` as memory, each `dfs(i)` will be called exactly once, so the time complexity is $$O(n)$$.

    

* Space complexity: $$O(n)$$

    - The space complexity is proportional to the maximum depth of the recursion tree. We have up to $$n$$ questions, which results in a recursion tree of depth $$O(n)$$.
    - Each function call takes $$O(1)$$ space.
    - Additionally, we initialize an array `dp` of size `n` which also takes $O(n)$ space.
    - Therefore, the overall space complexity is $$O(n)$$. 

<br/>