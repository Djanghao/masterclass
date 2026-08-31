# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/3359051/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/3359051/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
  pub fn moves_to_make_zigzag(nums: Vec<i32>) -> i32 {
    let n = nums.len();

    // A[0] > A[1] < A[2] > A[3] < A[4] >    
    let mut p1 = 0;
    let mut lv = nums[0];
    for i in 1..n {
      let cv = nums[i];
      if i % 2 == 1 {
        if lv <= cv {
          let diff = cv - lv + 1;
          p1 += diff;
          lv = cv - diff;
        } else {
          lv = cv;
        }
      } else {
        if lv >= cv {
          let diff = lv - cv + 1;
          p1 += diff;
        }
        lv = cv;
      }
    }

    // A[0] < A[1] > A[2] < A[3] > A[4] <
    let mut p2 = 0;
    let mut lv = nums[0];
    for i in 1..n {
      let cv = nums[i];
      if i % 2 == 1 {
        if lv >= cv {
          let diff = lv - cv + 1;
          p2 += diff;
        }
        lv = cv;
      } else {
        if lv <= cv {
          let diff = cv - lv + 1;
          p2 += diff;
          lv = cv - diff;
        } else {
          lv = cv;
        }
      }
    }

    p1.min(p2)
  }
}
```