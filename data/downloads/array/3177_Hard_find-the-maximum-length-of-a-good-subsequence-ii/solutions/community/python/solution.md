# [Java/C++/Python] DP O(nk)

**Author:** lee215
**Votes:** 47
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5280172/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5280172/)

---

# **Explanation**
`res[i]` is the longest good subsequence with at most `i` different neighbours.
`dp[i][a]` means the longest good subsequence with at most `i` different neighbours,
and ending with `a`.

For each `a` in `A`,
we update the
`dp[i][a] = max(dp[i][a] + 1, res[i - 1] + 1)`.

Finally return `res[k]`
<br>

# **Complexity**
Time `O(nk)`
Space `O(nk)`
<br>

**Java**
```java
    public int maximumLength(int[] A, int k) {
        Map<Integer, Integer>[] dp = new HashMap[k + 1];
        for (int i = 0; i <= k; i++) {
            dp[i] = new HashMap<>();
        }
        int[] res = new int[k + 1];
        for (int a : A) {
            for (int i = k; i >= 0; --i) {
                int v = dp[i].getOrDefault(a, 0);
                v = Math.max(v + 1, (i > 0 ? res[i - 1] + 1 : 0));
                dp[i].put(a, v);
                res[i] = Math.max(res[i], v);
            }
        }
        return res[k];
    }
```

**C++**
```cpp
    int maximumLength(vector<int>& A, int k) {
        vector<unordered_map<int, int>> dp(k + 1);
        vector<int> res(k + 1);
        for (int a : A) {
            for (int i = k; i >= 0; --i) {
                dp[i][a] = max(dp[i][a] + 1, (i > 0 ? res[i - 1] + 1 : 0));
                res[i] = max(res[i], dp[i][a]);
            }
        }
        return res[k];
    }
```

**Python**
```py
    def maximumLength(self, A: List[int], k: int) -> int:
        dp = [defaultdict(int) for i in range(k + 1)]
        res = [0] * (k + 1)
        for a in A:
            for i in range(k, -1, -1):
                dp[i][a] = max(dp[i][a] + 1, res[i - 1] + 1 if i else 0)
                res[i] = max(res[i], dp[i][a])
        return res[k]
```
<br>

# More DP problems
Here is small DP problem list.
Good luck and have fun.
 - 3177. [Find the Maximum Length of a Good Subsequence II](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/discuss/5280172/JavaC%2B%2BPython-DP-Solution)
- 3148. [Maximum Difference Score in a Grid](https://leetcode.com/problems/maximum-difference-score-in-a-grid/discuss/5145704/JavaC%2B%2BPython-Minimum-on-Top-Left)
- 3147. [Taking Maximum Energy From the Mystic Dungeon](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/discuss/5145723/JavaC%2B%2BPython-DP)
- 2920. [Maximum Points After Collecting Coins From All Nodes](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/discuss/4220643/JavaC%2B%2BPython-DP)
- 2919. [Minimum Increment Operations to Make Array Beautiful](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/discuss/4220717/JavaC%2B%2BPython-Easy-and-Concise-DP-O(1)-Space)
- 2896. [Apply Operations to Make Two Strings Equal](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/discuss/4144041/JavaC%2B%2BPython-DP-One-Pass-O(1)-Space)
- 2830. [Maximize the Profit as the Salesman](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/discuss/3934188/JavaC%2B%2BPython-DP)
- 2008. [Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/discuss/1470941/JavaC%2B%2BPython-DP-solution)
- 1751. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/discuss/1052581/Python-DP)
- 1235. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/Python-DP-Solution)
<br>
