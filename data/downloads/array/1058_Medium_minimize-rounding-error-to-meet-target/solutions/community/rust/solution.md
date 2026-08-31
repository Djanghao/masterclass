# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/3011176/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/3011176/)

---

# Code
```
use std::collections::*;

fn ceil(a:isize) -> Option<(isize, isize)> {
  let b = a % 1000;
  if b == 0 {
    None
  } else {
    Some((a + 1000 - b, 1000 - b))
  } 
}
fn floor(a:isize) -> (isize, isize) {
  let b = a % 1000;
  (a - b, b)
}

impl Solution {
  pub fn minimize_error(prices: Vec<String>, target: i32) -> String {
    let n = prices.len();
    let ps = prices.into_iter().map(|v| {
      let a = v.split(".").collect::<Vec<&str>>();
      format!("{}{}",a[0],a[1]).parse::<isize>().unwrap()
    }).collect::<Vec<isize>>();

    let mut map = HashMap::new();
    if let Some((p0,p1)) = ceil(ps[0]) {
      map.insert(p0,p1);
    }
    let (f0,f1) = floor(ps[0]);
    map.insert(f0,f1);

    for i in 1..n {
      let mut new_map: HashMap<isize,isize> = HashMap::new();
      if let Some((p0,p1)) = ceil(ps[i]) {
        for (cv, score) in &map {
          let nv = cv+p0;
          let mut n_score = score+p1;
          if let Some(v) = new_map.get_mut(&nv) {
            *v = *v.min(&mut n_score);
          } else {
            new_map.insert(nv, n_score);
          }
        }
      }

      let (f0,f1) = floor(ps[i]);
      for (cv, score) in map {
        let nv = cv+f0;
        let mut n_score = score+f1;
        if let Some(v) = new_map.get_mut(&nv) {
          *v = *v.min(&mut n_score);
        } else {
          new_map.insert(nv, n_score);
        }
      }
      map = new_map;
    }

    if let Some(num) = map.get(&(target as isize * 1000)) {
      let base_b = (num % 1000).to_string();
      let b = if base_b.len() == 3 {
        base_b
      } else if base_b.len() == 2 {
        format!("0{}", base_b)
      } else {
        format!("00{}", base_b)
      };

      let a = num / 1000;
      format!("{}.{}", a, b)
    } else {
      format!("-1")
    }
  }
}
```