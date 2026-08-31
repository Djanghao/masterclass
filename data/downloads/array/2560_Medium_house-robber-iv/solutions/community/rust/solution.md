# binary search + closure

**Author:** system_f
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/4739410/](https://leetcode.com/problems/house-robber-iv/solutions/4739410/)

---

# Code
```
impl Solution {
    pub fn min_capability(nums: Vec<i32>, k: i32) -> i32 {
        go(nums, k)
    }
}

fn go(nums: Vec<i32>, k: i32) -> i32 {
  let (mut mn, mut mx) = (nums[0], nums[0]);
  for v in nums.iter().skip(1) {
    mn = mn.min(*v);
    mx = mx.max(*v);
  }

  let find = |t| {
    let mut conseq = 0;
    let mut cnt = 0;
    for n in nums.iter() {
      if n <= &t {
        conseq += 1;
      } else {
        if conseq > 0 {
          cnt += (conseq+1) / 2;
          conseq = 0;
        }
      }
    }
    (cnt + (conseq+1) / 2) >= k
  };

  // find the smallest capability that has a solution
  let (mut l, mut r) = (mn-1, mx);
  while l + 1 < r {
    let m = (l + r) >> 1;
    if find(m) {
      r = m;
    } else {
      l = m;
    }
  }
  r
}
```