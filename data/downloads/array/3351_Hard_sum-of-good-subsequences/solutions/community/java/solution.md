# [Java/C++/Python] DP

**Author:** lee215
**Votes:** 60
**Link:** [https://leetcode.com/problems/sum-of-good-subsequences/solutions/6028686/](https://leetcode.com/problems/sum-of-good-subsequences/solutions/6028686/)

---

# **Explanation**
`count[a]` means the number of sequence ending with `a`.
`total[a]` means the total sum of sequence ending with `a`.

For each `a` in `A`,
we can append `a` to sequence ending with `a - 1` and `a + 1`,
or start a new sequence with `a`,
`count[a] += count[a - 1] + count[a + 1] + 1`

Take a look at total sum,
it duplicates the total sum from `total[a - 1]` and `total[a + 1]`,
and add `count[a - 1] + count[a + 1] + 1` of `a`.

Finally return total sum `res`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

```Java [Java]
    public int sumOfGoodSubsequences(int[] A) {
        long[] count = new long[100010];
        long[] total = new long[100010];
        long mod = 1000000007, res = 0;
        for (int a : A) {
            count[a + 1] = (count[a] + count[a + 1] + count[a + 2] + 1) % mod;
            long cur = total[a] + total[a + 2] + 1l * a * (count[a] + count[a + 2] + 1);
            total[a + 1] = (total[a + 1] + cur) % mod;
            res = (res + cur) % mod;
        }
        return (int)res;
    }
```

```C++ [C++]
    int sumOfGoodSubsequences(vector<int>& A) {
        unordered_map<int, long long> count, total;
        int mod = 1e9 + 7, res = 0;
        for (int a : A) {
            count[a] = (count[a] + count[a - 1] + count[a + 1] + 1) % mod;
            long cur = total[a - 1] + total[a + 1];
            cur += 1ll * a * (count[a - 1] + count[a + 1] + 1);
            total[a] = (total[a] + cur) % mod;
            res = (res + cur) % mod;
        }
        return res;
    }
```

```py [Python3]
    def sumOfGoodSubsequences(self, A: List[int]) -> int:
        count = Counter()
        res = Counter()
        mod = 10 ** 9 + 7
        for a in A:
            count[a] += count[a - 1] + count[a + 1] + 1
            count[a] %= mod
            res[a] += res[a - 1] + res[a + 1] + a * (count[a - 1] + count[a + 1] + 1)
            res[a] %= mod
        return sum(res.values()) % mod
```

# More DP problems
Here is small DP problem list.
Good luck and have fun.
- 3336. [Find the Number of Subsequences With Equal GCD](https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/discuss/5973616/JavaC%2B%2BPython-2D-DP)
- 3335. [Total Characters in String After Transformations I](https://leetcode.com/problems/total-characters-in-string-after-transformations-i/discuss/5973021/Python-DP)
- 3316. [Find Maximum Removals From Source String](https://leetcode.com/problems/find-maximum-removals-from-source-string/discuss/5904277/JavaC%2B%2BPython-DP)
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

