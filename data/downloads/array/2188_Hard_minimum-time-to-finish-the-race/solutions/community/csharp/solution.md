# Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/6021613/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/6021613/)

---

# Intuition
Minimize the total time to finish numLaps laps using any of the given tires, each with a distinct lap-time pattern. The tires get progressively slower for each successive lap, so you need to decide whether to continue with the same tire or switch to another one to minimize overall time. The challenge is to compute the best combination of tire choices and lap transitions.

# Approach
Precompute the fastest times for completing each lap with every tire, then use dynamic programming to calculate the minimum time to complete all laps, considering both continuing with the same tire or switching tires with a time penalty.

# Complexity
- Time complexity:
\uD835\uDC42 ( \uD835\uDC5B \xD7 numLaps 2 ) O(n\xD7numLaps 2 ), where n is the number of tire types and numLaps is the number of laps. This is because we calculate the time for each tire\u2019s lap sequence and then use dynamic programming to evaluate all possible lap combinations.

- Space complexity:
O(numLaps) due to the dp array used for storing the minimum times for each number of laps. We also use \uD835\uDC42 ( 20 ) O(20) for the reach array, which tracks the best lap times for each tire type.

# Code
```csharp []
public class Solution {
    // dp array stores the minimum time for completing 'i' laps
    // reach array stores the minimum time to complete the 'i-th' lap using any tire
    private int[] dp = new int[1001];
    private int[] reach = new int[20];
    private int max = 0; // Variable to keep track of the maximum laps we can compute using tires

    public int MinimumFinishTime(int[][] tires, int changeTime, int numLaps) {
        // Step 1: For each tire, calculate the minimum time to complete the x-th lap.
        foreach (var tire in tires) {
            int a = tire[0], b = tire[0]; // a represents the time for the 1st lap, b is used to calculate time for successive laps
            for (int i = 1; i <= numLaps && b < tire[0] + changeTime; i++) {
                // Update the minimum time to reach the i-th lap using this tire
                if (reach[i] == 0 || reach[i] > a) reach[i] = a;
                max = Math.Max(max, i); // Update the maximum lap number we can compute using this tire
                b *= tire[1]; // Update the time for the next lap (multiply by the rate 'r')
                a += b; // Accumulate the time for this lap
            }
        }

        // Step 2: Find the minimum time for completing numLaps using the available tire data
        return Find(changeTime, numLaps) - changeTime; // Subtract changeTime since it should not be counted in the result
    }

    // Step 3: Recursive function to calculate the minimum time to complete 'laps' laps
    private int Find(int time, int laps) {
        // Base case: If no laps are needed, the time is 0
        if (laps == 0) return 0;

        // If the result for 'laps' is already calculated, return it from the dp array
        if (dp[laps] != 0) return dp[laps];

        // Initialize the result to a large number (Integer.MAX_VALUE in Java, int.MaxValue in C#)
        int ret = int.MaxValue;

        // Try completing laps by taking each possible combination of earlier laps
        for (int i = 1; i <= Math.Min(laps, max); i++) {
            ret = Math.Min(ret, time + reach[i] + Find(time, laps - i)); // Minimize the time
        }

        // Store the result in dp[laps] for future reference
        return dp[laps] = ret;
    }
}

```