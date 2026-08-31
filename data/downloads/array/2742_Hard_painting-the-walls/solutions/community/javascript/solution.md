# ✅ NOT Hard ✅ Video Solution✅ Dynamic Programming ✅ Explained ✅Easy To Understand✅

**Author:** millenium103
**Votes:** 48
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4166467/](https://leetcode.com/problems/painting-the-walls/solutions/4166467/)

---

![Screenshot 2023-10-14 101426.png](./images/0.png)

# Youtube Video Explanation:
[https://youtu.be/dS-ZRA6C_w8]()
\uD83D\uDD25 ***Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.***

***Subscribe Goal: 100 Subscribers
Current Subscribers: 66***

# Intuition
- The problem can be solved using dynamic programming. We'll create a DP array `dp`, where `dp[i]` represents the minimum cost to paint `i` walls. Initially, set all values in `dp` to a very large number except `dp[0]`, which is 0, as painting 0 walls costs nothing.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Iterate through the walls and for each wall, iterate through the possible values of `j`, which represent how many walls can be painted by the free painter while the paid painter is occupied. Update `dp[i]` with the minimum cost between the current value of `dp[i]` and `dp[max(j - time[i] - 1, 0)] + cost[i]`. This way, we are considering the cost of the current wall based on how many walls the free painter can paint while the paid painter is occupied.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time Complexity: O(n^2), where n is the number of walls.
- Space Complexity: O(n)

# Code
```
class Solution {
    public int paintWalls(int[] cost, int[] time) {
        int n = cost.length;
        int[] money = new int[n+1];
        Arrays.fill(money,(int)1e9);
        money[0]=0;
        for(int i=0;i<n;i++)
        {
            for(int j=n;j>0;j--)
            {
                money[j]=Math.min(money[j],money[Math.max(j-time[i]-1,0)]+cost[i]);
            }
        }
        return money[n];
    }
}
```
Other language codes:
<iframe src="https://leetcode.com/playground/5jyRdZe8/shared" frameBorder="0" width="600" height="350"></iframe>

![upvote1.jpeg](./images/1.jpeg)
