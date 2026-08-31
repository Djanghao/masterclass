# Official Solution

**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solution/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer `n` and need to determine if it can be written as a sum of **distinct** powers of $3$. In other words, we want to know if we can choose some of the numbers $3^0, 3^1, 3^2, ...$, each used at most once, such that their sum equals `n`. A generalized mathematical way to express this is:

$n = 3^{a_1} + 3^{a_2} + \dots + 3^{a_k}$

where all exponents $a_1, a_2, \dots, a_k$ are unique and non-negative.  

We need to return `true` if such a sum exists, otherwise `false`.

---

### Approach 1: Backtracking (Brute Force)

#### Intuition

An important observation is that we never need to use a power of $3$ larger than the given integer $n$, since that would immediately make the sum greater than $n$. Since $n$ can be as large as $10^7$, the largest power of $3$ we need to check is around $3^{15}$, because $\log_3{10^7} \approx 15$.

Given this, we can use a backtracking approach to explore all possible ways to represent $n$ as a sum of distinct powers of $3$. At each step, we consider whether to include or exclude the current power $3^{\text{power}}$ in our sum. For a given exponent $\text{power}$, we have two choices:

- Include $3^{\text{power}}$, reducing our target to $n - 3^{\text{power}}$ and proceeding to the next exponent.
- Skip $3^{\text{power}}$ and try to form $n$ using only higher powers.

This is implemented using a recursive function `checkPowersOfThreeHelper(power, n)`, which makes two calls:

- `checkPowersOfThreeHelper(power + 1, n - 3^power)`, attempting to include $3^{\text{power}}$.
- `checkPowersOfThreeHelper(power + 1, n)`, skipping $3^{\text{power}}$.

The base cases are simple:

- If `n == 0`, we return `true` because we have successfully expressed `n` as a sum of distinct powers of $3$.
- If $3^{\text{power}}$ exceeds `n`, we return `false` since no larger power can contribute.

Finally, if either recursive call returns `true`, we conclude that $n$ can be formed using distinct powers of $3$.

> In case you are not familiar with backtracking, feel free to refer to [Backtracking Explore Card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/) to gain a better understanding of the topic.

#### Algorithm

-   Define a helper function `checkPowersOfThreeHelper(power, n)`.
    -   Base cases:
        -   If `n = 0`, return `true`.
        -   If `n < pow(3, power)`, return `false`, as the sum of any of the larger powers will exceed `n`.
    -   Recursive cases:
        -   Find `addPower` as the result of `checkPowersOfThreeHelper(power + 1, n - pow(3, power))`.
        -   Find `skipPower` as the result of `checkPowersOfThreeHelper(power + 1, n)`.
    -   Return `true` if either call returns `true`, i.e. return `addPower || skipPower`.
-   In the main `checkPowersOfThree(n)` function:
    -   Return the result of `checkPowersOfThreeHelper(0, n)`.

#### Implementation

<iframe src="https://leetcode.com/playground/GWwJdhuh/shared" frameBorder="0" width="100%" height="497" name="GWwJdhuh"></iframe>

#### Complexity Analysis

-   Time complexity: $O(2^{\log_3{n}})$ or $O(n)$

    Since we only consider the powers of $3$ that are at most equal to $n$, there are $O(\log_3 n)$ candidate powers. For each candidate power, we explore two possibilities: including it in the sum or excluding it. This leads to a binary recursion tree, where each node corresponds to one of the choices (include or exclude) for a given power of $3$. The depth of this tree is $O(\log_3 n)$, and each recursive call performs a constant amount of work: checking the base cases and returning the logical OR of two boolean values.

    Thus, the overall time complexity is $O(2^{\log_3 n})$, which simplifies to $O(n)$ (as $2^{\log_3 n}$ is equivalent to $n^{\log_3 2}$).

-   Space complexity: $O(\log_3 n)$

    The space complexity is primarily dominated by the recursion stack. Since the recursion may need to explore all possible powers before returning, the depth of the recursion stack can grow up to $O(\log_3 n)$. Apart from a few variables that only require constant space, no additional data structures are created. Therefore, the auxiliary space complexity of the algorithm is $O(\log_3 n)$.

