# Similar to 931. Minimum Falling Path Sum

**Author:** votrubac
**Votes:** 230
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/1344893/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/1344893/)

---

This is similar to [931. Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/).

The difference is that, instead of checking 3 items above (\u2B06, \u2196 and \u2197), we need to check the entire row. If we do just that, the complexity will be O(m * n * n) and we will get TLE.

> Also note that the path sum can overflow, so we cannot use the input grid directly.

To make it efficient, we first go left-to-right, and track the running maximum value (`run_max`). For each step, we decrement it to account for the distance, and compare with the value right above. Then, we do the same right-to-left, and add the maximum of two running values to each cell.

**C++**
```cpp
long long maxPoints(vector<vector<int>>& p) {
    vector<long long> cur_row(p[0].size()), prev_row(p[0].size());
    for (auto &row : p) {
        for (long long j = 0, run_max = 0; j < row.size(); ++j) {
            run_max = max(run_max - 1, prev_row[j]);
            cur_row[j] = run_max;
        }
        for (long long j = row.size() - 1, run_max = 0; j >= 0; --j) {
            run_max = max(run_max - 1, prev_row[j]);
            cur_row[j] = max(cur_row[j], run_max) + row[j];
        }
        swap(cur_row, prev_row);
    }
    return *max_element(begin(prev_row), end(prev_row));
}
```
**Java**
```java
public long maxPoints(int[][] p) {
    long[] cur_row = new long[p[0].length], prev_row = new long[p[0].length];
    for (var row : p) {
        long run_max = 0;
        for (int j = 0; j < row.length; ++j) {
            run_max = Math.max(run_max - 1, prev_row[j]);
            cur_row[j] = run_max;
        }
        for (int j = row.length - 1; j >= 0; --j) {
            run_max = Math.max(run_max - 1, prev_row[j]);
            cur_row[j] = Math.max(cur_row[j], run_max) + row[j];
        }
        prev_row = cur_row;
    }
    return Arrays.stream(prev_row).max().getAsLong();
}
```
**Complexity Analysis**
- Time: O(m * n)
- Memory: O(n)