# DP

**Author:** votrubac
**Votes:** 88
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/2390497/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/2390497/)

---

For the current element, `dp[i]` indicates if the array can be partitioned up to that element.

For element `dp[i + 1]`, the partition is valid if:
- `dp[i - 1] == true` and we have a partition of `two` elements, or,
- `dp[i - 2] == true` and we have a partition of `three` elements.

Since we only need to look 3 elements back, we can use a rolling `dp` array for constant memory complexity.

**C++**
```cpp
bool validPartition(vector<int>& n) {
    bool dp[4] = {true, false, n[0] == n[1], false};
    for (int i = 2; i < n.size(); ++i) {
        bool two = n[i] == n[i - 1];
        bool three = (two && n[i] == n[i - 2]) || (n[i] - 1 == n[i - 1] && n[i] - 2 == n[i - 2]);
        dp[(i + 1) % 4] = (dp[(i - 1) % 4] && two) || (dp[(i - 2) % 4] && three);
    }
    return dp[n.size() % 4];
}
```
**Java**
```java
public boolean validPartition(int[] n) {
    boolean[] dp = {true, false, n[0] == n[1], false};
    for (int i = 2; i < n.length; ++i) {
        boolean two = n[i] == n[i - 1];
        boolean three = (two && n[i] == n[i - 2]) || (n[i] - 1 == n[i - 1] && n[i] - 2 == n[i - 2]);
        dp[(i + 1) % 4] = (two && dp[(i - 1) % 4]) || (three && dp[(i - 2) % 4]);
    }
    return dp[n.length % 4];
}
```
**Python 3**
Dop-down DP, just for fun.
```python
class Solution:
    def validPartition(self, n: List[int]) -> bool:
        @cache
        def dfs(i: int) -> bool:
            if i >= len(n) - 1:
                return i == len(n)
            two = n[i] == n[i + 1]
            three = i < len(n) - 2 and ((two and n[i + 1] == n[i + 2]) or (n[i] + 1 == n[i + 1] and n[i] + 2 == n[i + 2]))
            return (two and dfs(i + 2)) or (three and dfs(i + 3))
        return dfs(0)
```
**Complexity Analysis**
- Time: O(n); for each element, we check 5 characters.
- Memory: O(1); we use a fixed-size `dp` array.