# Optimized Tabulation

**Author:** votrubac
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5982440/](https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5982440/)

---

Not sure why this problem's worth only 6 contest points; it feels like 7 or even 8-pointer.

Not only we need to find a clever way to count strings of size at least `k`, but also convert top-down DP into a bottom-up to reduce the time complexity.

**Intuition:** the string could be quite large, but `k` is limited to `2,000`. We need to exploit that.

We count groups of repeated characters in `g`. 

> Note that we have to take at least one character from each group.

That means that the total number of possible strings is `prod(g[i])`, where `g[i]` is the number of characters in `i`-th group.

This also means that, in the end, we will need to pick `k - len(g)` additional characters.

> If `len(g) >= k`, then all valid strings are greater than `k` so we just return `prod(g[i])`.

Notice that, at this point, we know that `len(g) < k`, which makes it reasonable for DP.

We can count all valid strings with size less than `k - len(g)`, and then subtract it from the total number of valid strings `prod(g[i])`.

We can start with top-down DP, but it will result in TLE. We need to convert it to a bottom-up tabulation so we can optimize it.

**Transition Function**
- `dp[i + 1][kk]` is the number of valid strings when picking `kk` characters from [0, i] groups.
- So, the transition function is:
	- `for i in range(len(g)):`
		- `for kk in range(k - len(g)):`
			- `for cnt in range(g[i])):`
				- `dp[i + 1][kk] += dp[i][kk - cnt]`

Thus, to compute `dp[i + 1][kk]`, we need three nested loops.

The innermost loop sums up to `g[i]` previous values. Instead, we can track the prefix sum in `ps`, eliminating that loop.

**C++**
```cpp
int possibleStringCount(string w, int k) {
    long long prod = 1, mod = 1000000007;
    vector<int> g;
    for (int i = 1, cnt = 1; i <= w.size(); ++i) {
        if (i < w.size() && w[i] == w[i - 1])
            ++cnt;
        else {
            g.push_back(cnt - 1);
            prod = prod * cnt % mod;
            cnt = 1;
        }
    }
    if (k <= g.size())
        return prod;
    int dp[2][2001] = { 1 }, ps[2001] = { 0 }, sz = g.size();   
    for (int i = 0; i < sz; ++i)
        for (int kk = 0; kk < k - g.size(); ++kk) {
            ps[kk + 1] = (ps[kk] + dp[i % 2][kk]) % mod;
            dp[!(i % 2)][kk] = (ps[kk + 1] - ps[max(0, kk - g[i])]) % mod; 
        }
    return (mod + prod - accumulate(begin(dp[sz % 2]), begin(dp[sz % 2]) + k, 0LL) % mod) % mod; 
}
```