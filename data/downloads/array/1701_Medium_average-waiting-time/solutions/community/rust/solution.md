# Cheating with Rust

**Author:** emnopal
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5455641/](https://leetcode.com/problems/average-waiting-time/solutions/5455641/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn average_waiting_time(customers: Vec<Vec<i32>>) -> f64 {
        let mut total_time: i64 = 0;
        let mut wait_time: i64 = 0;
        
        for customer in &customers {
            let (arrival, load) = (customer[0] as i64, customer[1] as i64);
            if arrival > total_time {
                total_time = arrival + load
            } else {
                total_time += load
            }
            wait_time += total_time - arrival
        }
        
        let avg: f64 = wait_time as f64 / (customers.len() as i64) as f64;
        avg
    }
}
```