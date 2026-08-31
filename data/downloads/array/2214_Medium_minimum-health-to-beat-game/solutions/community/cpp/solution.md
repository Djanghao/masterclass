# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3030791/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3030791/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.
\uD83D\uDD35 Check out [YouTube Channel](https://www.youtube.com/channel/@leetcodethehardway) if you are interested.

```cpp
class Solution {
public:
    long long minimumHealth(vector<int>& damage, int armor) {
        // without any armor, the minimum health you need is sum(damage) + 1 (see example 3)
        long long ans = accumulate(damage.begin(), damage.end(), 0LL) + 1;
        // when should we use the armor ability? 
        // it's optimal to use when you take the most amount of damage
        int mx = *max_element(damage.begin(), damage.end());
        // since mx can be greater than armor, 
        // we take the minimum value and substract it from ans
        ans -= min(mx, armor);
        return ans;
    }
};
```