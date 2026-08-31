# Tricky Dynamic Programming problem, first solution in Go.

**Author:** antcarver
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/3245190/](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/3245190/)

---

# Intuition
A dynamic program, but with a bit counter subproblem which parameterises the "answer", the number of skips.

# Approach
I side-step a potential issue with fractional arithmetic by essentially using a fixed point number in base "speed" for time. So rounding up to the next integer is actually rounding up to the next multiple of speed.  
The dynamic program subproblem result is the minimum number of hours to reach the destination from a position with at most n skips. So dp[i][skips] is a time where i is the index of the position in the dist[] array and skips is a variable which ranges from 0 to len(dist)-1.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```
// Round up to the nearest integer using a speed radix.
func speedCeil(time int, speed int) int {
    // round up to the nearest multiple of speed
    return ( (time + speed - 1) / speed) * speed;
}

func min(a int, b int) int {
    if a < b {
        return a
    } else {
        return b
    }
}

func minSkips(dist []int, speed int, hoursBefore int) int {
    // subproblem is the minimum number of hours
    // to reach destination from here with at most n skips.

    // times are stored with a radix of speed to avoid dealing with floats or rationals.
    // Technically should use int64 since speed is upto 10^6 and dist[i] is upto 10^5.
    dp := make([][]int, len(dist), len(dist));
    for i := 0; i < len(dist); i++ {
        dp[i] = make([]int, len(dist), len(dist))
    }

    // The final step needs not skip, per the spec.
    dp[len(dist)-1][0] = dist[len(dist)-1]
    for i := len(dist) - 2; i >= 0; i-- {
        // dp[i][0] is the time with no skips, so we always
        dp[i][0] = speedCeil(dp[i+1][0], speed) + dist[i];
        for skips := 1; skips < len(dist) - 1 - i; skips++ {
            // time := dist[i] / speed  (since we use speed radix this is a no-op)
        
            // Choose between an answer from the same point with lower skips, and an 
            // answer with no additional skips added here and an answer with one additional
            // skip added here.

            dp[i][skips] = min(dp[i][skips-1], 
                min(speedCeil(dp[i+1][skips], speed)+ dist[i], dp[i+1][skips-1] + dist[i]))
        }
        skips := len(dist) - 1 - i
        // The case where there is a skip at every step. As this position can have one more 
        // skip than the previous this is the case where we only consider an answer from the
        // same point with lower skips, and an answer with one additional skip added here.

        dp[i][skips] = min(dp[i][skips-1], dp[i+1][skips-1]+dist[i])
    }

    needed := hoursBefore * speed
    for skips := 0; skips < len(dist); skips++ {
        if speedCeil(dp[0][skips], speed) <= needed {
            return skips 
        }
    }
    return -1
}
```