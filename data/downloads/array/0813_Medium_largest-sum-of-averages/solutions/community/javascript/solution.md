# JavaScript Solution - Dynamic Programming Solution

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/784485/](https://leetcode.com/problems/largest-sum-of-averages/solutions/784485/)

---

The way that I comprehended this problem was thinking of having `K` groups as equivalent to having `K-1` dividers and figuring out the placement of each one to get the maximum average. If we know the best placement of the first divider from index 0 to 1, 0 to 2, ..., and 0 to n - 1, then we could use this information to figure out the best placement of the second divider from index 0 to 1, 0 to 2, ..., 0 to n - 1. This gives us the structure for our `dp`. We will also create prefixSum `sum` to quickly compute the average of the sums in intervals `[i, j]`.
<br>

```
var largestSumOfAverages = function (A, K) {
    const N = A.length;
        
    const sums = new Array(N); // the prefix sum
    sums[0] = A[0]; // initialize the first sum
    
    for (let i = 1; i < N; i++) {
        sums[i] = sums[i - 1] + A[i]; // sums[i] equals the previous sum + A[i]
    }
    
    const dp = Array.from(Array(K), () => Array(N).fill(0)); // Create a 2-D dp array of size K by N.
    dp[0][0] = A[0];
    
    // initialize the condition when we have 0 dividers
    for (let i = 1; i < N; i++) {
        dp[0][i] = sums[i] / (i + 1);
    }

    for (let k = 1; k < K; k++) { // k = the # of dividers we currently have. It is represented as the row of the dp array
        for (let i = k; i < N; i++) { // i = index of the array A. We want to figure out the best position to place the divider for A[0...i].
            
            for (let j = 0; j < i; j++) { // j represents the placement of the divider
                const avgBefore = dp[k - 1][j]; // The best avg. we could have from interval [0, j] when we had 1 less divider than current.
                const avgAfter = (sums[i] - sums[j]) / (i - j); // The avg. of the sums after the placement of the divider (j + 1) up to i.
                
                dp[k][i] = Math.max(dp[k][i], avgBefore + avgAfter);
            }
        }
    }

    return dp[K - 1][N - 1];
};
```

If you noticed from the code above, we are starting every `i` at `k`. Also, we are only using the previous row information for each iteration of `k`. We can optimize for space and use a 1D array. We would iterate from the back to prevent overcounting. Everything else is pretty much the same.

```
var largestSumOfAverages = function (A, K) {
    const N = A.length;
        
    const sums = new Array(N);
    sums[0] = A[0];
    
    for (let i = 1; i < N; i++) {
        sums[i] = sums[i - 1] + A[i];
    }
    
    const dp = new Array(N).fill(0); // Just a 1D array.
    dp[0] = A[0];
    
   
    for (let i = 1; i < N; i++) {
        dp[i] = sums[i] / (i + 1);
    }

    for (let k = 1; k < K; k++) {
        for (let i = N - 1; i >= k; i--) { // We iterate from the back to avoid overcounting. We still end at k.
            
			dp[i] = 0; // reset dp[i] for the new row
            
            for (let j = i - 1; j >= 0; j--) {
                const avgBefore = dp[j]; 
                const avgAfter = (sums[i] - sums[j]) / (i - j);
                
                dp[i] = Math.max(dp[i], avgBefore + avgAfter);
            }
        }
    }

    return dp[N - 1];
};
```