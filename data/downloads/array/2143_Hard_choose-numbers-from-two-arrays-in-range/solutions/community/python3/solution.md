# DFS(i, balance)

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/1704147/](https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/1704147/)

---

We run DFS, and memoise by position `i`, and balance of elements taken from the first and second arrays. If the balance is zero, we found a balanced range.

Note that we need to run DFS for each position `i`, and zero as a starting balance, so that we aggregate results for all contiguous subarrays.

**Python 3**
```python
class Solution:
    def countSubranges(self, n1: List[int], n2: List[int]) -> int:
        @cache
        def dfs(i: int, bal: int) -> int:
            return (bal == 0) + (0 if i >= len(n1) else dfs(i + 1, bal + n1[i]) + dfs(i + 1, bal - n2[i]))
        return sum(dfs(i, 0) - 1 for i in range(len(n1))) % 1000000007 
```

**C++**
The maximum sum we take from each array should not exceed 5,000. We will use this fact to reduce `dp` array size.

> I tried to add pruning using a prefix sum array, but it did not improve OJ runtime. The best runtime for the C++ solution below is 56 ms.

```cpp
int dp[100][10001], mod = 1000000007, mid = 5000;
class Solution {
public:
int dfs(vector<int>& n1, vector<int>& n2, int i, int bal) {
    if (i >= n1.size() || bal > 10000 || bal < 0)
        return bal == mid;
    if (dp[i][bal] == -1)
        dp[i][bal] = ((bal == mid) + dfs(n1, n2, i + 1, bal + n1[i]) + dfs(n1, n2, i + 1, bal - n2[i])) % mod;
    return dp[i][bal];
}
int countSubranges(vector<int>& n1, vector<int>& n2) {
    int res = 0;
    memset(dp, -1, sizeof dp);
    for (int i = 0; i < n1.size(); ++i)
        res = (res + dfs(n1, n2, i, mid) - 1) % mod;
    return res;
}
};
```