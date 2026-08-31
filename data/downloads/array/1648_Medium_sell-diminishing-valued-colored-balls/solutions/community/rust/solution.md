# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/2118173/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/2118173/)

---

```
use std::collections::*;

const MOD:usize = 1_000_000_007;
impl Solution {
  pub fn max_profit(inventory: Vec<i32>, orders: i32) -> i32 {
    let mut left = orders as usize;
    let mut map = HashMap::new();
    for v in inventory {
      *map.entry(v as usize).or_insert(0) += 1 as usize;
    }
    let mut arr = map.into_iter().collect::<Vec<(usize, usize)>>();
    arr.sort();

    let mut result = 0;
    while 1 < arr.len() {
      let (rv, num) = arr.pop().unwrap();
      let li = arr.len() - 1;
      let nv = arr[li].0;
      let diff = rv - nv;
      let tot = diff * num;

      if tot < left {
        left -= tot;
        let lv = nv + 1;
        let av = (lv + rv) * diff / 2 % MOD * num % MOD;
        result += av;
        result %= MOD;
        arr[li].1 += num;
      } else {
        let need = left / num;
        let rnum = left % num;

        let lv = rv - need + 1;
        result += (lv + rv) * need / 2 % MOD * num % MOD;
        result %= MOD;
        result += (rv-need) * rnum % MOD;
        result %= MOD;

        return result as i32;
      }
    }

    let (rv, num) = arr[0];
    let need = left / num;
    let rnum = left % num;

    let lv = rv - need + 1;
    result += (lv + rv) * need / 2 % MOD * num % MOD;
    result %= MOD;
    result += (rv-need) * rnum % MOD;
    result %= MOD;
    
    result as i32
  }
}
```