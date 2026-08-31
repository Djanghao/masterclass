# Official Solution

**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solution/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solution/)

---

[TOC]

---
### Approach #1: Dynamic Programming [Memory Limit Exceeded]

**Intuition**

Let `dp[n][k]` be the answer for adding `k` more gas stations to the first `n` intervals of stations.  We can develop a recurrence expressing `dp[n][k]` in terms of `dp[x][y]` with smaller `(x, y)`.

**Algorithm**

Say the `i`th interval is `deltas[i] = stations[i+1] - stations[i]`.  We want to find `dp[n+1][k]` as a recursion.  We can put `x` gas stations in the `n+1`th interval for a best distance of `deltas[n+1] / (x+1)`, then the rest of the intervals can be solved with an answer of `dp[n][k-x]`.  The answer is the minimum of these over all `x`.

From this recursion, we can develop a dynamic programming solution.


<iframe src="https://leetcode.com/playground/eUgJU22p/shared" frameBorder="0" width="100%" height="446" name="eUgJU22p"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N K^2)$$, where $$N$$ is the length of `stations`.

* Space Complexity: $$O(N K)$$, the size of `dp`.

---
### Approach #2: Brute Force [Time Limit Exceeded]

**Intuition**

As in *Approach #1*, let's look at `deltas`, the distances between adjacent gas stations.

Let's repeatedly add a gas station to the current largest interval, so that we add `K` of them total.  This greedy approach is correct because if we left it alone, then our answer never goes down from that point on.

**Algorithm**

To find the largest current interval, we keep track of how many parts `count[i]` the `i`th (original) interval has become.  (For example, if we added 2 gas stations to it total, there will be 3 parts.)  The new largest interval on this section of road will be `deltas[i] / count[i]`.


<iframe src="https://leetcode.com/playground/LWDyfjqM/shared" frameBorder="0" width="100%" height="500" name="LWDyfjqM"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N K)$$, where $$N$$ is the length of `stations`.

* Space Complexity: $$O(N)$$, the size of `deltas` and `count`.

---
### Approach #3: Heap [Time Limit Exceeded]

**Intuition**

Following the intuition of *Approach #2*, if we are taking a repeated maximum, we can replace this with a heap data structure, which performs repeated maximum more efficiently.

**Algorithm**

As in *Approach #2*, let's repeatedly add a gas station to the next larget interval `K` times.  We use a heap to know which interval is largest.  In Python, we use a negative priority to simulate a max heap with a min heap.

<iframe src="https://leetcode.com/playground/n8o75oEJ/shared" frameBorder="0" width="100%" height="361" name="n8o75oEJ"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of stations, and $$K$$ be the number of gas stations to add.

* Time Complexity:  $$O(N + K \log N)$$

    - First of all, we scan the stations to obtain a list of intervals between each adjacent stations.

    - Then it takes another $$O(N)$$ to build a heap out of the list of intervals.

    - Finally, we repeatedly pop out an element and push in a new element into the heap, which takes $$O(\log N)$$ respectively. In total, we repeat this step for $$K$$ times (_i.e._ to add $$K$$ gas stations).

    - To sum up, the overall time complexity of the algorithm is $$O(N) + O(N) + O(K \cdot \log N) = O(N + K\cdot \log N)$$.


* Space Complexity: $$O(N)$$, the size of `deltas` and `count`.


---

### Approach #4: Approach #3.5: Preprocessing + Heap + Greedy [Accepted]

#### Intuition

The heap-based approach from Approach #3 adds stations one by one, which can become inefficient when the number of new stations `K` is large. We can improve this by first making a conservative estimation of how many stations each interval should have based on an upper bound distance, and then refining the allocation greedily using a heap.

The idea is to first assume the maximum possible distance between any two stations, `D`, if there were no existing stations. This gives us an initial upper bound for the maximum allowed interval distance. Using this distance, we can estimate how many stations each current interval should get (using the floor division). This step distributes a large portion of stations efficiently in one pass.

Then, since this conservative distribution might not use all `K` stations, we use a max heap to distribute the remaining stations one by one to the intervals with the largest current distances. This ensures that the largest interval is always split next, minimizing the overall maximum distance.

---

#### Algorithm

1. Compute an initial upper bound for the maximum distance if there were no existing stations:
   $$
   D = \frac{stations[-1] - stations[0]}{K + 1}
   $$

2. For each interval `i` between consecutive stations:
   - Compute the interval length:
     $$
     L_i = stations[i+1] - stations[i]
     $$
   - Estimate the number of new stations conservatively:
     $$
     k_i = \lfloor \frac{L_i}{D} \rfloor
     $$
   - Compute the actual distance in this interval after adding `k_i` stations:
     $$
     d_i = \frac{L_i}{k_i + 1}
     $$
   - Decrease `K` by `k_i`, since those stations are now allocated.
   - Push `(-d_i, L_i, k_i)` into a max heap (negative distance used for max behavior).

3. While there are still remaining stations (`K > 0`):
   - Pop the interval with the largest current distance `d_i`.
   - Add one more station to it (`k_i += 1`).
   - Recompute the new distance for that interval:
     $$
     d_i = \frac{L_i}{k_i + 1}
     $$
   - Push the updated interval back into the heap.

4. The final answer is the largest remaining distance in the heap, i.e., `-heap[0][0]`.

<iframe src="https://leetcode.com/playground/5kLRZSRb/shared" frameBorder="0" width="100%" height="500" name="5kLRZSRb"></iframe>

#### Complexity Analysis

Let $N$ be the number of intervals.

- Time Complexity: $O(N \log N)$

    Preprocessing (initial conservative distribution): $O(N)$

    Building heap: $O(N)$

    Distributing remaining stations (each pop/push in $O(\log N)$): $O(N \log N)$ in total

- Space Complexity: $O(N)$

    We store up to $N$ intervals in the heap

---

### Approach #5: Binary Search [Accepted]

**Intuition**

Let's ask `possible(D)`: with `K` (or less) gas stations, can we make every adjacent distance between gas stations at most `D`?  This function is monotone, so we can apply a binary search to find $$D^{\text{*}}$$.

**Algorithm**

 More specifically, there exists some `D*` (the answer) for which `possible(d) = False` when `d < D*` and `possible(d) = True` when `d > D*`.  Binary searching a monotone function is a typical technique, so let's focus on the function `possible(D)`.

 When we have some interval like `X = stations[i+1] - stations[i]`, we'll need to use $$\lfloor \frac{X}{D} \rfloor$$ gas stations to ensure every subinterval has size less than `D`.  This is independent of other intervals, so in total we'll need to use $$\sum_i \lfloor \frac{X_i}{D} \rfloor$$ gas stations.  If this is at most `K`, then it is possible to make every adjacent distance between gas stations at most `D`.

<iframe src="https://leetcode.com/playground/XK7CQZMs/shared" frameBorder="0" width="100%" height="395" name="XK7CQZMs"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N \log W)$$, where $$N$$ is the length of `stations`, and $$W = 10^{14}$$ is the range of possible answers ($$10^8$$), divided by the acceptable level of precision ($$10^{-6}$$).

* Space Complexity: $$O(1)$$ in additional space complexity.