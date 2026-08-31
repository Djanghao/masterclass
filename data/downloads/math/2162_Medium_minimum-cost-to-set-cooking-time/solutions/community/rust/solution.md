# Rust, O(1)

**Author:** kichooo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/4689258/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/4689258/)

---

# Code
```
impl Solution {
    pub fn min_cost_set_time(
        start_at: i32,
        move_cost: i32,
        push_cost: i32,
        target_seconds: i32,
    ) -> i32 {
        fn cost(start_at: i32, move_cost: i32, push_cost: i32, minutes: i32, seconds: i32) -> i32 {
            let mut number = minutes * 100 + seconds;
            let mut cost = 0;
            let mut current_digit = number % 10;
            while number > 0 {
                cost += push_cost;
                if current_digit != number % 10 {
                    cost += move_cost;
                    current_digit = number % 10;
                }
                number /= 10;
            }

            if current_digit != start_at {
                cost += move_cost;
            }
            cost
        }

        let minutes = target_seconds / 60;
        let seconds = target_seconds % 60;                
        
        if minutes >= 100 {
            return cost(start_at, move_cost, push_cost, minutes - 1, seconds + 60)
        }

        let mut best_cost = cost(start_at, move_cost, push_cost, minutes, seconds);
        if minutes > 0 && seconds <= 39 {
            cost(start_at, move_cost, push_cost, minutes - 1, seconds + 60).min(best_cost)
        } else {
            best_cost
        }
    }
}

```