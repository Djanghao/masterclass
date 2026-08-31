# (Strange) Sliding Window

**Author:** votrubac
**Votes:** 54
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1624215/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1624215/)

---

We binary-search for the leftmost position that we can reach, which is `pos - k`.

Then, we use a sliding window approach, tracking sum between `l` and `r` iterators.

A catch here is figure out the window size. If the right iterator points after the start position, we can:
- go right and left (`(r - start) * 2`  steps), then go left (`start - l` steps)
- or, go left and right (`(start - l) * 2`  steps), then go right (`r - start`  steps).

The smallest of these two options should not exceed `k` steps. So, we move the left iterator until our window size fits `k` steps.

**Java**
We could binary-search for `l`, but we will need a custom comparator. Instead, we just advance `l` to keep the code short and simple.

```java
public int maxTotalFruits(int[][] f, int pos, int k) {
    int l = 0, sum = 0, max_sum = 0;
    while (l < f.length && f[l][0] < pos - k)
        ++l;
    for (int r = l; r < f.length && f[r][0] <= pos + k; ++r) {
        sum += f[r][1];
        while(Math.min(pos - 2 * f[l][0] + f[r][0], 2 * f[r][0] - f[l][0] - pos) > k)
            sum -= f[l++][1];
        max_sum = Math.max(max_sum, sum);
    }
    return max_sum;
}
```
**C++**
```cpp
int maxTotalFruits(vector<vector<int>>& fruits, int pos, int k) {
    auto l = upper_bound(begin(fruits), end(fruits), vector<int>{pos - k});
    int sum = 0, max_sum = 0;
    for (auto r = l; r != end(fruits) && (*r)[0] <= pos + k; ++r) {
        sum += (*r)[1];
        while(min(pos - 2 * (*l)[0] + (*r)[0], 2 * (*r)[0] - (*l)[0] - pos) > k)
            sum -= (*l++)[1];
        max_sum = max(max_sum, sum);
    }
    return max_sum;
}
```