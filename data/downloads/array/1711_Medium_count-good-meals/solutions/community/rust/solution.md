# it works....

**Author:** system_f
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/4663123/](https://leetcode.com/problems/count-good-meals/solutions/4663123/)

---

# Complexity
- Time complexity: less than $O(n \\log{n})$

- Space complexity: $O(n)$

# Code
```
impl Solution {
    pub fn count_pairs(deliciousness: Vec<i32>) -> i32 {
        go(deliciousness)
    }
}

use std::collections::BTreeMap;

const M : usize = 10usize.pow(9) + 7;

fn count_bit(i: usize) -> Option<usize> {
  // println!("{_i}");
  if i == 0 {
    return None;
  }
  let (mut l, mut r) = (0, 32);
  while l + 1 < r {
    let m = (l + r) / 2;
    let sh = (1 << m) - 1;
    let test = (i as usize) & sh;
    // println!("* [{_i}] [{l}, {r}) {test}/{m}");
    if test != 0 {
      r = m;
    } else {
      l = m;
    }
  } 
  // println!("** [{_i}] [{l}, {r})");
  Some(l)
}

fn go(deliciousness: Vec<i32>) -> i32 {
  let mut bin = vec![BTreeMap::new(); 32];
  let mut zcnt = 0;
  let mut special = vec![0; 21];
  for d in deliciousness.iter() {
    let d = *d as usize;
    let Some(b) = count_bit(d) else {
      zcnt += 1;
      continue;
    };
    if let Some(r) = bin[b].get_mut(&d) {
      *r += 1;
    } else {
      bin[b].insert(d, 1);
    }
  }

  let mut ans = 0;

  for (off, b) in bin.iter().enumerate() {
    let Some((mx, _)) = b.last_key_value() else {
      continue
    }; 
    for (&k1, &v1) in b.iter() {
      if k1 == (1 << off) {
        ans = (ans + (zcnt * v1)) % M;
      }
      for i in off..22 {
        let tgt = 1 << i;
        if tgt > mx + mx {
          break;
        }
        if tgt <= k1 {
          continue;
        }
        let k2 = tgt - k1;
        if k2 < k1 {
          continue;
        } else if k1 == k2 {
          println!("here");
          ans = (ans + (v1 * (v1 - 1) / 2) % M) % M;
        } else if let Some(v2) = b.get(&k2) {
          ans = (ans + (v1 % M) * (v2 % M)) % M;
        }
      }
    }
  }
  println!("{:?}", bin);
  ans as i32
}
```