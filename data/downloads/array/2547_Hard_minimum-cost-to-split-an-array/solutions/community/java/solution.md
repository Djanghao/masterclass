# 🔥 Easy to understand | dp | dfs+memo | 35 ms 100%

**Author:** byegates
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3092167/](https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3092167/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
see comment in code

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
DP or DFS+memo are pretty much the same thing, left to right or right to left

# [dp without optimization, 422ms](https://leetcode.com/problems/minimum-cost-to-split-an-array/submissions/884045466/)
```java
class Solution {
    public int minCost(int[] a, int k) {
        int n = a.length;
        int[] dp = new int[n + 1]; // dp[0] means optimal importance value for empty subarray, dp[1] means optimal importance value for array ending at[0, 1) i.e.[0, 0], dp[i] means optimal importance for array ending at i-1: [0, i) / [0, i-1]
        for (int i = 1; i <= n; i++) { // calc result for dp[1] to dp[n]
            dp[i] = Integer.MAX_VALUE;
            HashMap<Integer, Integer> m = new HashMap<>(); // count map, a new one for each i
            int score = k; // importance score always start with k for each subarray
            for (int j = i - 1; j >= 0; j--) { // since we know the optimal value in dp[j] for j : [0, i-1], where to put j will we yield best score for dp[i]? (Note: j = 0 means two sub arrays: [0, 0) + [0, i) which means there's only one subarray which is the whole thing
                int cnt = m.getOrDefault(a[j], 0);
                m.put(a[j], ++cnt);
                if (cnt == 2) score += 2; // only when we need a numnber for the second time, we start to add importance score, and it's going to be count as 2
                else if (cnt > 2) score++; // for 3rd time and more, each time we count one more importance score
                dp[i] = Math.min(dp[i], dp[j] + score);
            }
        }

        return dp[n];
    }
}
/*

*/
```

# [82ms dfs+memo](https://leetcode.com/problems/minimum-cost-to-split-an-array/submissions/884041186/)
``` java
// dfs + memo
class Solution {
    private int[] dp;
    private int idx, n, k;
    public int minCost(int[] a, int k) {
        n = a.length;
        this.k = k;

        // compress values in array to value between [0, idx-1], so that we use int array instead of map for count, for speeding up only
        Map<Integer, Integer> M = new HashMap<>(); // value to index map
        idx = 0;
        for (int i = 0; i < n; i++) {
            int j = M.getOrDefault(a[i], -1);
            if (j == -1) {
                M.put(a[i], idx);
                a[i] = idx++;
            } else a[i] = j;
        }

        dp = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);

        return dfs(a, 0); // starting at 0 to end, whats the optimal solution?
    }

    private int dfs(int[] a, int cur) {
        if (cur == n) return 0;
        if (dp[cur] != Integer.MAX_VALUE) return dp[cur]; // memo query

        int[] m = new int[idx];
        int score = k; // importance score, starting with k of course
        for (int i = cur; i < n; i++) {
            if (++m[a[i]] == 2) score += 2; // if we meet the same number for the 2nd time, then it's going to add 2 to importance score
            else if (m[a[i]] > 2) score++; // if we meet same number for 3rd or more times in same subarray, each time it adds 1 to importance score
            dp[cur] = Math.min(dp[cur], dfs(a, i+1) + score); // find min, remember, dfs(a, i+1) will always return us best score/split from [i+1, end]
        }
        return dp[cur];
    }
}
```

# [35 ms dp, 100%](https://leetcode.com/problems/minimum-cost-to-split-an-array/submissions/884031284/)
same as 1st dp solution, but optimize the use of map to int array, which speeds up significantly in this problem.
```java
// dp: 35 ms: 
class Solution {
    public int minCost(int[] a, int k) {
        int n = a.length;

        // value to index map
        Map<Integer, Integer> M = new HashMap<>();
        int idx = 0;
        for (int i = 0; i < n; i++) {
            int j = M.getOrDefault(a[i], -1);
            if (j == -1) {
                M.put(a[i], idx);
                a[i] = idx++;
            } else a[i] = j;
        }

        int[] dp = new int[n+1];
        for (int i = 1; i <= n; i++) {
            dp[i] = Integer.MAX_VALUE;
            int[] m = new int[idx];
            int score = k;
            for (int j = i-1; j >= 0; j--) {
                if (++m[a[j]] == 2) score += 2;
                else if (m[a[j]] > 2) score++;
                dp[i] = Math.min(dp[i], dp[j] + score);
            }
        }

        return dp[n];
    }        
}
```
PLEASE UPVOTE IF YOU FIND THIS POST HELPFUL, THANK YOU!!