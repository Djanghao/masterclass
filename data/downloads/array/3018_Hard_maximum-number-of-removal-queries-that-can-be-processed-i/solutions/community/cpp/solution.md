# A not efficient but easy to understand solution

**Author:** C0ldSmi1e
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/solutions/4626539/](https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/solutions/4626539/)

---

# Intuition
First, if we can do $$x$$ operations, we can definitely do $$x-1$$ operations as well, which means we can use binary search to find the maximum operations.

Second, think of this problem: given two arrays `A` and `B` with the same size.initially, we have an empty array `C`, and we iterate each element in `B`. For each element, we can either put it in the leftmost of `C`, or put it in the rightmost of `C`. After all the operations, can we make `A` equal to `C`?

# Approach

We can use DP to solve this problem. Let's say if `dp[l][r]` is `true`, then `[l,r]` in `A` can be obtained by the prefix of `B` with length `r-l+1`. For transition, `dp[l][r]` can be determined by `dp[l+1][r]` or `dp[l][r-1]`:
* if `dp[l+1][r]` is `true`, and `B[r-l]==A[l]`,
* or `dp[l][r-1]` is `true`, and `B[r-l]==A[r]`,

`dp[l][r]` is `true`.

Can we convert the original problem to this one?

Actually, yes! But we need to reverse the `queries`, and choose a suffix as array `B`.

Also, we define `dp[l][r]` as the longest **subsequence** that can be obtained by `[l,r]` in `nums`, because in the original problem, we should choose a **subsequence** first. Then, as for transition, `dp[l][r]` can be determined by `dp[l+1][r]` or `dp[l][r-1]`: `dp[l][r]=max(dp[l+1][r]+(a[l]>=queries[dp[l+1][r]]), dp[l][r-1]+(a[r]>=queries[dp[l][r-1]]))`.

If any `dp[l][r]` equals to the length of the suffix, we can get a subsquence of `nums` from the suffix.

Finally, we can use binary search to find the length of suffix of `B`, and the longest length is the answer.

# Complexity
- Time complexity: $$O(n^2 log(n))$$

- Space complexity: $$O(n^2 log(n))$$

# Code
```
class Solution {
public:
  int maximumProcessableQueries(vector<int>& a, vector<int>& queries) {
    reverse(queries.begin(), queries.end());
    int n = (int) a.size();
    int m = (int) queries.size();
    auto Check = [&](int length) -> bool {
      int d = m - length;
      vector<vector<int>> dp(n, vector<int>(n));
      for (int len = 1; len <= n; len++) {
        for (int l = 0; l + len - 1 < n; l++) {
          int r = l + len - 1;
          if (len == 1) {
            dp[l][r] = (int) (a[r] >= queries[d + 0]);
            continue;
          }
          int x = 0;
          if (d + dp[l][r - 1] < m) {
            x = (int) (a[r] >= queries[d + dp[l][r - 1]]);
          }
          int y = 0;
          if (d + dp[l + 1][r] < m) {
            y = (int) (a[l] >= queries[d + dp[l + 1][r]]);
          }
          dp[l][r] = max(dp[l][r - 1] + x, dp[l + 1][r] + y);
          if (dp[l][r] == length) {
            return true;
          }
        }
      }
      return false;
    };
    int l = 0, r = m;
    while (l < r) {
      int mid = (l + r + 1) >> 1;
      if (Check(mid)) {
        l = mid;
      } else {
        r = mid - 1;
      }
    }
    return r;
  }
};
```