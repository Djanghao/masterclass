# Rust Imperative Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5865473/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5865473/)

---

# Code
```rust []
impl Solution {
  pub fn min_changes(n: i32, k: i32) -> i32 {
    let (mut bin_n, mut bin_k, mut count) = (
      format!("{:b}", n),
      format!("{:b}", k),
      0 as i32,
    );

    if bin_n.len() < bin_k.len() { return -1 }

    let diff = bin_n.len().saturating_sub(bin_k.len());
    bin_k = format!("{:0>width$}", bin_k, width = bin_k.len() + diff);

    for i in 0..bin_k.len() {
      let cur = bin_n.chars().nth(i).unwrap();
      if cur != bin_k.chars().nth(i).unwrap() {
        if cur == '0' {
          return -1
        }
        count += 1
      }
    }
    count
  }
}
```