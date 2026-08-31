# Quadratic DP (Array vs. Bitset)

**Author:** votrubac
**Votes:** 39
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5282181/](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5282181/)

---

This problem is disappointing. It is just the same quadratic algorithm, but with little-o optimizations.

The way to beat TLE is to realize that the largest value must be always picked. This reduces computations as we do not go beyond the largest value.

> Also check out bitset solution below, which is accepted < 300 ms.

We process rewards from smallest to largest. In the `dp` array, `dp[x] == x` means that we can achieve reward `x`.

For each value `rewards[i]`, we move `x` from `0` to `rewards[i] - 1`, and set `dp[rewards[i] + x]` if `dp[x]` is set.
- Again, we stop once `rewards[i] + x` reaches the largest value.

### DP Array
**C++**
```cpp
int maxTotalReward(vector<int>& rewards) {
    sort(begin(rewards), end(rewards));
    int dp[50000] = {}, sz = rewards.size();
    for (int i = 0; i < sz; ++i)
        if (i == 0 || rewards[i - 1] != rewards[i]) {
            int lim = min(rewards[i], rewards.back() - rewards[i]);
            for (int x = 0; x < lim; ++x)
                dp[rewards[i] + dp[x]] = rewards[i] + dp[x];
        }
    return rewards.back() + *max_element(begin(dp), begin(dp) + rewards.back());
}
```

### DP Bitset
**Python**
```python
class Solution:
    def maxTotalReward(self, rewards: List[int]) -> int:
        rewards = sorted(set(rewards))
        x, max_x = 1, (1 << rewards[-1]) - 1
        for reward in rewards:
            mask = (1 << reward) - 1
            x |= (x & mask) << reward & max_x
        return rewards[-1] + x.bit_length() - 1
```
**C++**
```cpp
int maxTotalReward(vector<int>& rewards) {
    bitset<50000> dp, mask; 
    dp[0] = true;
    sort(begin(rewards), end(rewards));
    int closest = rewards.back() - 1, mask_pos = 0;
    for (int i = 0; i + 1 < rewards.size(); ++i)
        if (mask_pos < rewards[i]) {
            while (mask_pos < rewards[i])
                mask[mask_pos++] = true;
            dp |= (dp & mask) << rewards[i];
        }
    while (!dp[closest])
        --closest;
    return rewards.back() + closest;
} 
```