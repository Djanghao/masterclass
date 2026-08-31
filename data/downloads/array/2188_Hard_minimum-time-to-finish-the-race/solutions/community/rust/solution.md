# Rust solution unbounded knapsack

**Author:** mimanshu-maheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/6058789/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/6058789/)

---

# Code
```rust []
use std::cmp::min;
impl Solution {

        pub fn minimum_finish_time(tires: Vec<Vec<i32>>, change_time: i32, num_laps: i32) -> i32 {
        // Precompute the minimum time to complete laps with each tire
        let num_laps = num_laps as usize;
        let change_time = change_time;
        let max_consecutive_laps = 18; // based on the limits as 2 power 18 > change time always, 2 is min r value
        let mut tyre_min_lap_time = vec![i32::MAX; max_consecutive_laps + 1];
        
        for tyre in tires.iter() {
            let f = tyre[0]; // Initial time for the first lap
            let r = tyre[1]; // Reduction factor
            let mut total_laps_time = 0;
            let mut lap_time = f;
            
            for i in 1..=max_consecutive_laps {
                total_laps_time += lap_time;
                // it should not be more than max f value + max change_time
                if total_laps_time > 200001 {
                    break;
                }
                tyre_min_lap_time[i] = min(tyre_min_lap_time[i], total_laps_time);
                lap_time *= r; // Increase the lap time for the next lap
            }
        }
    
        // Initialize the DP table
        let mut dp = vec![0; num_laps + 1];
        
        // DP transition for filling the dp array with the minimum times
        for laps in 1..=num_laps {
            // Update dp for the current lap count directly from the precomputed tire times
            dp[laps] = if laps <= max_consecutive_laps { tyre_min_lap_time[laps] } else { i32::MAX };
            
            // Try splitting the laps into two parts: complete some laps with one tire, then switch
            for less in 1..=laps.min(max_consecutive_laps) {
                // If dp[less] is i32::MAX, skip it because it's not possible to complete this subproblem
                if dp[less] == i32::MAX {
                    break;
                }
                dp[laps] = min(
                    dp[laps], 
                    dp[laps - less] + dp[less] + change_time
                );
            }
        }
        dp[num_laps]
    }


    // /// dfs solution TLE error
    // pub fn minimum_finish_time(tires: Vec<Vec<i32>>, change_time: i32, num_laps: i32) -> i32 {
    //     // will have min time
    //     let mut min_time = i32::MAX;
    //     // do a dfs taking all the tyres as start
    //     for i in 0..tires.len() {
    //         min_time = min(
    //             min_time,
    //             Self::dfs(&tires, change_time, num_laps as usize, i, 1),
    //         );
    //     }
    //     min_time
    // }

    // fn dfs(
    //     tires: &Vec<Vec<i32>>,
    //     change_time: i32,
    //     remaining_laps: usize,
    //     tire_idx: usize,
    //     consecutive_laps: usize,
    // ) -> i32 {
    //     // Base case: No laps left
    //     if remaining_laps == 0 {
    //         return 0;
    //     }

    //     let f = tires[tire_idx][0]; // Initial time for one lap
    //     let r = tires[tire_idx][1]; // Multiplier for consecutive laps

    //     // Time to complete the current lap with the same tire
    //     let current_lap_time = f * r.pow((consecutive_laps - 1) as u32);

    //     // Option 1: Use the same tire for the next lap
    //     let mut min_time = i32::MAX;

    //     if current_lap_time <= change_time + f {
    //         min_time = current_lap_time
    //             + Self::dfs(tires, change_time, remaining_laps - 1, tire_idx, consecutive_laps + 1);
    //     }

    //     // Option 2: Switch to a new tire (add change_time penalty)
    //     for i in 0..tires.len() {
    //         let switch_time = change_time
    //             + Self::dfs(tires, change_time, remaining_laps - 1, i, 1);
    //         min_time = min(min_time, current_lap_time + switch_time);
    //     }

    //     min_time
    // }
}
```