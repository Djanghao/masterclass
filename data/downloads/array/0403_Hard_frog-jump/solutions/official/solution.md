# Official Solution

**Link:** [https://leetcode.com/problems/frog-jump/solution/](https://leetcode.com/problems/frog-jump/solution/)

---

[TOC]

## Solution

### Overview

There is a river that has $N$ stones on it; each stone has a coordinate number that represents its position. A frog at position `0` must cross the river by reaching the last stone. The frog will always jump in the forward direction, and if the last jump was of `k` steps, then the next jump should be one of `{k - 1, k, k + 1}` steps. We need to tell if the frog will be able to cross the river or not; we can assume the first jump of the frog will be of  `1` step. One key thing to note here is that the frog can only land on stones, so if the frog jumps from the `x` to `x + kth` position and if there is no stone at `x + k`, then the frog cannot jump.

**Note**: In this article, position refers to the location on the river (essentially a point on a straight line), and index refers to the indices in the `stone` array.

We should take note of two characteristics of this problem at this time. First, as we iterate over the stones, we must decide how far to jump. This choice will depend on our previous choice of jumps. In other words, each decision we make is affected by the previous decisions we have made. Second, the problem is asking to find any way to reach the river's end; it doesn't ask for the sequence of steps. These two characteristics suggest that we could solve this problem using dynamic programming. We will discuss two approaches using dynamic programming.

---
### Approach 1: Top-Down Dynamic Programming

**Intuition**

Let's start with the position `0`; as we know, the first jump has to be one step. Thus the frog will reach position `1`; if there is no stone at `1` (no entry in the array `stone` with value `1`), we can return `false` from here. Now, at each position, the frog will have three choices; for instance, at position `1`, it can choose to jump `{0, 1, 2}` steps to the next position. One way to solve the problem is to iterate over every choice the frog has and then return if it's possible to reach the end of the river by any one of the ways.

In this approach, we will iterate over every possibility and find if any leads the frog to the last stone. For this recursive approach, what are the parameters that we need to track? We need to track two things:

- The index of stone that the frog is currently on; this is the index of a stone in the array `stone`, remember that the frog can only land on stones.
- The size of the previous jump that the frog took.

Using the last jump step, we can find the three possible jump steps that the frog can take this time, and using the current index, we can find out the following index of the stone that the frog will step on. This recursive approach will have repeated subproblems; this can be observed in the figure below. Notice the green nodes are repeated subproblems signifying that we have already solved these subproblems before.

![fig](../Figures/403/403A.png)

To avoid recalculating results for previously seen subproblems, we will memoize the result for each subproblem. So the next time we need to calculate the result for the same set of parameters `{index, prevJump}`, we can look up the result in constant time instead of recalculating the result. This would be much more efficient than our previous recursive approach, where we had three choices for each of the $N$ positions. Thus the possible number of operations could be as large as $3^N$, which is huge considering $N$ can be up to $2000$. For memoization, we will use an integer array or map `dp`, which will initially have all the entries as `-1`, representing that the answer for these states has not been calculated yet. Then as we proceed, we will store `1` or `0`, denoting `true` or `false` if the frog can cross the river for these states or not respectively.

We need a way to find out if there is a stone at a particular position or not. This is because when we will find out the next position of the frog, we will check if there is any stone there or not, and then only we will mark the frog's index as the index of stone at that position. This can be done by creating a map `mark` from the position of stones to their indices.

**Algorithm**

1. Create a map `mark` between the stone position to its `index `.
2. Start with `index` as `0` and `prevJump` as `0`. Our first jump would always be of the `1` step, as the possible jumps are `{-1, 0, 1}`. And we will only consider positive steps jumps to make sure the frog always jumps in the forward direction.
3. If `index = N - 1`, it implies that the frog has reached the end stone, and hence we can return `1`.
4. Iterate over the three possibilities `{prevJump - 1, prevJump, prevJump + 1}` as `nextJump`, and do the following:

   i. The position of the frog currently is `stones[index]`, after the jump it would be `stones[index] + nextJump`.

   ii.  Check if `nextJump` is greater than `0` because the frog cannot jump in the backward direction, and staying at the same index won't change the outcome.

   iii. Check if, at this next position, there is a stone or not. If the entry in `mark` is non-zero, it implies that the stone is there.

   iv. If all these conditions satisfy, then make the recursive call with `prevJump = nextJump` and `index = mark[stones[index] + nextJump]`.

5. Find the logical OR from all three possibilities and store it in the variable `ans`, initialized to `false`. Also, store this answer in the array `dp` so that the next time we come across the same states we don't have to go into recursion.

6. Return `ans`.


**Implementation**

<iframe src="https://leetcode.com/playground/feUQGL3p/shared" frameBorder="0" width="100%" height="500" name="feUQGL3p"></iframe>

**Complexity Analysis**

Here, $N$ is the number of stones in the river.

* Time complexity: $O(N^2)$

  Each state is defined by the values `index` and `prevJump`. Hence, there will be $N^2$ possible states because both index and jump can take up to $N$ values; this is because if there are $N$ stones, the frog can only jump on them in the forward direction, so if the frog chooses the maximum jump in every case and there is a stone on those jumps position as well then the value of `prevJump` will be `{0, 1, 2, 3, 4, 5, 6.....}` and since the jumps could not be more than the number of stones the value of `prevStone` would also be not more than $N$. We must visit these states to solve the original problem. Each recursive call requires $O(1)$ time, as we have a loop with three iterations. Thus, the total time complexity equals $O(N^2)$.

* Space complexity: $O(N^2)$

  The size of the `dp` array is $N^2$; also, the size of the map `mark` is $N$ (although the keys are the values of stones' position, the number of entries would be equal to the number of stones). There would be some stack space, too; the maximum number of active stack calls would be $O(N)$ one for each stone. Hence, the total space complexity would be $O(N^2)$.
  <br/>

---

### Approach 2: Bottom-up Dynamic Programming

**Intuition**

In the previous approach, the recursive calls incurred stack space. We can avoid this by applying the same approach iteratively, which is often faster than the top-down approach. We will follow a similar approach to the previous one but in the reverse manner.

If we know that we can reach some position `x` and with the last jump as `prevJump`, then we can say that we can reach `{x + prevJump - 1, x + prevJump, x + prevJump + 1}` positions with updated last jump as `{prevJump - 1, prevJump, prevJump + 1}` respectively.

This is the primary observation we need to implement bottom-up dynamic programming. We start with `index` and `prevJump` as `0`; hence we mark `dp[0][0]` as `true`. Then we iterate over every possible value of the index as `index` and the previous jump as `prevJump`; if the value of `dp[index][prevJump]` is true, then we will try the three possible next jumps and mark their states `true` if the stones exist at those positions.

In the end, we will check if it's possible to reach the index `N - 1` with any value of the previous jump; if any of the values is true, we will return `true`, or `false` otherwise.

**Algorithm**

1. Create a map `mark` between the stone position to its `index `.
2. Initialize `dp[0][0]` to `true`.
3. Iterate over the indices from `0` to `N - 1`, and over the previous jump `prevJump` from `0` to `N - 1`, do the following for each pair:

   i. If the value of `dp[currIndex][prevJump]` is `true`, then check the three following possible positions of the frog, considering the previous jump as `prevJump`.
   ii. If the stones exist, mark the value at the corresponding indices in `dp` to `true`.
4.  In the end, check if any value with index as $N - 1$ is `true`; if yes, return `true`; otherwise `, false`.

**Implementation**

<iframe src="https://leetcode.com/playground/iScYm6J6/shared" frameBorder="0" width="100%" height="500" name="iScYm6J6"></iframe>

**Complexity Analysis**

Here, $N$ is the number of stones in the river.

* Time complexity: $O(N^2)$

  Each state is defined by the values `index` and `prevJump`. Hence, there will be $N^2$ possible states because both index and jump can take up to $N$ values, and we must visit these states to solve the original problem. Thus, the total time complexity equals $O(N^2)$.

* Space complexity: $O(N^2)$

  The size of the `dp` array is $N^2$; also, the size of the map `mark` is $N$ (although the keys are the values of the stone's position but the number of entries would be equal to the number of stones). Hence, the total space complexity would be $O(N^2)$.
  <br/>

---