# Rust Solution with hashset

**Author:** realsdx
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/4139676/](https://leetcode.com/problems/four-divisors/solutions/4139676/)

---



# Code
```
use std::collections::HashSet;
impl Solution {
    pub fn sum_four_divisors(nums: Vec<i32>) -> i32 {
        let mut sum: i32 = 0;

        for num in nums {
            let mut dc: HashSet<i32> = HashSet::new();

            let to_num: i32 = (num as f64).sqrt() as i32+1;
            for i in (1..to_num) {
                if num%i == 0 {
                    dc.insert(i);
                    dc.insert(num/i);
                }
                if dc.len() > 4 {
                    break;
                }
            }

            if dc.len() == 4 {
                sum += dc.iter().sum::<i32>();
            }
        }

        return sum;
    }
}
```