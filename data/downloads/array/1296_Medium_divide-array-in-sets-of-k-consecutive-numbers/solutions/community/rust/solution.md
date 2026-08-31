# Rust || beats 100% || 23ms

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5266244/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5266244/)

---


# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn is_possible_divide(mut nums: Vec<i32>, k: i32) -> bool {
        if nums.len() % (k as usize) != 0 {
            return false;
        }
        let mut counter = HashMap::new();
        nums.sort();
        let mut keys = Vec::new();
        let mut prev_key = -1;
        for &h in nums.iter() {
            if prev_key != h {
                prev_key = h;
                keys.push(h);
            }
            *counter.entry(h).or_insert(0) += 1;
        }
        for &i in keys.iter() {
            while *counter.get(&i).unwrap() > 0 {
                for j in i..i+k {
                    let mut c = counter.entry(j).or_insert(0);
                    if *c == 0 {
                        return false;
                    }
                    *c -= 1;
                }
            }
        }
        true
    }
}
```