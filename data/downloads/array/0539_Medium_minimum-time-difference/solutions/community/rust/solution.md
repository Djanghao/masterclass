# Rust Solution | Detailed Explanation

**Author:** vibhushit
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5795883/](https://leetcode.com/problems/minimum-time-difference/solutions/5795883/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key insight for this problem is to realize that:
1. Converting times to minutes simplifies comparisons.
2. Sorting the times allows us to easily compare adjacent times.
3. We need to consider the circular nature of time (e.g., the difference between 23:59 and 00:01).

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Convert to Minutes**: 
   Convert each time string to minutes since midnight. This makes comparisons easier.

2. **Sort**: 
   Sort the minutes. This allows us to compare adjacent times efficiently.

3. **Compare Adjacent Times**: 
   Iterate through the sorted list, comparing each time with the next one.

4. **Handle Circular Time**: 
   Compare the first and last time, considering the wrap-around at midnight.

5. **Find Minimum**: 
   Keep track of the smallest difference found.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The overall time complexity is dominated by the sorting step: O(n log n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The overall space complexity is O(n).

# Code
```rust []
impl Solution {
    pub fn find_min_difference(time_points: Vec<String>) -> i32 {
        if time_points.len() > 1440 {
            return 0; // If more than 1440 time points, there must be a duplicate
        }

        let mut minutes: Vec<i32> = time_points.iter()
            .map(|t| t[..2].parse::<i32>().unwrap() * 60 + t[3..].parse::<i32>().unwrap())
            .collect();

        minutes.sort_unstable();
        minutes.push(minutes[0] + 1440); // Add first element + 1440 to handle circular nature

        minutes.windows(2)
            .map(|w| w[1] - w[0])
            .min()
            .unwrap()
    }
}
```