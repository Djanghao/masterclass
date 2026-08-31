# Linear time DP in C++, Java & Python

**Author:** cpcs
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii/solutions/4432069/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii/solutions/4432069/)

---

# Intuition
Let dp[i] be the minimum number of coins to buy all the fruites from 0 to i (index starts from 0) and we must buy ith fruit, and thus we can cover all the fruits until i + i + 1 because the last fruite we buy is i.

Then we have
dp[i] = min(dp[j]) + prices[i]
Here 
j + j + 1 >= i - 1
and 
j < i

Note here, the last fruit we bought is j and we indeed use it to cover the fruits from j + 1 to i - 1 (and we buy i buy ourselves).

If we calculate this directly, the time complexity is O(n ^ 2) which is not acceptable.

The good thing is when i increasing the fesible j values is just in a sliding window (slide to right).

So this is excatly the minimum value in the sliding window which is similar to this problem (https://leetcode.com/problems/minimum-window-substring/).

Btw, although the value of n and prices are as large as 1e5, the result won't be out of 32 bit integer since we only have to buy ~sqrt(n) fruits.



# Approach
Use Monotonic Queue to accelerate the DP.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n).

# Code
C++
```
class Solution {
public:
    int minimumCoins(vector<int>& prices) {
        const int n = prices.size();
        vector<int> dp(n);
        deque<int> q;
        dp[0] = prices[0];
        q.push_back(0);
        for (int i = 1; i < n; ++i) {
            dp[i] = dp[q.front()] + prices[i];
            while (!q.empty() && q.front() + q.front() + 1 < i) {
                q.pop_front();
            }
            while (!q.empty() && dp[q.back()] >= dp[i]) {
                q.pop_back();
            }
            q.push_back(i);
        }
        return dp[q.front()];
    }
};
```

Java
```
class Solution {
    public int minimumCoins(int[] prices) {
        int n = prices.length;
        int[] dp = new int[n];
        Deque<Integer> q = new ArrayDeque<>();
        dp[0] = prices[0];
        q.add(0);

        for (int i = 1; i < n; ++i) {
            dp[i] = dp[q.peekFirst()] + prices[i];
            while (!q.isEmpty() && q.peekFirst() + q.peekFirst() + 1 < i) {
                q.pollFirst();
            }
            while (!q.isEmpty() && dp[q.peekLast()] >= dp[i]) {
                q.pollLast();
            }
            q.add(i);
        }
        return dp[q.peekFirst()];
    }
}
```

Python
```
class Solution:
    def minimumCoins(self, prices: List[int]) -> int:
        n = len(prices)
        dp = [0] * n
        q = []
        dp[0] = prices[0]
        q.append(0)

        for i in range(1, n):
            dp[i] = dp[q[0]] + prices[i]
            while q and q[0] + q[0] + 1 < i:
                q.pop(0)
            while q and dp[q[-1]] >= dp[i]:
                q.pop()
            q.append(i)

        return dp[q[0]]
```