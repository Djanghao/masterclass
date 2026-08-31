# Binary Search vs. Prefix Sum

**Author:** votrubac
**Votes:** 64
**Link:** [https://leetcode.com/problems/plates-between-candles/solutions/1549223/](https://leetcode.com/problems/plates-between-candles/solutions/1549223/)

---

#### Approach 1: Binary Search
We remember the position of each candle. Then, we binary-search for the leftmost (first) and rightmost (last) candle for each query.

Now, we know how many total items are between the first and last candle, and how many candles are there.

The time complexity of this solution is *O(n log m)*, where *n* is the number of queries, and *m* - the length of the string.

**C++**
```cpp
vector<int> platesBetweenCandles(string s, vector<vector<int>>& queries) {
    vector<int> c, res;
    for (int i = 0; i < s.size(); ++i)
        if (s[i] == '|')
            c.push_back(i);
    for (auto &q : queries) {
        auto it_l = lower_bound(begin(c), end(c), q[0]);
        auto it_r = it_l == end(c) ? it_l : prev(upper_bound(it_l, end(c), q[1]));
        res.push_back(it_l < it_r ? *it_r - *it_l - (it_r - it_l) : 0);
    }
    return res;
}
```
#### Approach 2: Prefix Sum
We can count candles between two positions in O(1) using a prefix sum array `dp`. Before we can do that, we need to find the leftmost (first) and rightmost (last) candle for each query.

We can also do it in O(1) by tracking `next` and `prev` candle for each position on the table.

The time complexity of this solution is *O(n + m)*, where *n* is the number of queries, and *m* - the length of the string.

**C++**
```cpp
vector<int> platesBetweenCandles(string s, vector<vector<int>>& queries) {
    vector<int> psum(s.size() + 1), next(s.size() + 1, INT_MAX), prev(s.size() + 1), res;
    for (int i = 0; i < s.size(); ++i) {
        psum[i + 1] = psum[i] + (s[i] == '|');
        prev[i + 1] = s[i] == '|' ? i : prev[i];
    }
    for (int i = s.size() - 1; i >= 0; --i)
        next[i] = s[i] == '|' ? i : next[i + 1];
    for (auto &q : queries) {
        int l = next[q[0]], r = prev[q[1] + 1];
        res.push_back(l < r ? r - l - (psum[r] - psum[l]) : 0);
    }
    return res;
}  
```
**Java**
```java
public int[] platesBetweenCandles(String s, int[][] queries) {
    int psum[] = new int[s.length() + 1];
    int next[] = new int[s.length() + 1], prev[] = new int[s.length() + 1];
    Arrays.fill(next, Integer.MAX_VALUE);
    int res[] = new int[queries.length];
    for (int i = 0; i < s.length(); ++i) {
        psum[i + 1] = psum[i] + (s.charAt(i) == '|' ? 1 : 0);
        prev[i + 1] = s.charAt(i) == '|' ? i : prev[i];
    }
    for (int i = s.length() - 1; i >= 0; --i)
        next[i] = s.charAt(i) == '|' ? i : next[i + 1];
    for (int j = 0; j < queries.length; ++j) {
        int l = next[queries[j][0]], r = prev[queries[j][1] + 1];
        res[j] = l < r ? r - l - (psum[r] - psum[l]) : 0;
    }        
    return res;
}
```
**Python**
```python
class Solution:
    def platesBetweenCandles(self, s: str, queries: List[List[int]]) -> List[int]:
        psum, next, prev = [0] * (len(s) + 1), [inf] * (len(s) + 1), [0] * (len(s) + 1)
        res = []
        for i, ch in enumerate(s):
            psum[i + 1] = psum[i] + (ch == '|')
            prev[i + 1] = i if ch == '|' else prev[i]
        for i, ch in reversed(list(enumerate(s))):
            next[i] = i if ch == '|' else next[i + 1]
        for q in queries:
            l, r = next[q[0]], prev[q[1] + 1]
            res.append(r - l - (psum[r] - psum[l]) if l < r else 0)
        return res
```