# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3758617/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3758617/)

---

# Code
```
use std::collections::*;

fn sieve(a:usize) -> HashSet<i32> {
  let mut is_prime = vec![true;a+1];
  let mut set = HashSet::new();
  for i in 2..=a {
    if is_prime[i] {
      is_prime[i] = false;
      set.insert(i as i32);
      for j in 2..=a/i {
        is_prime[i * j] = false;
      }
    }
  }
  set
}

impl Solution {
  pub fn find_prime_pairs(n: i32) -> Vec<Vec<i32>> {
    let primes = sieve(n as usize);

    let mut memo = HashSet::new();
    for &v in &primes {
      let hv = n - v;
      if primes.contains(&hv) {
        if hv < v {
          memo.insert(vec![hv, v]);
        } else {
          memo.insert(vec![v, hv]);
        }
      }
    }
    let mut result = memo.into_iter().collect::<Vec<Vec<i32>>>();
    result.sort_by(|a,b| a[0].cmp(&b[0]));
    result
  }
}
```