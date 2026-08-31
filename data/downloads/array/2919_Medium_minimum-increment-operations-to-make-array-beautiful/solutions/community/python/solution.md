# [Java/C++/Python] DP, O(1) Space

**Author:** lee215
**Votes:** 71
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4220717/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4220717/)

---

# **Explanation**
`dp1` means to increment `A[i - 3]`
`dp2` means to increment `A[i - 2]`
`dp3` means to increment `A[i - 1]`

If increment current `A[i]`,
we need cost `max(k - A[i], 0)`,
`dp3 = min(dp1, dp2, dp3) + max(k - a, 0)`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long minIncrementOperations(int[] A, int k) {
        long dp1 = 0, dp2 = 0, dp3 = 0, dp;
        for (int a: A) {
            dp = Math.min(dp1, Math.min(dp2, dp3)) + Math.max(k - a, 0);
            dp1 = dp2;
            dp2 = dp3;
            dp3 = dp;
        }
        return Math.min(dp1, Math.min(dp2, dp3));
    }
```

**C++**
```cpp
    long long minIncrementOperations(vector<int>& A, int k) {
        long long dp1 = 0, dp2 = 0, dp3 = 0, dp;
        for (int& a: A) {
            dp = min(dp1, min(dp2, dp3)) + max(k - a, 0);
            dp1 = dp2;
            dp2 = dp3;
            dp3 = dp;
        }
        return min(dp1, min(dp2, dp3));
    }
```

**Python**
```py
    def minIncrementOperations(self, A: List[int], k: int) -> int:
        dp1, dp2, dp3 = 0,0,0
        for a in A:
            dp1, dp2, dp3 = dp2, dp3, min(dp1, dp2, dp3) + max(k - a, 0)
        return min(dp1, dp2, dp3)
```
<br>


# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 2920. [Maximum Points After Collecting Coins From All Nodes](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/discuss/4220643/JavaC%2B%2BPython-DP)
- 2919. [Minimum Increment Operations to Make Array Beautiful](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/discuss/4220717/JavaC%2B%2BPython-Easy-and-Concise-DP-O(1)-Space)
- 2896. [Apply Operations to Make Two Strings Equal](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/discuss/4144041/JavaC%2B%2BPython-DP-One-Pass-O(1)-Space)
- 2830. [Maximize the Profit as the Salesman](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/discuss/3934188/JavaC%2B%2BPython-DP)
- 2008. [Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/discuss/1470941/JavaC%2B%2BPython-DP-solution)
- 1751. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/discuss/1052581/Python-DP)
- 1235. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/Python-DP-Solution)
<br>