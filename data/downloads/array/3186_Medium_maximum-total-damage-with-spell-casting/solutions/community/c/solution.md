# Catch-Up DP

**Author:** votrubac
**Votes:** 52
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5319810/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5319810/)

---

`dp[i + 1]` represents the best result if `i`-th spell was casted. 

We sort the array first, so we can easily track all smaller powers we can use when casing `i`-th spell.

Before computing `dp[i + 1]`, we "catch up" to include best results for all `power[j]` such as  `power[j] + 2 < power[i]`.

We track the best result for previous spells we can use in `max_dp`, so:
- `dp[i + 1] = power[i] + max_dp`.
	- Again, `max_dp` is `max(dp[0..j + 1])`, where `j` is the largest index such as `power[j] + 2 < power[i]`.

There is a special case when `power[i] == power[i + 1]`. In this case:
- `dp[i + 1] = power[i] + dp[i]`.

**Complexity Analysis**
- Time: O(sort)
	- We sort the array, and then go through it once.
- Memory: O(n)
	- We can reduce it to O(1), see the second solution below.

**C++**
```cpp
long long maximumTotalDamage(vector<int>& power) {
    long long dp[100001] = {0}, max_dp = 0;
    sort(begin(power), end(power));
    for (int i = 0, j = 0; i < power.size(); ++i)        
        if (power[i] == power[max(0, i - 1)])
            dp[i + 1] = power[i] + dp[i];
        else {
            while(power[j] + 2 < power[i])
                max_dp = max(max_dp, dp[++j]);
            dp[i + 1] = power[i] + max_dp;
        }
    return *max_element(begin(dp), begin(dp) + power.size() + 1);
}
```

#### O(1) Memory Complexity
We can use deque to track previous best results. 

Since we remove elements smaller than `power[i] - 2`, the deque size doesn't exceed 3 elements.

**C++**
```cpp
long long maximumTotalDamage(vector<int>& power) {
    deque<array<long long, 2>> dp{{0, 0}};
    long long max_dp = 0;
    sort(begin(power), end(power));
    for (int p : power)
        if (p == dp.back()[1])
            dp.back() = {p + dp.back()[0], p};
        else {
            while(!dp.empty() && dp.front()[1] + 2 < p) {
                max_dp = max(max_dp, dp.front()[0]);
                dp.pop_front();
            }
            dp.push_back({p + max_dp, p});
        }
    return (*max_element(begin(dp), end(dp)))[0];
}
```