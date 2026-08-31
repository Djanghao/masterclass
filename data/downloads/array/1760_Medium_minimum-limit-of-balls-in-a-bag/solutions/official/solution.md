# Official Solution

**Link:** [https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solution/](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer array `nums` representing a collection of bags that contain different numbers of balls. We are allowed to perform the following operation on any bag of our choosing up to `maxOperations` times:

1. Choose a bag from the array.
2. Split the balls in the chosen bag into two new bags (the total number of balls remains the same).
3. Add these two new bags to the array, replacing the original bag.

After applying the allowed operations, we receive a penalty equal to the highest number of balls in any single bag. Our goal is to choose how to split the bags in such a way that we receive the lowest penalty possible, and return that number. 

An intuitive but incorrect strategy would be to use all `maxOperations` operations to split the balls as much as possible. This would result in a final array of length $n + maxOperations$ since each operation adds one additional bag to the array.

According to this strategy, we would attempt to evenly distribute all balls across the $n + maxOperations$ available bags. Therefore, the expected result would be:

$$
\begin{aligned}
    \frac{\text{Total balls}}{n  + \text{maxOperations}}.
\end{aligned}
$$

However, this approach fails because we are only permitted to split an existing bag into two new bags. We are not permitted to distribute balls into other existing bags.

![Wrong Approach](../Figures/1760/1760_wrong_approach.png)

### Approach: Binary Search on The Answer

#### Intuition

Let’s make some simple observations: the largest possible penalty can’t be less than 1 or more than the largest value in `nums`. We need to find our answer within that range. We can also observe that:

- if it’s not possible to achieve a certain penalty with the allowed number of operations, we won’t be able to achieve a lower penalty than that. 
- if it’s possible to achieve a certain penalty with less than the allowed number of operations, we can ultimately achieve an unknown lower penalty. 

This understanding reveals a monotonic relationship between the number of operations we are allowed to perform and the size of the penalty.

Now, one inefficient way to solve this problem would be to check each possible value from least to greatest until we find the lowest achievable value given the number of allowed operations. Is there a way we can more efficiently pick which values to test?

Whenever we see a phrase like "maximize the minimum" or "minimize the maximum", the natural approach to solve the problem is binary search on the answer. Aditionally binary search works best when you can formulate the problem as a "yes/no" decision and when there’s a clear order to the possible answers. In this case, the question becomes: "Can we split the bags so that no bag contains more than `maxBallsInBag` balls, performing at most `maxOperations` operations?"

This monotonic property allows us to leverage binary search to efficiently narrow down the range of possible penalties. By checking the middle value in our current range, we can determine whether a given penalty is achievable. If it is, then any larger penalty will also be achievable, and if it is not, smaller penalties will not be achievable either.

> For a more comprehensive understanding of binary search, check out the [Binary Search Explore Card 🔗](https://leetcode.com/explore/learn/card/binary-search/). This resource provides an in-depth look at binary search, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

By repeatedly halving the search space based on whether the current penalty is achievable or not, we can quickly converge to the smallest penalty that can be achieved within the allowed operations. This allows us to find the optimal penalty in logarithmic time relative to the size of the range, making the solution much more efficient than testing each possibility one by one.

Now, how will we determine whether a particular target is achievable?

1. Reducing the number of balls in a bag: We can split a bag with `nums[i]` balls into smaller bags. After $operations_i$ splits, the original bag is replaced with $operations_i + 1$ smaller bags.

2. Checking if the target is achievable: After all operations have been applied, all bags must have a number of balls less than or equal to the target we are testing. Mathematically:

    $$
    \begin{aligned}
        \text{nums}[i] \leq (\text{operations}_i + 1) \cdot \text{maxBallsInBag}
    \end{aligned}
    $$

3. Calculating the number of splits (`operations_i`) required to achieve the target: Solving for $operations_i$, we get:

    $$
    \begin{aligned}
        \text{operations}_i = \lceil \frac{\text{nums}[i]}{\text{maxBallsInBag}} \rceil - 1
    \end{aligned}
    $$

    This tells us the minimum splits needed to ensure no smaller bag exceeds `maxBallsInBag`.

4. Checking if the plan works: If the total operations (i.e., the sum of $operations_i$ for all `i`) is less than `maxOperations`, a split is possible. Otherwise, it isn't.

The example below illustrates the monotonic relationship between the number of operations we are allowed to perform and the minimum maximum number of balls in any bag. The answer (`result`) is found by performing a binary search on the values of the horizontal axis.

![Monotonic Graph](../Figures/1760/1760_monotonic_graph.png)

##### Why the Heap Approach Doesn’t Work ?

One might consider a priority queue (or max-heap) approach where we repeatedly split the largest bag to minimize the maximum size. While this approach works for many greedy problems, it doesn’t work here as it doesn’t guarantee an optimal distribution of the balls.

With some changes, it is possible to use a heap if we write a custom comparison function. Specifically, we can represent each element in the heap as a pair: the first value is the number of balls in a bag, and the second value is the number of divisions we have made. The heap can then prioritize the division ratio by comparing the number of balls each bag will have after further division.

However, this approach fails under the problem’s constraints. If we attempt to perform operations like dividing the largest element and updating the heap, the constraints (with `nums` potentially containing up to $10^5$ elements and values up to $10^9$) would cause a Time Limit Exceeded (TLE) error.

If the constraints were reversed — say, if we had larger elements ($10^9$) but fewer values ($10^5$) — the heap approach would be the perfect approach. So with the current constraints, binary search remains the most efficient solution.

#### Algorithm

-   Define a function `isPossible`, which takes an integer `maxBallsInBag`, the `nums` array, and `maxOperations` as parameters and returns a boolean, indicating whether it’s possible to split the balls such that no bag contains more than `maxBallsinBag` balls.
    -   Initialize an integer `totalOperations` to `0`.
    -   Loop through each bag with `i` from `0` to `n - 1`:
        -   Calculate the operations needed for the `i`-th bag: `operations = ceil(nums[i] / maxBallsInBag) - 1`.
        -   Add `operations` to `totalOperations`.
        -   Check if `totalOperations > maxOperations`. If so, a distribution is impossible; return `false`.
    -   If the loop ends without returning `false`, the balls can be split satisfying the constraint, so return `true`.
-   In the `minimumSize` main function:
    -   Initialize the boundaries of the binary search: `left = 1` and `right = max(nums[i])`.
    -   While `left < right`:
        -   Set `middle = (left + right) / 2`.
        -   Check whether balls can be split with no bag finally containing more than `middle` products, using the `isPossible` function.
            -   If this condition is `true`, set `right = middle`.
            -   Otherwise, set `left = middle + 1`.
    -   When the loop ends, `left == right`, so return `left`.

#### Implementation

<iframe src="https://leetcode.com/playground/XLWxAKon/shared" frameBorder="0" width="100%" height="500" name="XLWxAKon"></iframe>

#### Complexity Analysis

Let $k$ be the maximum value in the `nums` array.

-   Time complexity: $O(n \log k)$

    The `isPossible` function iterates through the `n` bags, executing constant-time operations during each iteration. As a result, its time complexity is $O(n)$.

    The main function, `minimumSize`, performs a binary search over the range $(1, k)$, calling in each iteration the `canDistribute` function. Since the binary search runs in $O(\log k)$ time, the overall time complexity of the `minimumSize` function is $O(n \log k)$.

-   Space complexity: $O(1)$

    We only use a fixed number of integer variables, which doesn't depend on the input size.

---