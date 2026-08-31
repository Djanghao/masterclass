# Two Pointers

**Author:** votrubac
**Votes:** 17
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1220656/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1220656/)

---

We process arrays in the compressed form; `i` and `j` point to the current value and frequency. Since frequencies could differ, we track the remaining frequency in `f1` and `f2`. When the remaining frequency is zero, we advance the pointer and store the new value's frequency as the remaining frequency.

For each step, we add a product, and the minimum of two frequencies, into our result array. Note that we need to check if the product is equal to the last value in the result. If so, we increase the last frequency instead of adding a new value/frequency pair.

```cpp
vector<vector<int>> findRLEArray(vector<vector<int>>& e1, vector<vector<int>>& e2) {
    vector<vector<int>> res;
    int i = -1, j = -1, f1 = 0, f2 = 0, sz1 = e1.size(), sz2 = e2.size();
    while ((f1 || i + 1 < sz1) && (f2 || j + 1 < sz2)) {
        f1 = f1 ? f1 : e1[++i][1];
        f2 = f2 ? f2 : e2[++j][1];
        int v1 = e1[i][0], v2 = e2[j][0], cnt = min(f1, f2);
        if (!res.empty() && res.back()[0] == v1 * v2)
            res.back()[1] += cnt;
        else
            res.push_back({v1 * v2, cnt});
        f1 -= cnt;
        f2 -= cnt;
    }
    return res;
}
```