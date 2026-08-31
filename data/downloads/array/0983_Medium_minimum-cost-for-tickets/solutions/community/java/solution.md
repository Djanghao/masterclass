# 🔥🔥Java 📝, Python 🐍, and C++🔥Easy Solutions with Exaplanation 🖥️🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 64
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3349729/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/3349729/)

---

# Intuition
The given code implements a dynamic programming approach to solve the minimum cost ticket problem. It initializes an array `dp` of size `n+1`, where `n` is the length of the `days` array. The `dp` array stores the minimum cost required to travel up to the i-th day in the `days` array. It is initialized to `Integer.MAX_VALUE`, except for `dp[0]` which is initialized to `0`

# Approach
For each day `i`, three possibilities are considered:
- If a 1-day pass is bought on that day, then the cost will be `dp[i-1] + costs[0]`.
- If a 7-day pass is bought on that day, then we look for the first day before the i-th day, such that the difference between the two days is less than 7. Let that day be j. Then, the cost will be `dp[j+1] + costs[1]`. We add `1` to `j` because we need to consider the cost of the 7-day pass for the current day, which is `costs[1]`.
- If a 30-day pass is bought on that day, then we look for the first day before the i-th day, such that the difference between the two days is less than 30. Let that day be j. Then, the
cost will be `dp[j+1] + costs[2]`

We take the minimum of these three possibilities and store it in `dp[i]`. Finally, we return
`dp[n]`, which stores the minimum cost required to travel up to the last day in the `days` array.


# Complexity
- Time complexity: $$O(n)$$, where `n` is the length of the `days` array.

- Space complexity: $$O(n)$$ because we are using an additional array of size `n+1`.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` Java []
class Solution {
    public int mincostTickets(int[] days, int[] costs) {
        int n = days.length;
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] + costs[0]; // 1-day pass for current day
            
            int j = i - 1;
            while (j >= 0 && days[i - 1] - days[j] < 7) j--;
            dp[i] = Math.min(dp[i], dp[j + 1] + costs[1]); // 7-day pass for current day
            
            j = i - 1;
            while (j >= 0 && days[i - 1] - days[j] < 30) j--;
            dp[i] = Math.min(dp[i], dp[j + 1] + costs[2]); // 30-day pass for current day
        }
        
        return dp[n];
    }
}
```
``` C++ []
class Solution {
public:
    int mincostTickets(vector<int>& days, vector<int>& costs) {
        int n = days.size();
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] + costs[0]; // 1-day pass for current day
            
            int j = i - 1;
            while (j >= 0 && days[i - 1] - days[j] < 7) {
                j--;
            }
            dp[i] = min(dp[i], dp[j + 1] + costs[1]); // 7-day pass for current day
            
            j = i - 1;
            while (j >= 0 && days[i - 1] - days[j] < 30) {
                j--;
            }
            dp[i] = min(dp[i], dp[j + 1] + costs[2]); // 30-day pass for current day
        }
        
        return dp[n];
    }
};
```
``` Python []
class Solution(object):
    def mincostTickets(self, days, costs):
        """
        :type days: List[int]
        :type costs: List[int]
        :rtype: int
        """
        n = len(days)
        dp = [float('inf')] * (n + 1)
        dp[0] = 0
        
        for i in range(1, n + 1):
            dp[i] = dp[i - 1] + costs[0] # 1-day pass for current day
            
            j = i - 1
            while j >= 0 and days[i - 1] - days[j] < 7:
                j -= 1
            dp[i] = min(dp[i], dp[j + 1] + costs[1]) # 7-day pass for current day
            
            j = i - 1
            while j >= 0 and days[i - 1] - days[j] < 30:
                j -= 1
            dp[i] = min(dp[i], dp[j + 1] + costs[2]) # 30-day pass for current day
        
        return dp[n]

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```