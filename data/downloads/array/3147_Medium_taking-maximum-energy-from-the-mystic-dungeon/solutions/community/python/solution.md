# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 8
**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5145723/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5145723/)

---

# **Explanation**
`dp[i] = A[i] + dp[i + k]`,
where `dp[i]` is the energy starting at `A[i]`

Instead of create an array for DP,
we can also do it in-palce of `A`,
to same some codes and spaces.

This can be improved to real O(1) without changing input.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int maximumEnergy(int[] A, int k) {
        for (int i = A.length - k - 1; i >= 0; i--)
            A[i] += A[i + k];
        return Arrays.stream(A).max().getAsInt();
    }
```

**C++**
```cpp
    int maximumEnergy(vector<int>& A, int k) {
        for (int i = A.size() - k - 1; i >= 0; i--)
            A[i] += A[i + k];
        return *max_element(A.begin(), A.end());
    }
```

**Python**
```py
    def maximumEnergy(self, A: List[int], k: int) -> int:
        for i in range(len(A) - k - 1, -1, -1):
            A[i] += A[i + k]
        return max(A)
```

<br>

# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 3148. [Maximum Difference Score in a Grid](https://leetcode.com/problems/maximum-difference-score-in-a-grid/discuss/5145704/JavaC%2B%2BPython-Minimum-on-Top-Left)
- 3147. [Taking Maximum Energy From the Mystic Dungeon](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/discuss/5145723/JavaC%2B%2BPython-DP)
- 2920. [Maximum Points After Collecting Coins From All Nodes](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/discuss/4220643/JavaC%2B%2BPython-DP)
- 2919. [Minimum Increment Operations to Make Array Beautiful](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/discuss/4220717/JavaC%2B%2BPython-Easy-and-Concise-DP-O(1)-Space)
- 2896. [Apply Operations to Make Two Strings Equal](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/discuss/4144041/JavaC%2B%2BPython-DP-One-Pass-O(1)-Space)
- 2830. [Maximize the Profit as the Salesman](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/discuss/3934188/JavaC%2B%2BPython-DP)
- 2008. [Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/discuss/1470941/JavaC%2B%2BPython-DP-solution)
- 1751. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/discuss/1052581/Python-DP)
- 1235. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/Python-DP-Solution)
