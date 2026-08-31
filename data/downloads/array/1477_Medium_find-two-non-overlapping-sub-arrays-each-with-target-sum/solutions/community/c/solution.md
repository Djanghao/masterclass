# C++ "General" DP Solution (N Non-overlapping sub-arrays)

**Author:** tom0727
**Votes:** 108
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/688689/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/688689/)

---

What if the problem changes to find **N** Non-overlapping Sub-arrays Each With Target Sum, **instead of two**?

I would like to provide a more **General** solution here:

Denote `dp[i][j]` as: 
We are only using `arr[1,2,...,i]`, and we have found `j` non-overlapping sub-arrays with target sum. The value of `dp[i][j`] is the minimum sum of the lengths of the sub-arrays.

Then we have the equation:
```
dp[i][j] = min(dp[i-1][j], dp[d][j-1] + i - d)
```

Explanation:
1. `dp[i][j] <= dp[i-1][j]`: 
This is because, we are considering more elements than before, hence the result can only be better (the length is smaller).
2. `dp[d][j-1] + i - d`: 
The `d` here is the index satisfying `sum(arr[i-d+1,...,i]) = target`. This sub-array has length = `i-d`.
To ensure the sub-arrays don't overlap, the rest of the sub-arrays must use index `<= d`, hence this is why we use `dp[d][j-1]` here.
To quickly find such `d`, use a unordered_map to keep track of the prefix sum.

In the code:
Notice that we are using index from 1 to n, hence we can easily use index 0 to prevent extra checking.
Also notice that we are initializing `dp[i][0] = 0`, because if we can't find any subarray, the sum of length must be 0.

Then, the answer is given by` dp[n][j]`. In this problem,` j = 2`.

```
class Solution {
public:
    int dp[100005][3];  //if asking for n subarrays, change 3 to n+1
    unordered_map<int,int> sm;  // keep track of (prefixsum : index)  
    
    int minSumOfLengths(vector<int>& arr, int tar) {
        int n = arr.size(), cursum = 0;
        sm[0] = 0;
        memset(dp, 127, sizeof(dp));  //initialize to INF
        for (int i = 0; i < 100005; i++) dp[i][0] = 0;  //if we doesn't find a subarray, len = 0
        
        for (int i = 1; i <= n; i++) {
            int d = -1;  //initialize to -1
            cursum += arr[i-1];
            sm[cursum] = i;
            if (sm.count(cursum - tar)) d = sm[cursum-tar];
            
            for (int j = 1; j <= 2; j++) {  // if asking for n subarrays, change 2 to n
                dp[i][j] = min(dp[i][j], dp[i-1][j]);  //dp[i][j] must <= dp[i-1][j]
                if (d != -1) dp[i][j] = min(dp[i][j],dp[d][j-1] + i - d);
            }
        }
        if (dp[n][2] > 1e9) return -1;   // if asking for n subarrays, change 2 to n
        return dp[n][2];   // if asking for n subarrays, change 2 to n
    }
};
```