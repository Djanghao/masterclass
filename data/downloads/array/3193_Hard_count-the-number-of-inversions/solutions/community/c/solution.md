# K Inverse Pairs Array O(nm)

**Author:** votrubac
**Votes:** 30
**Link:** [https://leetcode.com/problems/count-the-number-of-inversions/solutions/5352855/](https://leetcode.com/problems/count-the-number-of-inversions/solutions/5352855/)

---

The giveaway of this problem is this constraint: 
> ... there is at least one i such that endi == n - 1.

So, this is the same problem as [629. K Inverse Pairs Array](https://leetcode.com/problems/k-inverse-pairs-array/discuss/846076/C%2B%2B-4-solutions-with-picture) with some pruning.

Here is the modified O(nm) solution from my post for that problem (check it for the explanation on how the sliding window works). [The best runtime is 3 ms](https://leetcode.com/submissions/detail/1298171784/). 

Final `k` value is defined by the last requirement, and `requirements` prune the computations as follows:
- The next requirements define the maximum `k` for the corresponding subarray.
- The previous requirement defines the minimum `k`. 
	- The tricky part is that we need to clear the tabulation (`fill_n`) below the minimum `k`. 

**C++**
```cpp
int numberOfPermutations(int n, vector<vector<int>>& reqs) {
    sort(begin(reqs), end(reqs));
    int dp[2][401] = { 1 }, prev = 0, j = 0, mod = 1000000007;
    for (int N = 1; N <= n; ++N) {
        for (int K = prev; K <= reqs[j][1]; ++K) {
            dp[N % 2][K] = (dp[(N - 1) % 2][K] + (K > 0 ? dp[N % 2][K - 1] : 0)) % mod;
            if (K >= N)
                dp[N % 2][K] = (mod + dp[N % 2][K] - dp[(N - 1) % 2][K - N]) % mod;                
        }
        if (N - 1 == reqs[j][0]) {
            fill_n(begin(dp[0]) + prev, reqs[j][1] - prev, 0);
            fill_n(begin(dp[1]) + prev, reqs[j][1] - prev, 0);
            prev = reqs[j++][1];
        }
    }  
    return dp[n % 2][reqs.back()[1]];
} 
```

#### Going Backwards DP
This is my initial top-down solution, as I could not remember my previous solution during the contest.

If we sort our requirements, and process the array right-to-left, then we do not need to track which numbers we use.

Say, the requirements for `n - 1` is `cnt`. We can choose:
- Use the largest element in the `n - 1` position, and solve for `n - 2` and `cnt`
- Use the second largest, and solve for `n - 2` and `cnt - 1`
- ...
- Use `0`, and solve for `n - 2` and `cnt - (n - 1)`.

Complexity Analysis:
- Time: O(n^2 m), whene m is max(cnt).
- Memory: O(nm)

**C++**
```cpp
int dp[301][401] = {};
int dfs(int i, int j, int cnt, vector<vector<int>>& reqs) {
    if (j >= 0 && reqs[j][0] == i) {
        if (reqs[j][1] != cnt)
            return 0;
        --j;
    }
    if (i == 0 || i * (i + 1) / 2 < cnt)
        return cnt == 0;    
    if (dp[i][cnt] == 0) {
        dp[i][cnt] = 1;
        for (int k = 0; k <= min(i, cnt); ++k)
            dp[i][cnt] = (dp[i][cnt] + dfs(i - 1, j, cnt - k, reqs)) % 1000000007;
    }
    return dp[i][cnt] - 1;
}
int numberOfPermutations(int n, vector<vector<int>>& reqs) {
    sort(begin(reqs), end(reqs));
    return dfs(n - 1, reqs.size() - 1, reqs.back()[1], reqs);
}
```