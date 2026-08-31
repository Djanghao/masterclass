# Official Solution

**Link:** [https://leetcode.com/problems/count-symmetric-integers/solution/](https://leetcode.com/problems/count-symmetric-integers/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Enumeration

#### Intuition

Enumerate all numbers from $\textit{low}$ to $\textit{high}$:

- If it is a two-digit number and is a multiple of 11, then it is a symmetric integer.
- If it is a four-digit number, calculate the sum of the thousands and hundreds digits, as well as the sum of the tens and ones digits. If they are equal, it is a symmetric (even) integer.

Finally, it returns the number of symmetric integers in the range.

#### Implementation

<iframe src="https://leetcode.com/playground/6w2c4s5k/shared" frameBorder="0" width="100%" height="361" name="6w2c4s5k"></iframe>

#### Complexity Analysis

- Time complexity: $O(high - low)$.

We enumerate all numbers from $\textit{low}$ to $\textit{high}$ and check whether they are symmetric integers in $O(1)$ each time.

- Space complexity: $O(1)$.

Only a few additional variables are needed.