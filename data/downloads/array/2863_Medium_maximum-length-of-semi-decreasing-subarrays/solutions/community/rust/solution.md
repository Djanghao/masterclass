# Rust Solution using SegmentTree

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4185685/](https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4185685/)

---


# Code
```
use std::collections::*;

type TreeType = usize;
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
      self.arr[i] = std::cmp::min(self.arr[i*2+1], self.arr[i*2+2]);
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
      std::cmp::min(vl,  vr)
    }
  }
}

// \u5EA7\u6A19\u5727\u7E2E
fn compress<T: std::cmp::Eq + std::cmp::Ord + std::hash::Hash + Copy >(arr:&Vec<T>) -> (Vec<T>, HashMap<T, usize>) {
  let mut set = HashSet::new();
  for &v in arr {
    set.insert(v);
  }
  let mut arr = set.into_iter().collect::<Vec<T>>();
  arr.sort();

  let mut map = HashMap::new();
  for i in 0..arr.len() {
    map.insert(arr[i], i);
  }
  (arr, map)
}

impl Solution {
  pub fn max_subarray_length(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    let (arr, map) = compress(&nums);

    let default_val = 1_000_000;
    let m = arr.len();
    let mut stree = SegmentTree::new(m+10, default_val);

    let v1 = *map.get(&nums[0]).unwrap();
    stree.update(v1, 0);

    let mut result = 0;
    for ri in 1..n {
      let v = *map.get(&nums[ri]).unwrap();
      let li = stree.query(v+1, m+5);

      // println!("li:{} ri:{} v:{} result:{}", li, ri, v, result);
      if li != default_val && li < ri {
        result = result.max(ri-li+1);
      }

      let ci = stree.query(v, v+1);
      if ri < ci {
        stree.update(v, ri);
      }
    }

    if result >= 2 {
      result as i32
    } else {
      0
    }
  }
}
```