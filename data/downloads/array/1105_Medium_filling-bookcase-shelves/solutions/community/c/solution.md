# DFS + Memo

**Author:** votrubac
**Votes:** 139
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/323305/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/323305/)

---

**Intuition:** For each book, we need to explore two cases: add to the current shelf (if it fits), or start a new shelf. 

We can use DFS, and memoise interim results to avoid TLE.

#### Top-Down Solution
The basic DFS logic is straightforward, but for me it was tricky to come up with a memoisation strategy: for each book (```i```), and for each position on the shelf (```w```) in the shelf, store the minimum height for the remaining books.

In other words, the position ```m[i][w]``` contains the minimum height for books ```[i...n]```, so we do not need to care what the current height is.
**C++**
```cpp
int m[1001][1001] = {};
int minHeightShelves(vector<vector<int>>& b, int max_w, int i = 0, int w = 0, int h = 0) {
    if (i >= b.size()) 
        return h;
    if (m[i][w] == 0) {
        m[i][w] = h + minHeightShelves(b, max_w, i + 1, b[i][0], b[i][1]);
        if (w + b[i][0] <= max_w)
            m[i][w] = min(m[i][w], minHeightShelves(b, max_w, i + 1, w + b[i][0], max(h, b[i][1])));
    }
    return m[i][w];
}
```
# Complexity Analysis
Runtime: 
- Without memoisation, *O(2 ^ n)*, where n is the number of books.
- With memoisation, *O(n * m)*, where m is the maximum width.

Memory: *O(n * m)*, where m is the maximum width.
#### Bottom-Up Solution
**C++**
```cpp
int minHeightShelves(vector<vector<int>>& b, int width) {
    vector<int> dp(b.size() + 1, INT_MAX);
    dp[0] = 0;
    for (int p = 1; p <= b.size(); ++p) {
        for (int i = p, w = 0, h = 0; i > 0 && w + b[i - 1][0] <= width; --i) {
            w += b[i - 1][0];
            h = max(h, b[i - 1][1]);
            dp[p] = min(dp[p], dp[i - 1] + h);
        }
    }
    return dp.back();
}
```