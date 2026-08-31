# Rust linear time, constant space with detailed explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/3643198/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/3643198/)

---

# Intuition
The problem is pretty straightforward from math point of view but have multiple edge cases. 

You need to find the differences between those numbers. There will be only two possible differences (in normal arithmetic progression it will be only one). One of them will be correct difference and another is due to our missed value. Correct one will be seen many times.

So after you found the correct and wrong difference, you iterate over array another time and if you see that the difference is wrong, you fix it by applying good difference.

----------

Now the edge cases:

 1. All numbers are the same. This means that all differences will be zero. In this case the missing number is the number from array
 2. We have only 3 elements. In this case the both good and bad difference will be seen only once. So we can't find which one is bad/good. In this case the bad will be `max(abs(v))`

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
use std::collections::HashMap;

impl Solution {
  pub fn missing_number(arr: Vec<i32>) -> i32 {
    let (mut diff_bad, mut diff_good) = (-1, -1);

    if arr.len() == 3 {
      let v1 = arr[1] - arr[0];
      let v2 = arr[2] - arr[1];
      if v1 < 0 {
        diff_bad = v1.min(v2);
        diff_good = v1.max(v2);
      } else if v1 > 0 {
        diff_bad = v1.max(v2);
        diff_good = v1.min(v2);
      } else {
        return arr[0];
      }
    } else {
      let mut map = HashMap::new();
      for i in 1 .. arr.len() {
        *map.entry(arr[i] - arr[i - 1]).or_insert(0) += 1;
      }
      
      for (k, v) in map {
        if v == 1 {
          diff_bad = k;
        } else {
          diff_good = k;
        }
      }
    }

    if diff_good == 0 {
      return arr[0];
    }

    for i in 0 .. arr.len() - 1 {
      if arr[i + 1] - arr[i] == diff_bad {
        return arr[i] + diff_good;
      }
    }

    return -1;
  }
}
```