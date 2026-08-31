# Bit Mask

**Author:** votrubac
**Votes:** 112
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/1238641/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/1238641/)

---

We have a tight constraint here: n <= 14. Thus, we can just try all combinations.

For each position `i` in the first array, we'll try all elements in the second array that haven't been chosen before. We can use a bit mask to represent the chosen elements. 

To avoid re-computing the same subproblem, we memoise the result for each bit mask.

> Thanks [LazyCoder16](https://leetcode.com/LazyCoder16) for pointing out that we do not need to memoise for `i`.

**C++**
```cpp
int dp[16384] = {[0 ... 16383] = INT_MAX};
int minimumXORSum(vector<int>& a, vector<int>& b, int i = 0, int mask = 0) {
    if (i >= a.size())
        return 0;
    if (dp[mask] == INT_MAX)
        for (int j = 0; j < b.size(); ++j)
            if (!(mask & (1 << j)))
                dp[mask] = min(dp[mask], (a[i] ^ b[j]) + minimumXORSum(a, b, i + 1, mask + (1 << j)));
    return dp[mask];
}
```
**Java**
```java
int dfs(int[] dp, int[] a, int[] b, int i, int mask) {
    if (i >= a.length)
        return 0;
    if (dp[mask] == Integer.MAX_VALUE)
        for (int j = 0; j < b.length; ++j)
            if ((mask & (1 << j)) == 0)
                dp[mask] = Math.min(dp[mask], (a[i] ^ b[j]) + dfs(dp, a, b, i + 1, mask + (1 << j)));
    return dp[mask];
}
public int minimumXORSum(int[] nums1, int[] nums2) {
    int dp[] = new int[1 << nums2.length];
    Arrays.fill(dp, Integer.MAX_VALUE);
    return dfs(dp, nums1, nums2, 0, 0);
}
```
**Python 3**
Note that here we are inferring `i` by counting bits in `mask`. We can pass `i` as an argument, but it will increase the size of the LRU cache.

The `min` construction is a courtesy of [lee215](https://leetcode.com/lee215).

> Note that `@cahce` was introduced in Python 3.9, and it's a shorthand for `@lru_cache(maxsize=None)`

```python
class Solution:
    def minimumXORSum(self, a: List[int], b: List[int]) -> int:
        @cache
        def dp(mask: int) -> int:
            i = bin(mask).count("1")
            if i >= len(a):
                return 0
            return min((a[i] ^ b[j]) + dp(mask + (1 << j)) 
                       for j in range(len(b)) if mask & (1 << j) == 0)
        return dp(0)
```