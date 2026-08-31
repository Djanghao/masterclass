# Rust Solution | Beats 100% | Space complexity O(1)

**Author:** abhineetraj1
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5823229/](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5823229/)

---

# Approach
1. **Binary Search**: Set the search space for time from 1 to a large number (e.g., \\(1e18\\)). The idea is to find the smallest time `t` such that the combined height reduction from all workers meets or exceeds the required mountain height.
2. **Height Calculation**: For a given time `t`, calculate how much height each worker can reduce using the formula derived from the problem constraints. Sum these reductions to check if they meet or exceed the required height.
3. **Check Function**: Implement a helper function `can_finish` that takes the mountain height, worker times, and the maximum time, and returns whether the workers can collectively reduce the mountain to the desired height in that time.

# Complexity
- **Time complexity**: The binary search runs in \\(O(log(max_time))\\), where `max_time` can be as large as \\(1e18\\). For each mid-point checked, we loop through the worker times, leading to an overall complexity of \\(O(n log(max_time))\\), where \\(n\\) is the number of workers.
  
- **Space complexity**: The space complexity is O(1) since we are using a fixed number of additional variables regardless of the input size.

# Code
```rust []
impl Solution {
    pub fn min_number_of_seconds(mountain_height: i32, worker_times: Vec<i32>) -> i64 {
        let mut left = 1;
        let mut right = 1e18 as i64; // Make `right` mutable

        while left < right {
            let mid = left + (right - left) / 2;
            if Self::can_finish(mountain_height, &worker_times, mid) {
                right = mid; // Reassigning to `right` is now valid
            } else {
                left = mid + 1;
            }
        }
        left
    }

    fn can_finish(mountain_height: i32, worker_times: &[i32], max_time: i64) -> bool {
        let mut total_reduced_height = 0;

        for &time in worker_times {
            let time = time as i64;
            let max_height = (-1.0 + (1.0 + 8.0 * max_time as f64 / time as f64).sqrt()) / 2.0; // Ensure both sides are f64
            total_reduced_height += max_height as i64;

            if total_reduced_height >= mountain_height as i64 {
                return true;
            }
        }
        total_reduced_height >= mountain_height as i64
    }
}

```