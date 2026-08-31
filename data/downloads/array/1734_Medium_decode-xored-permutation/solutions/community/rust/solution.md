# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/3450396/](https://leetcode.com/problems/decode-xored-permutation/solutions/3450396/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
  pub fn decode(encoded: Vec<i32>) -> Vec<i32> {
    let n = encoded.len() + 1;

    let mut tot = 0;
    for i in 1..=n {
      tot ^= i as i32;
    }

    let mut odd = 0;
    for i in (0..n-1).step_by(2) {
      odd ^= encoded[i];
    }

    let last = tot ^ odd;
    let mut result = vec![0;n];
    result[n-1] = last;
    for i in (0..n-1).rev() {
      result[i] = result[i+1] ^ encoded[i];
    }
    
    result
  }
}
```