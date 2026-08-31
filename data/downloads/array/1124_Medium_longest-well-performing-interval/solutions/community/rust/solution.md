# SImple Solution

**Author:** n0b0dy01
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/4852486/](https://leetcode.com/problems/longest-well-performing-interval/solutions/4852486/)

---

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn longest_wpi(hours: Vec<i32>) -> i32 {
        let mut map = HashMap::new();
        let mut sum = 0;
        let mut max_len = 0;
        for i in 0..hours.len() {
            let num = if hours[i] > 8 { 1 } else { -1 };
            sum += num;

            map.entry(sum).or_insert(i);

            if sum > 0 {
                max_len = i + 1;
            } else if map.contains_key(&(sum - 1)) {
                max_len = std::cmp::max(max_len, i - *map.get(&(sum - 1)).unwrap());
            }
        }
        max_len as _
    }
}

```