# Official Solution

**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solution/](https://leetcode.com/problems/minimum-time-to-repair-cars/solution/)

---

## Solution

---

### Overview

We are given an array `ranks`, where `ranks[i]` represents the efficiency of the `i`-th mechanic. A mechanic with a rank `r` repairs `n` cars in `r * n^2` minutes, meaning the time required increases quadratically as more cars are assigned to a single mechanic. We also have an integer `cars`, representing the total number of cars that need to be repaired. The goal is to determine the minimum possible time required to repair all cars if all mechanics work simultaneously.  

To understand the problem, consider the example where `ranks = [4,2,3,1]` and `cars = 10`. The optimal allocation would be:  
- The first mechanic (rank `4`) repairs `2` cars, taking $4 * 2^2 = 16$ minutes. 
- The second mechanic (rank `2`) repairs `2` cars, taking $2 * 2^2 = 8$ minutes. 
- The third mechanic (rank `3`) repairs `2` cars, taking $3 * 2^2 = 12$ minutes. 
- The fourth mechanic (rank `1`) repairs `4` cars, taking $1 * 4^2 = 16$ minutes. 

Since all mechanics work in parallel, the total time required is determined by the slowest mechanic in the optimal assignment, which is `16` minutes.

The problem essentially boils down to distributing the cars optimally among the mechanics so that the maximum repair time (the slowest mechanic) is minimized. Another way to say this is that a mechanic with a lower rank (higher skill) can repair cars faster than one with a higher rank. A brute force approach of checking every possible distribution would be highly inefficient, so we need a smarter strategy.

A common mistake is misunderstanding how parallel execution works. Instead of focusing on the slowest mechanic, some mistakenly add up all the repair times, as if the tasks were done sequentially. This misinterpretation leads to incorrect conclusions about the total time required.  

Another mistake is assuming dynamic programming (DP) is always the right approach for optimization problems. When faced with minimization or maximization, our first instinct might be to reach for DP. However, before committing to it, we need to check the constraints. If the problem lacks overlapping subproblems or an optimal substructure, DP may not be a suitable choice.

In this problem, we are given:  
- `ranks.length` can be up to $10^5$ 
- `cars` can be up to $10^6$

A typical DP solution would require a state representation like `dp[mechanic][car]`. The time complexity would then be $O(n \cdot cars)$, which in the worst case is $10^5 × 10^6 = 10^{11}$ operations. This is far too large to be computationally feasible.  

A good approach here can be to use binary search, as it provides a more natural way to minimize the maximum time while still efficiently distributing cars. We will talk about it more in [approach one](#approach-1-binary-search-on-time).

> Takeaway Tip: When deciding on an approach, always check the constraints first. If `n` and `cars` are large (in the range of $10^5$ to $10^6$), DP is usually not feasible. Instead, binary search, greedy, or two pointers are more likely to work in such cases.

---

### Approach 1: Binary Search on Time

#### Intuition

Given the relationship that a mechanic with a lower rank (higher skill) can repair cars faster than one with a higher rank, the key observation is that if we fix a certain amount of time `t`, we can determine how many cars can be repaired within `t` by all available mechanics. Since we want the minimum possible time to repair all cars, we can apply binary search on the time.

More technically, given a fixed time `t`, we can determine how many cars can be repaired within that time using a simple formula. But how do we actually find the smallest `t` that allows all cars to be repaired?

We observe that if a given time `t` is sufficient to repair all cars, then any time greater than `t` will also be sufficient. Conversely, if `t` is not enough, then any time smaller than `t` will also fail. 

This forms a monotonic relationship: 
- If `t` is too small, increasing `t` will eventually make it work.
- If `t` is large enough, decreasing `t` will still work until we hit the minimum threshold.

This kind of "yes/no" behavior, where a function transitions from failure to success at a specific boundary, is exactly when binary search is useful. Instead of checking every possible value of `t` from `1` to `minRank * cars^2`, we can narrow down the search space logarithmically.

We define our search space based on the slowest possible case. The minimum possible time is `1`, and the maximum time is when the slowest mechanic (one with the lowest rank) repairs all cars alone. This worst-case scenario takes `minRank * cars^2` time.
 
We perform **binary search** over this time range. For each candidate time $\text{mid}$, we check how many cars can be repaired within $\text{mid}$.  

Since the time required by a mechanic with rank `r` to repair `n` cars follows the formula:

$T = r \cdot n^2$

We need to determine the maximum number of cars a mechanic can repair within $\text{mid}$, which means solving:

$r \cdot n^2 \leq \text{mid}$

Solving for `n`:

$n \leq \sqrt{\frac{\text{mid}}{r}}$

Thus, for each mechanic with rank `r`, the maximum number of cars they can repair within $\text{mid}$ is:

$\lfloor \sqrt{\frac{\text{mid}}{r}} \rfloor$

We sum up the number of cars each mechanic can repair and compare it with the required number of cars. If the total is at least the required number, we adjust our binary search range accordingly.

If the total number of repaired cars is at least the required number of cars, it means we might be able to complete all repairs in a smaller time, so we move left in the binary search by setting `high = mid`. Otherwise, if the number of repaired cars is too low, we need more time, so we move right by setting `low = mid + 1`.
 
To implement, we first determine the smallest rank among all mechanics since it defines our upper bound (`minRank * cars^2`). Then, we maintain a frequency array `freq` to count how many mechanics have each rank, which allows us to efficiently compute the total number of repaired cars at any given time.

We initialize `low = 1` and `high = minRank * cars^2`, then apply binary search. For each `mid` value, we iterate over all possible ranks (from `1` to `maxRank`) and compute how many cars can be repaired by mechanics of that rank using `sqrt(mid / r)`. If the total repaired cars meet or exceed the requirement, we shrink the search space (`high = mid`). Otherwise, we expand it (`low = mid + 1`).

Once the binary search terminates, `low` contains the minimum time required to repair all cars.

The algorithm is visualized below:

![Binary_approach1](../Figures/2594/Binary_approach1.png)

> For a more comprehensive understanding of binary search, check out the [Binary Search Explore Card 🔗](https://leetcode.com/explore/learn/card/binary-search/). This resource provides an in-depth look at binary search, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize `minRank` to track the minimum rank in `ranks`.
- Initialize `freq` array of size `101` to count the number of mechanics with each rank.

- Iterate through `ranks`:
  - Update `minRank` with the smallest rank encountered.
  - Increment `freq` at index `rank` to track the count of mechanics with that rank.

- Set `low` to `1` (minimum possible repair time).
- Set `high` to `minRank * cars * cars` (worst-case longest repair time).

- Perform binary search while `low < high`:
  - Compute `mid` as the middle value between `low` and `high`.
  - Initialize `carsRepaired` to count total cars repaired in `mid` time.

  - Iterate through possible ranks from `1` to `maxRank + 1`:
    - Calculate the number of cars repaired by mechanics of each rank.
    - Use `freq[rank] * sqrt(mid / rank)` to compute repairs.

  - If `carsRepaired` is at least `cars`, update `high = mid` to find a smaller valid time.
  - Else, update `low = mid + 1` since more time is needed.

- Return `low`, the minimum time required to repair all cars.

#### Implementation

> **Fun Tip:** The maximum possible `maxRank` is 100, so we can also hardcode the frequency array size to 101 instead of dynamically allocating it as `maxRank + 1`.

<iframe src="https://leetcode.com/playground/PG5i8Xjo/shared" frameBorder="0" width="100%" height="500" name="PG5i8Xjo"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `ranks` array, $m$ be the number of cars (`cars`).

- Time Complexity: $O(n + \text{max\_rank} \log (m \cdot \text{max\_rank}))$

    The algorithm starts by iterating through the `ranks` array to compute the minimum rank and build a frequency array. This step takes $O(n)$ time, as it involves a single pass over the array. Next, the algorithm performs a binary search over the possible time range, which spans from 1 to $1L \cdot \text{minRank} \cdot m \cdot m$. The binary search runs in $O(\log (m \cdot \text{max\_rank}))$ iterations, where $\text{max\_rank}$ is the maximum rank in the `ranks` array. 

    For each iteration of the binary search, the algorithm calculates the total number of cars that can be repaired in `mid` time. This involves iterating over the frequency array which has a fixed size of $\text{max\_rank}$ and computing the square root of the ratio of `mid` to the rank for each entry. This computation takes $O(\text{max\_rank})$ time per iteration. Combining these steps, the overall time complexity is $O(n + \text{max\_rank} \log (m \cdot \text{max\_rank}))$.

- Space Complexity: $O(\text{max\_rank})$

    The algorithm uses a frequency array of size $\text{max\_rank}$ to store the count of mechanics for each rank. This array occupies $O(\text{max\_rank})$ space. Additionally, a few variables are used for the binary search (`low`, `high`, `mid`, `carsRepaired`) and for storing the minimum rank, all of which require constant space, $O(1)$. Thus, the overall space complexity is $O(\text{max\_rank})$.

---

### Approach 2: Space Optimized Binary Search

#### Intuition

In the previous approach, we precomputed the smallest rank and used a frequency array to count how many mechanics had each rank. The idea behind this was to speed up the calculation of how many cars could be repaired in a given time. However, this extra bookkeeping can be removed if we want to space optimize it because we can determine the number of cars repaired directly by iterating over the `ranks` array. 

More specifically, instead of grouping mechanics by rank and iterating over a fixed range of possible ranks (from `1` to `100`), we can simply iterate over the given ranks and compute the number of cars each mechanic can repair on the fly. This removes the processing and makes the solution more straightforward while maintaining the same logic.  

With this optimization in mind, we keep the core idea of binary search on time. The search space remains the same: the lower bound is `1`, representing the smallest unit of time, while the upper bound is `ranks[0] * cars^2`, representing the worst-case scenario where the slowest mechanic repairs all cars alone.

For a given `mid` time, we compute how many cars can be repaired by summing up contributions from all mechanics. The number of cars a mechanic with rank `r` can repair within `mid` time is given by `n ≤ sqrt(mid / r)`, since repairing `n` cars requires `r * n^2` time. By iterating over the `ranks` array and applying this formula to each mechanic, we calculate the total number of repaired cars and compare it with the required amount.

If the total number of repaired cars is less than the required amount, it means `mid` is too small, so we increase `low` (`low = mid + 1`). Otherwise, if the total is at least the required amount, we try to minimize the repair time by decreasing `high` (`high = mid`).  
 
#### Algorithm

- Set `low` to `1`, the minimum possible repair time.
- Set `high` to `ranks[0] * cars * cars`, the worst-case maximum repair time.

- Perform binary search while `low < high`:
  - Compute `mid` as the middle value between `low` and `high`.
  - Initialize `carsRepaired` to count total cars repaired in `mid` time.

  - Iterate through `ranks`:
    - Calculate the number of cars repaired by each mechanic using `sqrt(mid / rank)`.
    - Accumulate the total `carsRepaired`.

  - If `carsRepaired` is less than `cars`, update `low = mid + 1` since more time is needed.
  - Else, update `high = mid` to search for a smaller valid time.

- Return `low`, the minimum time required to repair all cars.

#### Implementation

<iframe src="https://leetcode.com/playground/PSqauVuG/shared" frameBorder="0" width="100%" height="500" name="PSqauVuG"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `ranks` array, $m$ be the number of cars (`cars`), and $k$ be the maximum possible rank (`100` in this case).

- Time Complexity: $O(n \cdot \log (m \cdot \text{max\_rank}))$  

    The algorithm performs a binary search over the possible time range, which takes $O(\log (m \cdot \text{max\_rank}))$ iterations. For each iteration, it calculates the number of cars that can be repaired in $O(n)$ time by iterating over the `ranks` array. The overall time complexity is $O(n \cdot \log (m \cdot \text{max\_rank}))$.

- Space Complexity: $O(1)$  

    The algorithm uses only a constant amount of extra space for variables, resulting in $O(1)$ space complexity. No additional data structures are used.

---

### Approach 3: Using Heap

#### Intuition

Instead of using binary search, we can directly simulate the car repair process using a min-heap to always prioritize the mechanic who can complete the next repair in the shortest possible time. Since each mechanic follows the formula `time = rank * n^2` to determine how long it takes to repair their `k`-th car, we can predict the sequence of repair times for each mechanic. The first car takes `rank * 1^2 = rank` time, the second car takes `rank * 4` time, the third car takes `rank * 9` time, and so on.  

Given this pattern, at any moment, the mechanic who will finish the next repair the fastest should be chosen to repair the next car. The most efficient way to track the next available repair time for all mechanics is to use a min-heap, where each entry stores the next repair time for a mechanic, their rank (to calculate future repair times), the number of cars they have already repaired, and the count of mechanics with that rank (since multiple mechanics can have the same rank).  

We begin by initializing the heap with the first repair time for each unique rank. If multiple mechanics share the same rank, we keep track of how many exist. Then, we repeatedly extract the mechanic with the earliest repair time and assign them the next car to repair. Once a mechanic repairs a car, we compute their next available repair time using the formula `time = rank * (n + 1)^2`, then push this new time back into the heap. This process continues until all cars are repaired.  

By always selecting the fastest available repair, we ensure that the total time remains minimal while efficiently distributing the workload among mechanics. Since each mechanic’s repair time follows a monotonically increasing pattern, the heap naturally maintains the correct ordering.

#### Algorithm

- Count the frequency of each rank to determine how many mechanics have each rank.

- Initialize a min-heap (`minHeap`) with elements `[time, rank, n, count[rank]]`:
  - `time`: time needed for the next repair (initially `rank * 1^2 = rank`).
  - `rank`: the mechanic's rank.
  - `n`: the number of cars repaired so far by this mechanic (initially 1).
  - `count`: the number of mechanics with this rank.

- Convert `minHeap` into a valid heap to ensure the smallest repair time is at the root.

- While there are cars left to repair:
  - Pop the mechanic with the smallest current repair time from `minHeap`.
  - Deduct the number of cars repaired by this mechanic group from `cars`.
  - Increment the number of cars repaired by this mechanic (`n += 1`).
  - Calculate the next repair time using the formula `rank * n^2`.
  - Push the updated mechanic's info back into the heap to continue tracking their repair time.

- Return the time of the last repair, which is the minimum time needed to repair all cars.

#### Implementation

<iframe src="https://leetcode.com/playground/RgUokLRJ/shared" frameBorder="0" width="100%" height="500" name="RgUokLRJ"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `ranks` array, $m$ be the number of cars (`cars`), and $k$ be the maximum possible rank (`100` in this case).

- Time Complexity: $O(n + m \log k)$

    The algorithm begins by counting the frequency of each rank using a `Counter`. This step takes $O(n)$ time, as it involves iterating through the `rank` array once. Next, a min-heap is initialized with the unique ranks and their frequencies. The heap initially contains at most $k$ elements, and building the heap takes $O(k)$ time using `heapify`.

    The main loop processes the cars one by one until all $m$ cars are repaired. In each iteration, the mechanic with the smallest current repair time is popped from the heap. This operation takes $O(\log k)$ time. The number of cars repaired by this mechanic group is deducted, and the repair time for the next car is calculated as $\text{rank} \cdot n^2$, where $n$ is the number of cars already repaired by this mechanic. The updated repair time is then pushed back into the heap, which also takes $O(\log k)$ time. Since this loop runs for $m$ iterations, the total time complexity for the loop is $O(m \log k)$.

    Combining these steps, the overall time complexity is $O(n + m \log k)$.

- Space Complexity: $O(k)$

    The algorithm stores the frequency of each rank, which occupies $O(k)$ space. Additionally, the min-heap stores at most $k$ elements at any point, as it only keeps track of unique ranks and their repair times. This results in an overall space complexity of $O(k)$. The heap operations themselves use $O(\log k)$ space per element, but the total space for the heap is $O(k)$.

---

Here are some problems that use concepts similar to the binary search technique we covered in this editorial. Practicing them will help you get more comfortable applying it to different situations.

- [2560. House Robber IV](https://leetcode.com/problems/house-robber-iv/)
- [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [1231. Divide Chocolate](https://leetcode.com/problems/divide-chocolate/)
- [1011. Capacity To Ship Packages In N Days](https://leetcode.com/problems/capacity-to-ship-packages-in-n-days/)
- [2587. Minimum Time to Repair Cars](https://leetcode.com/problems/minimum-time-to-repair-cars/)
- [1539. Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/)
- [2064. Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/)
- [2226. Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/)
- [1802. Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)
- [1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
- [1283. Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)
- [774. Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/)
- [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

---