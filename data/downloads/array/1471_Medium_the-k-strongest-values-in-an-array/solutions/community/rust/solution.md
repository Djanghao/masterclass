# 2 sorting|rust|100% beats

**Author:** azenshpis
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/3638636/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/3638636/)

---

# Complexity
- Time complexity:
O(n*logn)

- Space complexity:
O(n)

# Code
```
impl Solution {
    pub fn get_strongest(arr: Vec<i32>, k: i32) -> Vec<i32> {
use std::cmp::Ordering;
        if arr.len() == 1 {
            return arr;
        }

        let mut result = arr;
        result.sort();
        let median: i32 = result[(result.len() - 1) / 2];       

        result.sort_by(|&a, &b| {
            let mut cmp = ((b - median) as i32)
                .abs()
                .cmp(&((a - median) as i32).abs());

            if cmp == Ordering::Equal {
                cmp = b.cmp(&a);
            }

            cmp            
        });

        result[..k as usize].to_vec()
    }
}
```