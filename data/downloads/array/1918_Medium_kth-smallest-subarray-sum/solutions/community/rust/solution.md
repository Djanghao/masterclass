# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/1983736/](https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/1983736/)

---

```
fn helper(arr: &Vec<i32>, mid:i32) -> i32 {
  let n = arr.len();
  let mut li = 0;
  let mut ri = 0;
  let mut temp = 0;
  let mut count = 0;

  while ri < n {
    temp += arr[ri];
    if mid < temp {
      while mid < temp {
        temp -= arr[li];
        li += 1;
      }
    }
    count += ri + 1 - li;
    ri += 1;
  }

  count as i32
}

impl Solution {
  pub fn kth_smallest_subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
    let mut left = *nums.iter().min().unwrap();
    let mut right = nums.iter().sum::<i32>();
    let tot = (nums.len() * (nums.len()+1) / 2) as i32;

    if k == 1 {
      return left
    } else if tot == k {
      return right
    }

    while left+1 < right {
      let mid = (left+right) / 2;
      let count = helper(&nums, mid);
      if k <= count as i32 {
        right = mid;
      } else {
        left = mid;
      }
    }

    right
  }
}
```