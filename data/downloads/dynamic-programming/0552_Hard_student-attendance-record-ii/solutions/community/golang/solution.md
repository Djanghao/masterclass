# DP Approach [Explained] [Golang]

**Author:** deannos
**Votes:** 3
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/5209853/](https://leetcode.com/problems/student-attendance-record-ii/solutions/5209853/)

---

# Intuition
To solve this problem, we need to count the number of valid attendance records of length n that can be formed under specific conditions. A valid record cannot contain more than one 'A' (absent) and cannot have more than two consecutive 'L's (late). My first thought was to use dynamic programming to build up the count of valid sequences incrementally.

# Approach

**1. Dynamic Programming (DP) Array:**

   - We use a DP array dp where dp[i] represents the count of valid sequences of length i without an 'A'.
   - Initialize base cases for lengths 0, 1, 2, and 3, since they can be manually computed:

     ```
     dp[0] = 1 (empty sequence)
     dp[1] = 2 ("P", "L")
     dp[2] = 4 ("PP", "PL", "LP", "LL")
     dp[3] = 7 ("PPP", "PPL", "PLP", "PLL", "LPP", "LPL", "LLP")

     ```

**2. Filling the DP Array:**

   - For lengths from 4 to n, compute dp[i] using the relation:

     ```
      dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % 1000000007

     ```


   - This ensures we account for sequences ending with "P", "PL", and "PLL".

**3.  Sequences with One 'A':**

- For sequences of length n with exactly one 'A', place the 'A' in every possible position and count valid sequences on either side of 'A':

    - For each position i from 0 to n-1, the sequences are dp[i] on the left of 'A' and dp[n-1-i] on the right.
    - Accumulate these counts:
    
      ```
       withA = (withA + dp[i] * dp[n-1-i]) % 1000000007.
      ```

**4. Total Valid Sequences:**

- The total count is the sum of sequences with and without 'A':

  ```
  result = (dp[n] + withA) % 1000000007.
  ```


# Complexity

**1.  Time complexity:**

- The time complexity is \uD835\uDC42(\uD835\uDC5B) because we fill the DP array in a single pass from 0 to n and perform another pass to compute sequences with one 'A'.

**2. Space complexity:**

- The space complexity is \uD835\uDC42(\uD835\uDC5B) due to the storage required for the DP array.




# Code
```
func checkRecord(n int) int {
	const MOD = 1000000007

	// Handle small values of n directly
	switch n {
	case 1:
		return 3
	case 2:
		return 8
	case 3:
		return 19
	}

	// dp[i] represents the count of valid sequences of length i without 'A'
	dp := make([]int, n+1)
	dp[0] = 1 // Base case: an empty sequence
	dp[1] = 2 // "P", "L"
	dp[2] = 4 // "PP", "PL", "LP", "LL"
	dp[3] = 7 // "PPP", "PPL", "PLP", "PLL", "LPP", "LPL", "LLP"

	// Fill the dp array for lengths from 4 to n
	for i := 4; i <= n; i++ {
		dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % MOD
	}

	// Calculate the number of valid sequences with exactly one 'A'
	withA := 0
	for i := 0; i < n; i++ {
		withA = (withA + dp[i]*dp[n-1-i]) % MOD
	}

	// The total count is the sum of sequences with and without 'A'
	return (dp[n] + withA) % MOD
}

```