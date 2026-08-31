# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 24
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3070571/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3070571/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

**\uD83D\uDCCC Question: Why do we convert the Negative prefix sum modulo into its equivalent positive mod?**

**\uD83D\uDCCC Answer (By community member jit):** 

Many languages implement the % operator differently for negative numbers such that m % n is negative if m is negative, so we need to treat that case specially. For example, -3 % 10 would equal -3 in a bunch of languages like c, c++, and java, but equals 7 in languages like python.

If we're trying to group the values into congruence classes mod k, we want all of our "groups" to be positive. hence, we need to convert for languages that won't automatically do it for us

Here's a common way to calculate the "positive mod" of two numbers:

```cpp
int mod(int x, int k) {
    // Returns the value of (x % k)
    return (x % k + k) % k;
}
```

<iframe src="https://leetcode.com/playground/W7o3JDLL/shared" frameBorder="0" width="100%" height="500"></iframe>