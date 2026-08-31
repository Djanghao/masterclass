# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5995893/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5995893/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```rust []
impl Solution {
  pub fn beauty_sum(s: String) -> i32 {
    let s = s.chars().collect::<Vec<char>>();
    let n = s.len();
    let mut memo = vec![vec![0;26];n+1];

    for i in 0..n {
      memo[i+1] = memo[i].clone();
      memo[i+1][s[i] as usize - 'a' as usize] += 1;
    }

    let mut result = 0;
    for i in 0..n {
      for j in i..n {
        let mut max = 0;
        let mut min = n+10;

        for k in 0..26 {
          let v = memo[j+1][k] - memo[i][k];
          max = max.max(v);
          if v != 0 {
            min = min.min(v);
          }
        }
        result += max - min;
      }
    }

    result as i32
  }
}
```