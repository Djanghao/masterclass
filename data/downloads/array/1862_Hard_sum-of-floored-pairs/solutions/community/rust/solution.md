# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/2072933/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/2072933/)

---

```
use std::collections::*;

type Target = usize;
type UseValue = usize;
fn upper_bound(arr: &Vec<Target>, x: &UseValue) -> usize {
  let mut low = 0;
  let mut high = arr.len();
  while low != high {
    let mid = (low + high) / 2;
    match arr[mid].cmp(x) {
      std::cmp::Ordering::Less | std::cmp::Ordering::Equal => {
        low = mid + 1;
      }
      std::cmp::Ordering::Greater => {
        high = mid;
      }
    }
  }
  low
}

fn lower_bound(arr: &Vec<Target>, x: &UseValue) -> usize {
  let mut low = 0;
  let mut high = arr.len();
  while low != high {
    let mid = (low + high) / 2;
    match arr[mid].cmp(x) {
      std::cmp::Ordering::Less => {
        low = mid + 1;
      }
      std::cmp::Ordering::Equal | std::cmp::Ordering::Greater => {
        high = mid;
      }
    }
  }
  low
}

const MOD:usize = 1_000_000_007;

impl Solution {
  pub fn sum_of_floored_pairs(nums: Vec<i32>) -> i32 {
    let mut map = HashMap::new();
    for &v in &nums {
      *map.entry(v as usize).or_insert(0) += 1;
    }
    
    let mut nums = nums.into_iter().map(|v| v as usize).collect::<Vec<usize>>();
    nums.sort();
    let n = nums.len();
    let mut result = 0;

    let mut memo: HashMap<usize, usize> = HashMap::new();
    for i in 0..n {
      let base = nums[i];
      if let Some(v) = memo.get(&base) {
        result += v;
        result %= MOD;
        continue
      }

      let mut li = upper_bound(&nums, &base);
      let mut tot = 0;
      while li < n {
        let a = nums[li] / base;
        let v = (a+1) * base;
        let ri = lower_bound(&nums, &v);

        let nv = ((ri - li) * a) % MOD;
        tot += nv;
        tot %= MOD;

        li = ri;
      }
      result += tot;
      result %= MOD;
      memo.insert(base, tot);
    }
    
    for (_, num) in map {
      result += num * num;
      result %= MOD;
    }

    result as i32
  }
}
```