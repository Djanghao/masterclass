# Rust - Two pointers

**Author:** MokuHazushi
**Votes:** 9
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/1977708/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/1977708/)

---

I just started learning Rust, any improvement advices are welcome!

```
use std::cmp::Ordering;

impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        let mut i = 0;
        let mut j = numbers.len()-1;
        
        while i < j {
            match (numbers[i]+numbers[j]).cmp(&target) {
                Ordering::Less => i += 1,
                Ordering::Greater => j -= 1,
                Ordering::Equal => return vec![(i+1) as i32, (j+1) as i32],
            }
        }
        unreachable!();
    }
}
```