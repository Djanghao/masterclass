# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 32
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5389361/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5389361/)

---

# **Intuition**
The remainder sequence can be
..0,0
..1,1
..0,1
..1,0
<br>

# **Explanation**
`count[0]` is the length for ..0,0
`count[1]` is the length for ..1,1
`end[0]` is the length for ..1,0
`end[1]` is the length for ..0,1
<br>

# **Complexity**
Time `O(n)`
Space `O(2 * 2)`
<br>

**Java**
```java
    public int maximumLength(int[] A) {
        int[] count = new int[2], end = new int[2];
        for (int a : A) {
            count[a % 2]++;
            end[a % 2] = end[1 - a % 2] + 1;
        }
        return Math.max(Math.max(count[0], count[1]), Math.max(end[0], end[1]));
    }
```

**C++**
```cpp
    int maximumLength(vector<int>& A) {
        vector<int> count(2), end(2);
        for (int a : A) {
            count[a % 2]++;
            end[a % 2] = end[1 - a % 2] + 1;
        }
        return max({count[0], count[1], end[0], end[1]});
    }
```

**Python**
```py
    def maximumLength(self, A: List[int]) -> int:
        A = [a % 2 for a in A]
        return max(A.count(0), A.count(1), len(list(groupby(A))))
```
<br>

# Solution 2: DP
More general,
`dp[b][a] = max(dp[b][a], dp[a][b] + 1)`
where `dp[a][b]` means the length of subsequence ending with `...,a,b`

Time `O(n)`
Space `O(k * k)`, where `k = 2`

**Java**
```java
    public int maximumLength(int[] A) {
        int res = 0, k = 2, dp[][] = new int[k][k];
        for (int a : A) {
            for (int b = 0; b < k; b++) {
                dp[b][a % k] = dp[a % k][b] + 1;
                res = Math.max(res, dp[b][a % k]);
            }
        }
        return res;
    }
```

**C++**
```cpp
    int maximumLength(vector<int>& A, int k = 2) {
        vector<vector<int>> dp(k, vector<int>(k, 0));
        int res = 0;
        for (int a : A)
            for (int b = 0; b < k; b++)
                res = max(res, dp[b][a % k] = dp[a % k][b] + 1);
        return res;
    }
```

**Python**
```py
    def maximumLength(self, A: List[int], k = 2) -> int:
        dp = defaultdict(Counter)
        for a in A:
            for b in range(k):
                dp[b][a % k] = dp[a % k][b] + 1
        return max(max(dp[a].values()) for a in range(k))

```
<br>

# Solution 3: 1D DP
Continue to learn optimised version in
[3202. Find the Maximum Length of Valid Subsequence II](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/discuss/5389350/JavaC%2B%2BPython-1d-DP)

<br>


# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 3202. [Find the Maximum Length of Valid Subsequence II](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/discuss/5389350/JavaC%2B%2BPython-1d-DP)
- 3193. [Count the Number of Inversions](https://leetcode.com/problems/count-the-number-of-inversions/discuss/5353127/Python-DP)
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
