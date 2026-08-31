# Rust | 0 ms | VecDeque | No Strings, just Maths

**Author:** FabiSahne
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5486567/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/5486567/)

---

# Code
```
use std::collections::VecDeque;
impl Solution {
    pub fn find_the_array_conc_val(nums: Vec<i32>) -> i64 {
        let mut queue: VecDeque<i64> = nums.into_iter().map(|x| x as i64).collect();
        let mut conc_val = 0;
        while !queue.is_empty() {
            let last = queue.pop_back().unwrap();
            let log = 10i64.pow(last.ilog10() + 1);
            conc_val += queue.pop_front().unwrap_or_default() * log + last;        
        }
        conc_val
    }
}
```