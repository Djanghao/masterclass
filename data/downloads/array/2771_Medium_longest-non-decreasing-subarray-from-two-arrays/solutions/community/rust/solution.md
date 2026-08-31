# Rust Solution using BFS

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3831375/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3831375/)

---

# Code
```
impl Solution {
  pub fn max_non_decreasing_length(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
    let n = nums1.len();
    let mut g = vec![vec![];2*n];

    for i in 0..n-1 {
      let cv1 = nums1[i];
      let cv2 = nums2[i];
      let nv1 = nums1[i+1];
      let nv2 = nums2[i+1];
      
      if cv1 <= nv1 {
        g[i+1].push(i);
      }
      if cv1 <= nv2 {
        g[n+i+1].push(i);
      }
      if cv2 <= nv1 {
        g[i+1].push(n+i);
      }
      if cv2 <= nv2 {
        g[n+i+1].push(n+i);
      }
    }

    let mut memo = vec![0;2*n];
    for si in (0..2*n).rev() {
      if 1 <= memo[si] { continue }
      let mut stack = vec![(1,si)];
      while !stack.is_empty() {
        let mut new_stack = vec![];
        while let Some((cv,ci)) = stack.pop() {
          let nv = cv + 1;
          for &ni in &g[ci] {
            if memo[ni] < nv {
              memo[ni] = nv;
              new_stack.push((nv, ni));
            }
          }
        }
        stack = new_stack;
      }
    }
    let mut result = 1;
    for v in memo {
      result = result.max(v);
    }
    result
  }
}
```