# DFS with binary search

**Author:** germanov_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5467431/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5467431/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::HashSet;
impl Solution {
    pub fn max_total_reward(mut reward_values: Vec<i32>) -> i32 {
        reward_values.sort_unstable();
        let mut stack = vec![];
        let mut result = 0;
        for value in &reward_values {
            let point = reward_values.partition_point(|item| *item < *value+1);
            if point >= reward_values.len() {
                result = result.max(*value);
                continue
            }
            stack.push((*value,point));
        }
        let mut visited = HashSet::new();
        while !stack.is_empty() {
            let (summ, point) = stack.pop().unwrap();
            if visited.contains(&(summ,point)) { continue }
            visited.insert((summ,point));
            for value in &reward_values[point..] {
                let point = &reward_values.partition_point(|item| *item < summ+value+1);
                if point >= &reward_values.len() {
                    result = result.max(summ+value);
                    continue
                }
                stack.push((summ+*value,*point));
            }
        }        
        result
    }
}
```