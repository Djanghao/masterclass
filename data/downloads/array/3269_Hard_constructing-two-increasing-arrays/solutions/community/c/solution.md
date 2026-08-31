# Fast

**Author:** votrubac
**Votes:** 0
**Link:** [https://leetcode.com/problems/constructing-two-increasing-arrays/solutions/5722332/](https://leetcode.com/problems/constructing-two-increasing-arrays/solutions/5722332/)

---

This code is AC with 28ms runtime.

The key is to globally allocate `dp` array once, and populate it in a way so we do need to initialize that array for every test case.

**C++**
```cpp
int dp[1001][1001];   
class Solution {
public:
int minLargest(vector<int>& a, vector<int>& b) {
    for (int i = 0; i <= a.size(); ++i)
        for (int j = 0; j <= b.size(); ++j)
            dp[i][j] = !i && !j ? 0 : min(
                i ? dp[i - 1][j] + 1 + (dp[i - 1][j] % 2 == a[i - 1]) : INT_MAX, 
                j ? dp[i][j - 1] + 1 + (dp[i][j - 1] % 2 == b[j - 1]) : INT_MAX);
    return dp[a.size()][b.size()];
}
};
```