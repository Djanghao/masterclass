# Two Queues or Rolling Array

**Author:** votrubac
**Votes:** 61
**Link:** [https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/2229808/](https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/2229808/)

---

The second solution below is the optimized version of the first one, though it could be hard to debug.

Therefore, we will start with the two queues solution, which should be easier to code and build an intuition.

#### Two Queues

We use separate queues to track how many people are ready to tell the secret each day (`d`), and how many people are going to forget the secret (`f`).

We track the current number of people who can share the secret in `sharing`.

Each day, three things happen:
1. We add people in the front of the `d` queue to `sharing` (if `d.size() >= delay`).
2. We subtract people in the front of `f` queue from `sharing` (if `f.size() >= forget`).
3. The resulting `sharing` people tell the secret to the same number of new people.
	- We add these new people to the back of the `d` and `f` queues.

**C++**
```cpp
int peopleAwareOfSecret(int n, int delay, int forget) {
    long long sharing = 0, mod = 1000000007;
    deque<int> d{1}, f{1};
    while (--n > 0) {
        if (d.size() >= delay) {
            sharing = (sharing + d.front()) % mod;
            d.pop_front();
        }
        if (f.size() >= forget) {
            sharing = (mod + sharing - f.front()) % mod;
            f.pop_front();
        }
        d.push_back(sharing);
        f.push_back(sharing);
    }
    return accumulate(begin(f), end(f), 0LL) % mod;
} 
```
**Complexity Analysis**
- Time: O(n)
- Memory: O(delay + forget)

#### Rolling Array
This solution does exactly the same as the one above, using one rolling array instead of two queues.
**Python 3**
```python
class Solution:
    def peopleAwareOfSecret(self, n: int, d: int, f: int) -> int:
        dp, md = [1] + [0] * (f - 1), 10**9 + 7
        for i in range(1, n):
            dp[i % f] = (md + dp[(i + f - d) % f] - dp[i % f] + (0 if i == 1 else dp[(i - 1) % f])) % md
        return sum(dp) % md
```
**C++**
```cpp
int peopleAwareOfSecret(int n, int d, int f) {
    vector<long long> dp(f);
    dp[0] = 1;
    int mod = 1000000007;
    for (int i = 1; i < n; ++i)
        dp[i % f] = (mod + (i - 1 ? dp[(i - 1) % f] : 0) + dp[(i + f - d) % f] - dp[i % f]) % mod;
    return accumulate(begin(dp), end(dp), 0LL) % mod;
}
```
**Complexity Analysis**
- Time: O(n)
- Memory: O(forget)