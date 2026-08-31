# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 29
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3061376/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3061376/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.
\uD83D\uDD35 Check out [Screencast](https://www.youtube.com/watch?v=couER-yTn-M&list=PLBu4Bche1aEWMj1TdpymXbD8Tn8xKVYwj&index=17) if you are interested.

---

Let `dp[i]` be the min flips to make `[0, i)` monotone increasing. Starting from `i = 1`, if `s[i] = 1`, we check the previous character `s[i - 1]`. If it is `1` (e.g. `11...`), then it is monotone increasing already, so`dp[i] = dp[i - 1]`. However, if `s[i - 1] = 0` (e.g. `10...`), then we have two choices - we either flip this zero to make like `11...` or we flip all the ones before this zero (e.g. `00...`). Therefore, we can see the DP transition here.

- if `s[i - 1]` is `1`, then `dp[i] = dp[i - 1]`
- else `dp[i] = min(dp[i - 1] + 1, cnt1)`

since `dp[i]` is always based on `dp[i - 1]`, we can space-optimize it using two variables - `cnt0` and `cnt1` where `cnt0` is `dp[i]` at index `i` and `cnt1` is the number of 1s.

```
if (s[i] == 0) cnt0 = min(cnt0 + 1, cnt1);
else cnt1 += 1;
```

which is essentially same as 

```
if (s[i] == 0) cnt0 += 1;
else cnt1 += 1;
cnt0 = min(cnt0, cnt1);
```

Alternatively, we can count the max of `cnt0` and `cnt1` and return `s.size() - cnt1`.

<iframe src="https://leetcode.com/playground/jQN2JfEE/shared" frameBorder="0" width="100%" height="500"></iframe>