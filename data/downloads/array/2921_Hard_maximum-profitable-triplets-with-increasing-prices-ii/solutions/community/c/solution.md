# Simpler Than Increasing Prices I

**Author:** votrubac
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii/solutions/4236584/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii/solutions/4236584/)

---

Go left-to-right, and for each `i`, store the maximum profit from qualified previous elements.

We can use a range max variant of a segment tree to get max profit for elements with `price[0..i) < price[i]` in a linear time.

Then we go rigth-to-left, and for each `i` we get the maximum profit on the right. We track and return the biggest `l[i] + profits[i] + r`.

Since in this problem prices are limited to `5000`, we can use prices directly in the segment tree (without normalizing them first, like for [2907. Maximum Profitable Triplets With Increasing Prices I](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/)).

Runtime complexity: O(n * log m), where `m` is the maximum price.
Memory complexity: O(m + n) for the segment tree and to store maximum profit.

**C++**
```cpp
static constexpr int max_p = 5000;
int st[4 * max_p] = {};
int query(int l, int r, int p = 1, int tl = 0, int tr = max_p) {
    if (l > r) 
        return 0;
    if (l == tl && r == tr)
        return st[p];
    int tm = (tl + tr) / 2;
    return max(query(l, min(r, tm), p * 2, tl, tm), query(max(l, tm + 1), r, p * 2 + 1, tm + 1, tr));
}
int update(int pos, int new_val, int p = 1, int tl = 0, int tr = max_p) {
    if (tl == tr)
        return st[p] = max(st[p], new_val);
    int tm = (tl + tr) / 2;
    if (pos <= tm)
        return st[p] = max(update(pos, new_val, p * 2, tl, tm), st[p * 2 + 1]);
    return st[p] = max(st[p * 2], update(pos, new_val, p * 2 + 1, tm + 1, tr));
}
int maxProfit(vector<int>& prices, vector<int>& profits) {
    int n = prices.size(), res = -1, cnt = 0, last = 0;
    vector<int> l(n);
    for (int i = 0; i < n - 1; ++i) {
        l[i] = query(0, prices[i] - 1);
        update(prices[i], profits[i]);
    }
    memset(st, 0, sizeof(st));
    for (int i = n - 1; i > 0; --i) {
        int r = query(prices[i] + 1, max_p);
        if (min(l[i], r))
            res = max(res, l[i] + r + profits[i]);
        update(prices[i], profits[i]);        
    }
    return res;
}
```