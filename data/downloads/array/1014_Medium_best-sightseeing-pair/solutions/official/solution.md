# Official Solution

**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solution/](https://leetcode.com/problems/best-sightseeing-pair/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array `values`, where each element represents the value of a sightseeing spot. Our task is to find the *best sightseeing pair* of spots. This means selecting two indices of the array, $i$ and $j$ ($i < j$) such that the score of the pair, calculated as $values[i] + values[j] + i - j$ is the highest possible.

A naive way to approach the problem would involve going over all pairs of spots, calculating their score using the above formula and returning the highest of these scores. However, this solution requires a nested loop over the array, resulting in a time complexity of $O(n^2)$, which is inefficient for the given constraints.

---

### Approach 1: Dynamic Programming

#### Intuition

First, we observe that each element `values[i]`, can be part of the score in two ways:  
- As the **left element**: it adds `values[i] + i` to the score.  
- As the **right element**: it adds `values[i] - i` to the score.

Now, let's fix the **right element** at position `j`. To get the best score, we need to find a **left element** at some position `i` (where `i < j`) that gives the biggest value for `values[i] + i`. 

To do so, we need to calculate this value for all indices up to `j` and get the highest of these. Now, we have to check whether the index `j + 1` is a better right spot than index `j`. What should we do? Is it necessary to go over the array again and compare the left-scores for all indices $0, 1, ..., j$ or is there a better strategy? 

Instead of recalculating the best `values[i] + i` for each new `j` from scratch, we can keep track of the highest `values[i] + i` encountered as we advance through the array. This way, we reuse the results computed in earlier steps rather than re-examining the entire array every time. Recognizing that we can reuse results from earlier steps reveals the overlapping states of the problem and helps us land at a dynamic programming approach.

> **Dynamic Programming**: For a more comprehensive understanding of dynamic programming, check out the [Dynamic Programming Explore Card 🔗](https://leetcode.com/explore/learn/card/dynamic-programming/). This resource provides an in-depth look at dynamic programming, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize an array `maxLeftScore` of size `n` to store the maximum left scores up to each index.
  - Set `maxLeftScore[0]` to `values[0]` because the left score at the first index is simply the value of the first element.

- Initialize `maxScore` to 0 to keep track of the maximum score of sightseeing pairs.

- Iterate through the array from index `1` to `n - 1`:
  - Calculate the current right score for the sightseeing pair as `values[i] - i`.
  - Update `maxScore` by combining the best left score so far (`maxLeftScore[i - 1]`) with the current right score.
  - Calculate the current left score as `values[i] + i`.
  - Update `maxLeftScore[i]` to be the maximum of `maxLeftScore[i - 1]` and `currentLeftScore`, ensuring it stores the best left score up to the current index.

- After completing the iteration, return `maxScore`, which contains the maximum sightseeing pair score.

#### Implementation

<iframe src="https://leetcode.com/playground/CY8ge3c3/shared" frameBorder="0" width="100%" height="500" name="CY8ge3c3"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

- Time complexity: $O(n)$

    We loop over the array once and perform constant-time operations on each iteration. Therefore, the time complexity of the algorithm is $O(n)$.

- Space complexity: $O(n)$

    We are creating an array `maxLeftScore` of size $n$ to store the maximum left-score up to each index. That's why the algorithm requires $O(n)$ extra space.

---

### Approach 2: Space-Optimized DP

#### Intuition

Building on the previous approach, we observe that the calculations for each array element depend only on the stored score of the previous element. This means that once `maxLeftScore[i]` is computed, earlier values in the DP table become useless, resulting in wasted memory. 

To tackle this, we can replace the entire `maxLeftScores` array with a single variable to store the most recently calculated value.

#### Algorithm

- Initialize `maxLeftScore` with the value of the first element in the `values` array (this represents the best score for the left side at the start).
- Initialize `maxScore` to 0 to keep track of the maximum score of sightseeing pairs.

- Iterate through the array from index `1` to `n - 1`:
  - Calculate the current right score for the sightseeing pair as `values[i] - i`.
  - Update `maxScore` by combining the best left score so far (`maxLeftScore`) with the current right score.
  - Calculate the current left score as `values[i] + i`.
  - Update `maxLeftScore` to be the maximum of `maxLeftScore` and `currentLeftScore`, ensuring it stores the best left score up to the current index.

- After completing the iteration, return `maxScore`, which contains the maximum sightseeing pair score.

#### Implementation

<iframe src="https://leetcode.com/playground/jAxGaKxu/shared" frameBorder="0" width="100%" height="463" name="jAxGaKxu"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

- Time complexity: $O(n)$

    Just like the previous approach, the single loop over the `values` array costs $O(n)$ time.

- Space complexity: $O(1)$

    We are only using a fixed number of variables, so the algorithm requires constant extra space.

---