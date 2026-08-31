# Rust Solution using DP

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/5396884/](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/5396884/)

---


# Code
```
const MOD:usize = 1_000_000_007;
impl Solution {
  pub fn number_of_ways(n: i32, x: i32) -> i32 {
    let x = x as u32;
    let n = n as usize;

    let mut stack = vec![];
    let mut i = 1usize;
    while i.pow(x) <= n {
      stack.push(i.pow(x));
      i += 1;
    }
    let m = stack.len();
    let mut memo = vec![vec![0;n+1];m+1];
    memo[0][0] = 1;

    for i in 0..m {
      let v = stack[i];
      memo[i+1] = memo[i].clone();
      for j in 0..n {
        let ni = v + j;
        if ni <= n {
          memo[i+1][ni] += memo[i][j];
          memo[i+1][ni] %= MOD;
        }
      }
    }

    memo[m][n] as i32
  }
}
```