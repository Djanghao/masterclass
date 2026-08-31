# SQRT | Binary Search | DP

**Author:** votrubac
**Votes:** 171
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/2851991/](https://leetcode.com/problems/find-the-pivot-integer/solutions/2851991/)

---

O(n) is easy, but where is the fun in that.

## SQRT
Why `x * x == sum`? For `n`, the sum of `[1..n]` is `sum = n * (n + 1) / 2`.

The sum of `[1..x]` is `x * (x + 1) / 2`. The sum of `[x..n]` is `n * (n + 1) / 2 - x * (x + 1) / 2 + x`. So: 
- `x * (x + 1) / 2 ==  n * (n + 1) / 2 - x * (x + 1) / 2 + x`,
- `x * (x + 1) / 2 + x * (x + 1) / 2 - x == n * (n + 1) / 2`,
- `x * (x + 1) - x == sum`,
- `x * x == sum`.

Thus, we can just use SQRT to find `x`.

**C++**
```cpp
int pivotInteger(int n) {
    int sum = n * (n + 1) / 2, x = sqrt(sum);
    return x * x == sum ? x : -1;
}
```

## Binary Search
We can binary-search for a pivot for a O(log n) solution.
**C++**
```cpp
int pivotInteger(int n) {
    int l = 1, r = n, sum = n * (n + 1) / 2;
    while (l < r) {
        int m = (l + r) / 2;
        if (m * m - sum < 0)
            l = m + 1;
        else
            r = m;
    }
    return l * l - sum == 0 ? l : -1;
}
```

## DP
Since pivot increases with `n`, we can compute pivot for the entire range in O(n).

Then, a query will take O(1). The overal complexity will be amortized O(1).

**C++**
Note that `dp` is global so it's populated once then reused between test cases.
```cpp
int dp[1001] = { 0, 0 };
class Solution {
public:
int pivotInteger(int n) {
    if (dp[1] == 0)
       for (int i = 1, j = 1; i <= 1000; ++i) {
           int sum = i * (i + 1) / 2;
           while (j * j < sum)
               ++j;
           dp[i] = j * j == sum ? j : -1;
       }
    return dp[n];
}
};
```