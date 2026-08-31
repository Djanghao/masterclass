# Odd/Even DP

**Author:** votrubac
**Votes:** 56
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3801703/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3801703/)

---

This seems to fall into the [198. House Robber](https://leetcode.com/problems/house-robber/) cetegory of problems.
    
We track the maximum score for the most recent odd and even number.

When we see an odd number, we have two choices (flip for even number):
- take score from the previous odd number
- take score from the previous even number, minus `x`.

We use the maximum of these two choices.
    
Note that we must start from `0` position, so we need to subtract `x` from either `odd` or `eve`.
    
**C++**
```cpp
long long maxScore(vector<int>& n, int x) {
    long long eve = n[0] - (n[0] % 2 ? x : 0);
    long long odd = n[0] - (n[0] % 2 ? 0 : x);
    for (int i = 1; i < n.size(); ++i)
        if (n[i] % 2)
            odd = n[i] + max(odd, eve - x);
        else
            eve = n[i] + max(eve, odd - x);
    return max(eve, odd);
}
```

## Compressed Version
**C++**
```cpp
long long maxScore(vector<int>& n, int x) {
    long long p[2] = { n[0] - x * (n[0] % 2), n[0] - x * !(n[0] % 2) };
    for (int i = 1; i < n.size(); ++i)
        p[n[i] % 2] = n[i] + max(p[n[i] % 2], p[!(n[i] % 2)] - x);
    return max(p[0], p[1]);
}
```