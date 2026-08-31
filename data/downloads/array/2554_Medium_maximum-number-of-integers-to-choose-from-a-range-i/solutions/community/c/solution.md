# Partial Sum + Binary Search

**Author:** votrubac
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/3154509/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/3154509/)

---

## Partial Sum + Binary Search
We compute sum of elements `[`1..m]` excluding banned elements. 

We can do it in a constant time if we build a prefix sum of banned elements.

We binary-search for the largest m, which sum <= maxSum.

**C++**
```cpp
int maxCount(vector<int>& ban, int n, int maxSum) {
    int ps[10001] = {}, l = 0, r = n, cnt = 0;
    for (int b : ban)
        ps[b] = b;
    partial_sum(begin(ps), end(ps), begin(ps));
    while (l < r) {
        if (int m = (l + r + 1) / 2; m * (m + 1) / 2 - ps[m] > maxSum)
            r = m - 1;            
        else
            l = m;
    }
    for (int i = 0; i < l; ++i)
        cnt += ps[i] != ps[i + 1];
    return l - cnt;
}
```
## Hashset
This solution is simpler, and asymptotically faster (O(n)) than the next one.

For OJ test cases, however, it is twice as slow as the second one, due to a hash set overhead.

**C++**
```cpp
int maxCount(vector<int>& banned, int n, int maxSum) {
    int res = 0;
    unordered_set<int> s(begin(banned), end(banned));
    for (int x = 1; x <= n && maxSum >= 0; ++x) 
        if (s.count(x) == 0) {
            maxSum -= x;
            res += maxSum >= 0;
        }
    return res;
}
```
## Pointer
We sort the banned array, and, as we increase `x`, use a pointer `i` to check if a number is there.

Note tha the array can contain duplicates, so we need to skip all of them. 

**C++**
```cpp
int maxCount(vector<int>& ban, int n, int maxSum) {
    int i = 0, res = 0;
    sort(begin(ban), end(ban));
    for (int x = 1; x <= n && maxSum >= 0; ++x) {
        if (i < ban.size() && ban[i] == x)
            while (i < ban.size() && ban[i] == x)
                ++i;
        else {
            maxSum -= x;
            res += maxSum >= 0;
        }
    }
    return res;
}
```