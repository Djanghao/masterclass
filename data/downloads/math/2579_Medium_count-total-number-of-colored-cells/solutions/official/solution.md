# Official Solution

**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solution/](https://leetcode.com/problems/count-total-number-of-colored-cells/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a positive integer `n`, representing the number of minutes. At each minute, the following is performed in a grid:

1. **Minute One**: Color a unit cell blue.
2. **Every Minute Thereafter**: Color every uncolored cell that touches a blue cell.

Our task is to determine how many cells are colored after `n` minutes.

---

### Approach 1: Iterative Addition

#### Intuition

We want to find how many cells are colored blue after `n` iterations, so let's visualize some early iterations of `n`:

!?!../Documents/2579/slideshow.json:960,560!?!

From the first case, we see that when `n = 1`, there is only a single blue cell. At `n = 2`, we add four new cells around it, forming a cross-like structure. At `n = 3`, we add eight more cells around the previous structure, expanding outward. Observing this, we notice a clear pattern: each iteration adds a multiple of 4 new cells to the existing structure. Specifically, the number of cells added at each step follows the sequence: 4, 8, 12, 16, ..., increasing by 4 every time.

Now that we’ve identified this pattern, we can use it directly to compute the total number of blue cells for any given `n`. We start with `numBlueCells = 1`, representing the initial cell. Alongside this, we maintain a variable `addend`, which starts at 4 and increases by 4 after every iteration. In each step, we update `numBlueCells` by adding `addend`, then increment `addend` for the next step. Since we already accounted for `n = 1` in the initialization, we repeat this process for `n - 1` iterations.

#### Algorithm

- Initialize `numBlueCells` to `1` to track the number of colored cells.
- Initialize `addend` to `4` to represent how many colored cells are added in each iteration.
- Iterate `n - 1` times:
    - Increase `numBlueCells` by `addend`.
    - Increase `addend` by `4`.
- Return `numBlueCells`.

#### Implementation

<iframe src="https://leetcode.com/playground/ifixXaYH/shared" frameBorder="0" width="100%" height="310" name="ifixXaYH"></iframe>

#### Complexity Analysis

Let $N$ be the integer value of `n`.

* Time Complexity: $O(N)$

    We iterate through `n - 1` integers only once. In each iteration, all arithmetic operations are performed in constant time. This leads to an overall time complexity of $O(N - 1)$, which can be simplified to $O(N)$.
    
* Space Complexity: $O(1)$

    The space required does not depend on the size of the input value or any data structures that require additional space, so only constant $O(1)$ space is used.

---

### Approach 2: Mathematical Formula

#### Intuition

In the previous approach, we iterated `n - 1` times and added an increasing multiple of 4 in each step. This resulted in a linear time complexity, which is efficient for moderate values of `n` but can be avoided with a direct formula. Instead of looping, we want to express the total count of blue cells as a mathematical equation.  

From our earlier observations, we know that we start with a single blue cell and then successively add multiples of 4: first `4 × 1`, then `4 × 2`, then `4 × 3`, and so on, continuing for `n - 1` steps. This means the total count follows the sum:  

$1 + (4 \times 1) + (4 \times 2) + ... + (4 \times (n - 1))$  

Recognizing that the sum inside the parentheses is simply the arithmetic series $1 + 2 + ... + (n - 1)$, we use the formula for the sum of the first $m$ natural numbers:  

$1 + 4 \times \frac{(n - 1) \times n}{2}$  

Expanding and simplifying, we get:  

$1 + 2 \times (n - 1) \times n$

This formula allows us to immediately compute the answer, eliminating the need for iteration. We can now directly return the result in constant time using this equation.

#### Algorithm

- Return the number of colored cells using the formula `1 + n * (n - 1) * 2` to determine the total number of cells in an expanding diamond pattern.

#### Implementation

<iframe src="https://leetcode.com/playground/hgQ9BFZK/shared" frameBorder="0" width="100%" height="174" name="hgQ9BFZK"></iframe>

#### Complexity Analysis

Let $N$ be the integer value of `n`.

* Time Complexity: $O(1)$

    All arithmetic operations are performed in constant time, independent of the input value. This leads to an overall time complexity of $O(1)$.

* Space Complexity: $O(1)$

    The space required does not depend on the size of the input value or any data structures that require additional space, so only constant $O(1)$ space is used.

---