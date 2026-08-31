# Rust Solution using Ternary Search

**Author:** rchaser53
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/3029793/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/3029793/)

---


# Code
```
fn helper(arr: &Vec<i32>, target:i32, mid:i32) -> i32 {
  let mut temp = 0;
  for &v in arr {
    temp += v.min(mid);
  }
  (target-temp).abs()
}

impl Solution {
    pub fn find_best_value(arr: Vec<i32>, target: i32) -> i32 {
      let mut left = 0;
      let mut right = 100010;
      while left + 2 < right {
        let lr1 = (left * 2 + right) / 3;
        let lr2 = (left + right * 2) / 3;
    
        let lr1v = helper(&arr, target, lr1);
        let lr2v = helper(&arr, target, lr2);
        
        if lr1v > lr2v {
          left = lr1;
        } else {
          right = lr2;
        }
      }

      let mut min = i32::max_value();
      let mut result = 0;
      for mid in (left..=right).rev() {
        let v = helper(&arr, target, mid);
        if v <= min {
          min = v;
          result = mid;
        }
      }

      result
    }
}
```