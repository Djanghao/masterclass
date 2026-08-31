# [C++] O(n) Monotonic deque solution + O(nlogn) priority queue solution

**Author:** alexunxus
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii/solutions/4432880/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii/solutions/4432880/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The naive approach is to use the dynamic programming algorithm where we define `dp[i]` as the minimal cost to collect all fruits with index >= i. However, for each index, we have to acquire
$$\	ext{dp}[i] = \\min_{i+1\\leq j \\leq 2\\cdot i+1}\	ext{dp}[j] + \	ext{prices}[i]$$
. This is a O(n^2) solution hence will lead to TLE.

# Priority Queue Solution(Accepted)
## Approach

We have to use a smarter data structure to store those value so that we can perform $\\min_{i+1<= j <= 1*i+1}\	ext{dp}[j]$ in O(log n) time.

At the first sight, priority queue as a min-heap may be a good choice. We can iterate the prices array from back to front. Initially we only have to maintain one element `dp[n]`, which is 0, then we keep extract the minimal element from it and add the current optimium `dp[i]` at the end of each step.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Each `dp[i]` will at most be inserted once and popped once, so the time complexity is O(nlog n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The priority queue can take O(n) space in the worst case.

## Code
```
class Solution {
public:
    // O(n log n) Priority queue Solution.
    int minimumCoins(vector<int>& prices) {
        int n = prices.size();
        // pq keeps the (dp[i], index_i) as a min heap.
        // The dp[i] here indicates the minimal price to take all fruits
        // with index >= index_i
        std::priority_queue<std::pair<int, int>,
                            std::vector<std::pair<int, int>>,
                            std::greater<std::pair<int, int>>> pq;
        // It takes no price to take all fruits with index >= n.
        pq.emplace(0, n);
        int res = INT_MAX;
        for (int i = n-1; i >= 0; --i) {
            // Excludes indexes greater than (i+1)*2.
            while (!pq.empty() && pq.top().second > (i+1)*2) {
                pq.pop();
            }
            // Note that pq should not be empty (at least the next index
            // should be available).
            int min_price = pq.top().first;
            res = min_price + prices[i];
            // Pushs (dp[i], i) to the pq.
            pq.emplace(res, i);
        }
        // Returns the minimal cost to take all fruits with index >= 0
        return res;
    }
};
```

# Monotonic Dequeue Solution(Accepted)
## Approach
Although the priority queue solution sounds good enough, we notice that the window size is shrinking as we iterate from back to front. In addition, when computing `dp[i]`, we found we can pop any `dp[j], i+1 <= j <= 1*i+1` in that data structure when `dp[j]>=dp[i]` because it can never be better than `dp[i]` in the next step. Why not use a monotonically increasing data structure that can pop those inferior elements efficiently?

Monotonic dequeue is taken into consideration. We can use an increasing monotonic dequeue, popping out any `dp[j]` that is greater than `dp[i]` from the back, inserting `dp[i]` from the back, and directly acquiring the minimal element in the front of the deque(of course we should check if that element is within the index $i+1\\leq j \\leq 2\\cdot i+1$).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Since each element will be at most push to the deque once and popped once, so the amortized time complexity is O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The dequeue can at worst take O(n) space.

# Code
```
class Solution {
public:
    // O(n) Monotonic deque solution.
    int minimumCoins(vector<int>& prices) {
        int n = prices.size();
        // dq stores a monotonically increasing cost of (cost_i, i)
        // pair where cost_i is the minimal cost to take all fruits with
        // index >= i(i.e. dp[i] in the above description).
        std::deque<std::pair<int, int>> dq;
        dq.emplace_back(0, n);
        int res = INT_MAX;
        for (int i = n-1; i >= 0; --i) {
            // Excludes indexes greater than (i+1)*2.
            while (!dq.empty() && dq.front().second > (i+1)*2) {
                dq.pop_front();
            }
            // Notes that dq should not be empty (at least the next index
            // should be available).
            int min_price = dq.front().first;
            res = min_price + prices[i];

            // Pops all costs that have a greater cost than res.
            while (!dq.empty() && dq.back().first >= res) {
                dq.pop_back();
            }
            dq.emplace_back(res, i);
        }
        // Returns the minimal cost to take all fruits with index >= 0
        return res;
    }
};
```