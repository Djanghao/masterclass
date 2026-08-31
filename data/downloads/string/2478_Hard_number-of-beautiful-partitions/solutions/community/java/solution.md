# 🔥🔥16ms 100%[DP]|Easy to understand [DFS+MEMO]|[Java]🔥🔥

**Author:** byegates
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2834170/](https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2834170/)

---

# DFS+MEMO
- First we identify all the indices that you can make a cut, a non-prime number followed by a prime number
	- Save these indices to a separate list.
- It becomes a question of which combination of indices you want to select to satisify the two conditions:
	-  each partition has a length >= minLength
	-  Total number of partitions are exactly k
		-  This means you select k-1 valid begin indices within the array, 1st begin is always 0
-  Complexity, where m is the number of valid indices for making a cut
	-  TC: O(k * m)
	-  SC:  O(k * m)
## Code
```java
class Solution {
    private static int M = 1_000_000_007;
    private static boolean[] P = new boolean[10];
    public int beautifulPartitions(String s, int k, int minL) {
        int n = s.length();
        if (minL*k > n) return 0; // corner case 1: total length is not enough

        P[2] = P[3] = P[5] = P[7] = true;
        if (!P[s.charAt(0)-'0'] || P[s.charAt(n-1)-'0']) return 0; // corner case 2: beginning or end is not valid
        if (k == 1) return 1; //  corner case 3

        List<Integer> begins = getValidBeginIndices(s, n, minL);
        int m = begins.size();
        if (m < k - 1) return 0; // corner case 4

        int[][] dp = new int[k][m];
        for (var _a : dp) Arrays.fill(_a, -1); // -1 means not visited

        return dfs(begins, k-1, 0, 0, minL, dp); // select k-1 indices within array
    }

    private int dfs(List<Integer> begins, int k, int idx, int pre, int len, int[][] dp) {
        if (k == 0) return 1; // selected everything
        if (dp[k][idx] > -1) return dp[k][idx];

        dp[k][idx] = 0; // do not select current
        for (int i = idx; i <= begins.size()-k; i++) { // making sure there's enough left
            int cur = begins.get(i);
            if (cur - pre < len) continue;
            dp[k][idx] = (dp[k][idx] + dfs(begins, k-1, i+1, cur, len, dp)) % M;
        }

        return dp[k][idx];
    }

    private List<Integer> getValidBeginIndices(String s, int n, int minL) {
        List<Integer> begins = new ArrayList<>(n / 2 + 1);
        for (int i = minL; i <= n - minL; i++) // find all valid beginning index
            if (P[s.charAt(i)-'0'] && !P[s.charAt(i - 1)-'0']) begins.add(i);
        return begins;
    }
}
```
# [18ms 100% DP](https://leetcode.com/submissions/detail/847896444/)
- dp[i-1][j] means number of Beautiful Partitions for partitioning substring [0, j) into i-1 partitions
	- when j is a valid end, dp[i][j] will come from sum of dp[i-1][pre], where pre is a good previous cut and at least minLength apart from j
	- There you go with dp[k][n]
- TC: O(k * (n - minLength)
- SC: O(n * k)

```java
class Solution {
    public int beautifulPartitions(String s, int k, int minL) {
        int n = s.length();
        if (minL*k > n) return 0; // corner case 1: total length is not enough

        boolean[] P = new boolean[10];
        P[2] = P[3] = P[5] = P[7] = true;

        if (!P[s.charAt(0)-'0'] || P[s.charAt(n-1)-'0']) return 0; // corner case 2: beginning or end is not valid

        List<Integer> cuts = new ArrayList<>();
        cuts.add(0); // first beginning index
        for (int i = minL; i <= n-minL; i++)
            if (P[s.charAt(i)-'0'] && !P[s.charAt(i-1)-'0']) cuts.add(i); // each possible beginning index

        if (cuts.size() < k) return 0; // corner case 3

        int[][] dp = new int[k][cuts.size()];
        for (var _a : dp) Arrays.fill(_a, -1); // -1 means not visited

        return dfs(cuts, k-1, 0, minL, dp);
    }

    private int dfs(List<Integer> cuts, int k, int pre, int len, int[][] dp) {
        if (k == 0) return 1; // enough length for last segment
        if (dp[k][pre] > -1) return dp[k][pre];

        dp[k][pre] = 0;
        // size: 10, k: 3, i can go up to: 10-3=7, so that we have 7~9 -> k options 
        for (int i = pre+1; i <= cuts.size()-k; i++) {
            if (cuts.get(i) - cuts.get(pre) < len) continue;
            dp[k][pre] = (dp[k][pre] + dfs(cuts, k-1, i, len, dp)) % 1_000_000_007;
        }

        return dp[k][pre];
    }
}
```
# [16ms DP, over engineering](https://leetcode.com/submissions/detail/847721032/)
[17ms](https://leetcode.com/submissions/detail/847753735/)
16ms and 17ms are using the same logic, very minor implementation difference
```java
class Solution {
    private static boolean[] P = new boolean[10];
    private static int M = 1_000_000_007;
    public int beautifulPartitions(String s, int k, int minL) {
        int n = s.length();
        P[2] = P[3] = P[5] = P[7] = true;
        if (!P[s.charAt(0)-'0'] || P[s.charAt(n-1)-'0']) return 0; // early termination

        return beautifulPartitions(getPre(s, n, minL), k, minL); // actual DP, above are prep work
    }

    private int beautifulPartitions(int[] pre, int k, int minL) {
        int n = pre.length;
        int[][] dp = new int[k][n]; 

        for (int j = 1; j < n; j++) dp[0][j] = 1; // making 1 partition
        for (int i = 1; i < k; i++) { // making 2 to k partitions
            int[] psum = new int[n];
            for (int j = i; j < n; j++) { // for i partitions, len is at least minL * i
                psum[j] = (psum[j-1] + dp[i-1][j]) % M; // a good previous end
                dp[i][j] = (dp[i][j] + psum[pre[j]]) % M; // a ending point
            }
        }
        return dp[k-1][n-1]; // string[0,n] divided into k partitions
    }

    private int[] getPre(String s, int n, int minL) { // valid indices for partition
        List<Integer> cuts = new ArrayList<>(n/2+1);
        for (int i = minL-1; i < n-2; i++) // find all good ending index for partition
            if (!P[s.charAt(i)-'0'] && P[s.charAt(i+1)-'0']) cuts.add(i);

        int m = cuts.size()+2;
        int[] a = new int[m]; // optional conversion of list to array for speed
        a[1] = -1;a[m-1]=n-1; // -2 and -1 are useful dummies, n-1 is the last good ending index
        for (int i = 0; i < cuts.size(); i++) a[i+1] = cuts.get(i);

        int[] pre = new int[m]; // largest pre idx for cur end to make a valid partition
        for (int i = 1; i < m; i++) pre[i] = bs(a, a[i]-minL);

        return pre;
    }

    private int bs(int[] a, int x) { // find the largest <=
        int l = 0, r = a.length;
        while (l < r) {
            int m = r- (r-l) / 2;
            if (a[m] == x) return m;
            else if (a[m] > x) r = m-1;
            else l = m;
        }
        return r;
    }
}
```