# Official Solution

**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solution/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solution/)

---

### Approach 1: Enumeration

#### Intuition

The problem gives an integer $n$ and requires returning the smallest numerically balanced number that is strictly greater than $n$. We can directly simulate this based on the problem’s requirements.

We observe that $0 \le n \le 10^6$. The maximum numerically balanced number we may need to consider is $1224444$, and this range can be explored within acceptable time limits.

We sequentially enumerate all integers greater than $n$, count the frequency of each digit, and determine whether the number is numerically balanced.

#### Implementation

<iframe src="https://leetcode.com/playground/YXqh5n3X/shared" frameBorder="0" width="100%" height="480" name="YXqh5n3X"></iframe>

#### Complexity Analysis

Let $C = 1224444$ be the largest possible numerically balanced number based on the given constraints.

- Time complexity: $O(C - n)$.

- Space complexity: $O(1)$.

### Approach 2: Lookup Table + Binary Search

#### Intuition

Using the code from the first approach, we can precompute and record all numerically balanced numbers.

Then, for a given input $n$, we perform a binary search to find the first numerically balanced number that is strictly greater than $n$.

#### Implementation

<iframe src="https://leetcode.com/playground/e6p25CWK/shared" frameBorder="0" width="100%" height="500" name="e6p25CWK"></iframe>

#### Complexity Analysis

Let $C = 110$ be the total number of precomputed numerically balanced numbers based on the problem’s constraints.

- Time complexity: $O(\textit{log} C)$.

- Space complexity: $O(C)$.

---