---

### Approach 2: Optimized Iterative Approach

#### Intuition

To optimize the previous approach, we aim to reduce the number of cases the algorithm checks. We can simplify the process by working in reverse, starting with the larger powers of $3$. If $n$ is greater than or equal to the current power, skipping this power will always lead to a `false` result. This is because the largest sum we can achieve with smaller powers is the sum of all lower powers, which is always less than the current power. So, if we skip this power, we can’t form the sum $n$, and we must include it by subtracting it from $n$.

> **Useful formula**: $3^0 + 3^1 + 3^2 + ... + 3^{n - 1} = \frac{3^{n} - 1}{2} < 3^{n}$

If $n$ is still greater than the current power after this, we would have to add it to the sum again. However, we can only use each power of $3$ once, so we return `false` in this case.

If at any point $n$ becomes $0$, it means we can write $n$ as a sum of distinct powers of $3$, and we return `true`.

#### Algorithm

-   Initialize `power` to `0`.
-   Find the largest power of `3` that is smaller or equal to `n`: 
    -   While `pow(3, power + 1) <= n`, increment `power` by `1`.
-   While `n` is greater than `0`:
    -   If `n` is greater than or equal to `pow(3, power)`, add `pow(3, power)` to the sum, by subtracting it from `n`.
    -   If `n` is still greater than or equal to `pow(3, power)`, return `false`, as we cannot use the same power twice.
    -   Decrement `power` by `1` to move to the next lower power.
-   Return `true`, as `n` has reached `0`.

#### Implementation

<iframe src="https://leetcode.com/playground/MtoRW4zd/shared" frameBorder="0" width="100%" height="500" name="MtoRW4zd"></iframe>

#### Complexity Analysis

-   Time complexity: $O(\log_3{n})$

    We iterate through all candidate powers of $3$, determining in constant time whether each should be included in the sum. Since the number of possible powers is $O(\log_3 n)$, both finding the largest power and checking which ones contribute to the sum take $O(\log_3 n)$. Therefore, the overall time complexity of the algorithm is $O(\log_3 n)$.

-   Space complexity: $O(1)$

    The algorithm only uses a constant amount of space for variables (`power`), and therefore, the space complexity is $O(1)$.

---

### Approach 3: Ternary Representation

#### Intuition

First, let's break the problem down into a more familiar one. We know that every number can be written as a sum of distinct powers of $2$ — in other words, every number has a unique binary representation. A simple way to find the binary representation of a number is by repeatedly taking its remainder when divided by $2$ (mod $2$) and then dividing the number by $2$ to move to the next bit. This method is similar to the two’s complement approach.

In this problem, we apply the same logic but in base $3$ instead of base $2$. We construct the ternary representation of the given number by taking its remainder when divided by $3$ (mod $3$) and then dividing it by $3$ to proceed to the next digit. If any of these remainders equals $2$, we would need to use a power of $3$ twice, which is not allowed. In that case, we immediately return `false`.

#### Algorithm

-   While `n` is greater than `0`:
    -   If `n % 3 == 2`, we would have to use the current power twice, so return `false`.
    -   Divide `n` by `3`.
-   If the loop ends without returning `false`, it means that `n` has a ternary representation consisting only of `0` and `1`, so it can be written as a sum of distinct powers of `3`; return `true`.

#### Implementation

<iframe src="https://leetcode.com/playground/X9rhAWFK/shared" frameBorder="0" width="100%" height="310" name="X9rhAWFK"></iframe>

#### Complexity Analysis

-   Time complexity: $O(\log_3{n})$

    We enter a loop where we constantly divide $n$ by $3$ until it reaches $0$. The loop will run at most $O(\log_3 n)$ times and each iteration performs only constant time operations (modulo, equality check, and division), therefore the total time complexity is $O(\log_3 n)$.

-   Space complexity: $O(1)$

    The algorithm does not use any additional space for data structures or recursion and therefore its space complexity is constant ($O(1)$).

---