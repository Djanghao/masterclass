# Official Solution

**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solution/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solution/)

---

### Approach 1: Binary Search

#### Intuition

Since the fruit positions are already sorted in ascending order, we can efficiently determine how many fruits fall within any interval on the x-axis using binary search. The main challenge is to find the interval of positions that can be reached from `startPos` using at most $k$ steps, such that the total number of fruits collected is maximized.

We follow a greedy strategy, moving in one direction first and then turning around. This works because fruits can only be picked once, and covering a wider range increases the chance of collecting more fruits.

There are two main movement patterns:

- Move $x$ steps in one direction, then $k - x$ steps in the opposite direction.
- When $x = 0$, we simply move in one direction for $k$ steps.

For each $x$ in the range $[0, \left\lfloor \frac{k}{2} \right\rfloor]$, we consider:

1. Left-first movement: move left $x$ steps, then right $(k - x)$ steps. This covers the interval $[\textit{startPos} - x, \textit{startPos} + k - 2x]$.
2. Right-first movement: move right $x$ steps, then left $(k - x)$ steps. This covers the interval $[\textit{startPos} - (k - 2x), \textit{startPos} + x]$.

For each of these intervals, we compute the number of fruits using prefix sums and binary search in $O(\log n)$ time. The maximum value across all such intervals gives the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/RVS3qU6Q/shared" frameBorder="0" width="100%" height="500" name="RVS3qU6Q"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{fruits}$, and let $k$ be the given integer.

- Time complexity: $O(n + k \log n)$.
  
  The time complexity for calculating the prefix sum of the array is $O(n)$, and the time required for each query to find the number of fruits in a range is $O(\log n)$. Since there are a total of $k$ queries, the overall time complexity is $O(n + k \log n)$.

- Space complexity: $O(n)$.
  
  We calculate and store the prefix sum of the array, which requires $O(n)$ space.

---

### Approach 2: Sliding Window

#### Intuition

We can approach the problem from a new perspective. Suppose we fix an interval $[ \textit{left}, \textit{right} ]$ (where `left` and `right` are **indices** in the `fruits` array). From the given starting position `startPos`, how many steps are required to visit all fruit positions within this interval?

There are three cases to consider:

* **Case 1:** `startPos > fruits[right][0]`
  The interval lies entirely to the left of `startPos`. We need to move left to reach `fruits[left][0]`.
  Steps needed:

  $$
  \textit{startPos} - \textit{fruits[left][0]}
  $$

* **Case 2:** `startPos < fruits[left][0]`
  The interval lies entirely to the right of `startPos`. We need to move right to reach `fruits[right][0]`.
  Steps needed:

  $$
  \textit{fruits[right][0]} - \textit{startPos}
  $$

* **Case 3:** `startPos` is within the interval
  There are two ways to visit both ends:

  * Go left first to `fruits[left][0]`, then right to `fruits[right][0]`
    Steps:

    $$
    \textit{startPos} - \textit{fruits[left][0]} + \textit{fruits[right][0]} - \textit{fruits[left][0]}
    $$
  * Go right first to `fruits[right][0]`, then left to `fruits[left][0]`
    Steps:

    $$
    \textit{fruits[right][0]} - \textit{startPos} + \textit{fruits[right][0]} - \textit{fruits[left][0]}
    $$

So, in general, the minimum number of steps required to traverse the interval $[ \textit{fruits[left][0]}, \textit{fruits[right][0]} ]$ is:

$$
\text{step}(left, right) = \textit{fruits[right][0]} - \textit{fruits[left][0]} + \min\left( |\textit{startPos} - \textit{fruits[left][0]}|,\ |\textit{startPos} - \textit{fruits[right][0]}| \right)
$$

This expression ensures that we count both the total distance and the shorter leg from `startPos` to either end.

Now, if we fix `right` and slide `left`, we observe:

* If `fruits[left][0] < startPos`, decreasing `left` can decrease the `step` value.
* If `fruits[left][0] ≥ startPos`, decreasing `left` no longer helps and `step` stays the same or increases.

Thus, for fixed `right`, the `step(left, right)` function is non-increasing as long as `fruits[left][0] < startPos`, and non-decreasing afterward.

Thus, we use a sliding window where both `left` and `right` are pointers to intervals in the `fruits` array. As we move `right` forward to include more fruits, we check whether the number of steps needed to reach the interval exceeds `k`. If it does, we increment `left` to shrink the window until the constraint is satisfied. At each step, we track the sum of fruits in the valid window and update the maximum found so far.

#### Implementation

<iframe src="https://leetcode.com/playground/LtqkxpT2/shared" frameBorder="0" width="100%" height="500" name="LtqkxpT2"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{fruits}$.

- Time complexity: $O(n)$.
  
  Each time, we move the right endpoint of the fixed window and then try to move the left endpoint. The right endpoint can move at most $n$ times, and the left endpoint can also move at most $n$ times. Therefore, the time complexity is $O(2n) = O(n)$.

- Space complexity: $O(1)$.

---