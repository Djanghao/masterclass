# From Recursive (TLE) -> DP (TLE) -> DP Tabulation (TLE) -> DP Bottom up with window (Accepted)

**Author:** ivanbiji
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-good-subsequences/solutions/6098305/](https://leetcode.com/problems/sum-of-good-subsequences/solutions/6098305/)

---

# Problem Overview
We need to compute the sum of all "good" subsequences in an array of integers. A "good" subsequence is defined based on some criteria (not specified here), but from the code, it seems to involve subsequences where adjacent numbers differ by 1.

Our goal is to optimize the solution to handle large inputs efficiently and avoid time limit exceeded (TLE) errors.

# Recursive (TLE)
- What it does: Starts from each index and recursively explores all good subsequences starting from that index.
- Why it fails: This approach leads to exponential time complexity because it explores all possible subsequences recursively.

```csharp []
public class Solution {
    public int SumOfGoodSubsequences(int[] nums) {
        const int MOD = 1000000007;
        (int, int) DFS(int i) {
            if(i >= nums.Length)
                return (0, 0);
            
            int currSum = i < 0 ? 0 : nums[i];
            int sum = currSum;
            int count = 1;
            for(int j = i + 1; j < nums.Length; j++) {
                int current =  i < 0 ? nums[j] - 1 : nums[i];
                if(Math.Abs(nums[j] - current) == 1) {
                    (int jsum, int jcount) res = DFS(j);
                    sum = (sum + res.jsum + (currSum * res.jcount)) % MOD;
                    count += res.jcount;  
                }
            }
            return (sum, count);

        }

        (int sum, int count) result = DFS(-1);
        return result.sum % MOD;
    }
}
```

# DP Memo Dictionary (TLE)
- What it does: Adds memoization by storing intermediate results in a dictionary (dp) to avoid redundant calculations.
- Why it still fails: The number of unique states is still too large, leading to TLE.
``` csharp []
public class Solution {
    public int SumOfGoodSubsequences(int[] nums) {
        const int MOD = 1000000007;
        Dictionary<int, (long, long)> dp = new();

        (long, long) DFS(int i) {
            if(dp.ContainsKey(i))
                return dp[i];

            if(i >= nums.Length)
                return (0, 0);
            
            long currSum = i < 0 ? 0 : nums[i];
            long sum = currSum;
            long count = 1;
            for(int j = i + 1; j < nums.Length; j++) {
                int current =  i < 0 ? nums[j] - 1 : nums[i];
                if(Math.Abs(nums[j] - current) == 1) {
                    (long jsum, long jcount) res = DFS(j);
                    sum = (sum + res.jsum) % MOD;
                    sum = (sum + ((currSum * res.jcount) % MOD)) % MOD;
                    count = (count + res.jcount) % MOD;  
                }
            }
            return dp[i] = (sum, count);
        }

        (long sum, long count) result = DFS(-1);
        return (int)(result.sum % MOD);
    }
}
```
# DP Memo Array (TLE)
- What it does: Replaces the dictionary with an array for memoization to reduce overhead.
- Why it still fails: Although arrays are faster than dictionaries, the time complexity remains too high.

``` csharp []
public class Solution {
    public int SumOfGoodSubsequences(int[] nums) {
        const int MOD = 1000000007;
        (long, long, bool)[] dp = new (long, long, bool)[nums.Length + 1];

        (long, long, bool) DFS(int i) {
            (long ss, long cc, bool visited) dpval = dp[i];
            if(dpval.visited)
                return dp[i];

            if(i > nums.Length)
                return (0, 0, true);
            
            long currSum = i == 0 ? 0 : nums[i - 1];
            long sum = currSum;
            long count = 1;
            for(int j = i; j < nums.Length; j++) {
                int current =  i == 0 ? nums[j] - 1 : nums[i - 1];
                if(Math.Abs(nums[j] - current) == 1) {
                    (long jsum, long jcount, bool visited) res = DFS(j + 1);
                    sum = (sum + res.jsum) % MOD;
                    sum = (sum + ((currSum * res.jcount) % MOD)) % MOD;
                    count = (count + res.jcount) % MOD;  
                }
            }
            return dp[i] = (sum, count, true);
        }

        (long sum, long count, bool visited) result = DFS(0);
        return (int)(result.sum % MOD);
    }
}
```
# DP Tabulation (TLE)
- What it does: Converts the recursive solution into a bottom-up dynamic programming approach using tabulation.
- Why it still fails: The nested loops still result in high time complexity.

``` csharp []
public class Solution {
    public int SumOfGoodSubsequences(int[] nums) {
        const int MOD = 1000000007;
        (long, long, bool)[] dp = new (long, long, bool)[nums.Length + 1];

        dp[nums.Length] = (0, 0, true);

        for(int i = nums.Length; i >= 0; i--) {        
            long currSum = i == 0 ? 0 : nums[i - 1];
            long sum = currSum;
            long count = 1;
            for(int j = i; j < nums.Length; j++) {
                int current =  i == 0 ? nums[j] - 1 : nums[i - 1];
                if(Math.Abs(nums[j] - current) == 1) {
                    (long jsum, long jcount, bool visited) res = dp[j + 1];
                    sum = (sum + res.jsum) % MOD;
                    sum = (sum + ((currSum * res.jcount) % MOD)) % MOD;
                    count = (count + res.jcount) % MOD;  
                }
            }
            dp[i] = (sum, count, true);
        }

        (long sum, long count, bool visited) result = dp[0];
        return (int)(result.sum % MOD);
    }
}
```

# DP Tabulation bottom up (TLE)
We notice that in the tabulation approach, starting from the end of the array allows us to update counts for elements that could appear later.

To make this efficient, we use a dictionary to map each unique element in the array to its list of indices. This way, we track where each number occurs in the array (storing i + 1 for ease of use with our DP array).

As we process the array backwards, we use these indices to efficiently iterate over prior occurrences of matching values, updating their counts and sums until we reach the current index. This avoids redundant calculations and keeps the solution streamlined.

```csharp []
public class Solution {
    public int SumOfGoodSubsequences(int[] nums) {
        const long MOD = 1000000007;
        Dictionary<int, List<int>> dict = new();

        for(int i = 0; i < nums.Length; i++) {
            if(!dict.ContainsKey(nums[i])) {
                dict[nums[i]] = new List<int>();
            }
            dict[nums[i]].Add(i + 1);
        }

        (long, long)[] dp = new (long, long)[nums.Length + 2];
        dp[nums.Length + 1] = (0 , 0);

        for(int i = nums.Length; i > 0; i--) {
            int current = i - 1;
            (long sum, long count) dpval= dp[i];
            dpval.sum = ((nums[current] + ((nums[current] * dpval.count) % MOD) % MOD) + dpval.sum) % MOD;
            dpval.count = (dpval.count + 1) % MOD;

            dp[i] =  (dpval.sum, dpval.count);

            if(dict.ContainsKey(nums[current] - 1)) {
                for(int j = 0; j < dict[nums[current] - 1].Count; j++) {
                    int index = dict[nums[current] - 1][j];
                    if(index >= i) {
                        break;
                    }
                    
                    (long sum, long count) dpvalmatch = dp[index];
                    dpvalmatch.count += dpval.count;
                    dpvalmatch.sum = (dpvalmatch.sum + dpval.sum) % MOD;

                    dp[index] = (dpvalmatch.sum, dpvalmatch.count);
                }
            }

            if(dict.ContainsKey(nums[current] + 1)) {
                for(int j = 0; j < dict[nums[current] + 1].Count; j++) {
                    int index = dict[nums[current] + 1][j];

                    if(index >= i) {
                        break;
                    }

                    (long sum, long count) dpvalmatch = dp[index];
                    dpvalmatch.count += dpval.count;
                    dpvalmatch.sum = (dpvalmatch.sum + dpval.sum) % MOD;

                    dp[index] = (dpvalmatch.sum, dpvalmatch.count);
                }
            }

            (long sum, long count) dpvalmatchz = dp[0];
            dpvalmatchz.sum = (dpvalmatchz.sum + dpval.sum) % MOD;
            dp[0] = (dpvalmatchz.sum, dpvalmatchz.count);
        }

        (long sum, long) result = dp[0];

        return (int)result.sum;
    }
}
```

# DP Tabulation bottom up with last window (Accepted)
From the previous code, we notice that we don't need to keep track of values at every individual index.

For example, if the number 2 appears at indices 4, 5, and 6, earlier we updated it separately for all these indices. However, these updates often result in duplicates until we process each element, and many updates remain unused after crossing those indices.

Instead, we can optimize by keeping a single cumulative copy for the number 2, updating it only once as we process the array. This removes redundancy and makes the solution more efficient.

```csharp []
public class Solution {
    public int SumOfGoodSubsequences(int[] nums) {
        const long MOD = 1000000007;
        long sum = 0;
        Dictionary<int, (long, long)> dict = new();

        for(int i = 0; i < nums.Length; i++) {
            if(!dict.ContainsKey(nums[i])) {
                dict[nums[i]] = (0, 0);
            }
        }

        for(int i = nums.Length; i > 0; i--) {
            int current = i - 1;
            (long sum, long count) dpval = dict[nums[current]];
            dpval.sum = ((nums[current] + ((nums[current] * dpval.count) % MOD) % MOD) + dpval.sum) % MOD;
            dpval.count = (dpval.count + 1) % MOD;
            sum = (sum + dpval.sum) % MOD;

            foreach (int adj in new[] { nums[current] - 1, nums[current] + 1 }) {
                if (dict.ContainsKey(adj)) {
                    (long sum, long count) dpvalmatch = dict[adj];
                    dpvalmatch.count = (dpvalmatch.count + dpval.count) % MOD;
                    dpvalmatch.sum = (dpvalmatch.sum + dpval.sum) % MOD;

                    dict[adj] = (dpvalmatch.sum, dpvalmatch.count);
                }
            }
        }

        return (int)sum;
    }
}
```