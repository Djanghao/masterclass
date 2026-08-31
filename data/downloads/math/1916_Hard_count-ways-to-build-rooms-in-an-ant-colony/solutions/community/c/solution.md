# n! / (cnt_0 * cnt_1 * .. * cnt_n-1)

**Author:** votrubac
**Votes:** 27
**Link:** [https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1300085/](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1300085/)

---

Such a bad problem. I almost figured out the nCr approach, but it does not work for C++. Python users are in luck since `comb` is pretty efficient. For C++, the faster way is to precompute `nCr` using a Pascal triangle. But it's not practical given the problem constraints.

So, the solution we are expect to produce is based on this formula:

```
n! / (cnt_0 * cnt_1 * .. * cnt_n-1)
```

Where `cnt_i` is the number of nodes in the subtree with the root node `i`. Sounds like we need a special knowledge to figure this out, which is not ideal for a contest problem.

**C++**
```cpp
int static constexpr mod = 1000000007;
int modPow(int x, unsigned int y, unsigned int m)
{
    if (y == 0)
        return 1;
    long p = modPow(x, y / 2, m) % m;
    p = (p * p) % m;
    return y % 2 ? (p * x) % m : p;
}
int dfs(vector<vector<int>> &al, int cur, long long &prod) {
    int total_cnt = 1;
    for (auto next : al[cur])
        total_cnt += dfs(al, next, prod);
    prod = prod * total_cnt % mod;
    return cur != 0 ? total_cnt : prod;
}
int waysToBuildRooms(vector<int>& pr) {
    vector<vector<int>> al(pr.size());
    long long fact = 1, prod = 1;
    for (int i = 1; i < pr.size(); ++i) {
        al[pr[i]].push_back(i);
        fact = fact * (i + 1) % mod;
    }
    return fact * modPow(dfs(al, 0, prod), mod - 2, mod) % mod;
}
```