# Rust Solution using Segment Tree

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/5869146/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/5869146/)

---

# Complexity
- Time complexity:
$$O(n*log(n))$$ 

- Space complexity:
$$O(n*log(n))$$ 

# Code
```rust []
use std::collections::*;

type TreeType = isize;
pub struct SegmentTree {
  n: usize,
  arr: Vec<TreeType>,
  e: TreeType
}
impl SegmentTree {
  pub fn new(n: usize, e:TreeType) -> Self {
    let mut x = 1;
    while x < n {
      x *= 2;
    }
    SegmentTree {
      n:x,
      arr:vec![e;x*2],
      e
    }
  }
   
  pub fn update(&mut self, mut i: usize, val: TreeType) {
    i += self.n-1;
    self.arr[i] = val;
    while 0 < i {
      i = (i-1) / 2;
      self.arr[i] = std::cmp::max(self.arr[i*2+1], self.arr[i*2+2]);
    }
  }
  
  // a\u4EE5\u4E0A\u3001b\u672A\u6E80\u306B\u306A\u308B\u306E\u306B\u6CE8\u610F
  fn query(&self, a:usize, b:usize) -> TreeType {
    self.query_sub(a, b, 0, 0, self.n)
  }
 
  fn query_sub(
    &self, a:usize, b:usize,
    k:usize, l:usize, r:usize
  ) -> TreeType { 
    if r <= a || b <= l {
      self.e
    } else if a <= l && r <= b {
      self.arr[k]
    } else {
      let vl = self.query_sub(a, b, k*2+1, l, (l+r)/2);
      let vr = self.query_sub(a, b, k*2+2, (l+r)/2, r);
      std::cmp::max(vl,  vr)
    }
  }
}

impl Solution {
  pub fn maximum_triplet_value(nums: Vec<i32>) -> i32 {
    let nums = nums.into_iter().map(|v| v as isize).collect::<Vec<isize>>();
    let n = nums.len();
    let mut c = nums.clone();
    let mut set = HashSet::new();
    for v in &nums {
      set.insert(*v as isize);
    }
    let mut c = set.into_iter().collect::<Vec<isize>>();
    c.sort();

    let m = c.len();
    let mut map = HashMap::new();
    for i in 0..m {
      map.insert(c[i], i);
    }

    let default = -10isize.pow(15);
    let mut lt = SegmentTree::new(n+10, default);
    let mut r_map = HashMap::new();
    let mut rt = SegmentTree::new(n+10, default);

    let mut result = default;
    lt.update(*map.get(&nums[0]).unwrap(), nums[0]);

    for i in 1..n {
      let v = nums[i];
      *r_map.entry(v).or_insert(0) += 1;
      rt.update(*map.get(&nums[i]).unwrap(), nums[i]);
    }

    for i in 1..n-1 {
      let cv = nums[i];
      let ckey = *map.get(&cv).unwrap();

      let entry = r_map.entry(cv).or_insert(0);
      *entry -= 1;
      if *entry == 0 {
        r_map.remove(&cv);
        rt.update(ckey, default);
      }

      if ckey != 0 {
        let lv = lt.query(0, ckey);
        let rv = rt.query(ckey+1, n+5);

        if lv != default && rv != default {
          result = result.max(lv - cv + rv);
        }
      }

      lt.update(ckey, cv);
    }

    result as i32
  }
}
```