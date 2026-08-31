# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3463188/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3463188/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
  pub fn divisibility_array(word: String, m: i32) -> Vec<i32> {
    let s = word.chars().map(|v| (v as u8 - '0' as u8) as usize)
        .collect::<Vec<usize>>();
    let m = m as usize;
    let n = s.len();
    let mut result = vec![0;n];
    let mut temp = 0;
    for i in 0..n {
      let v = s[i];
      temp += v;
      if temp % m == 0 {
        result[i] = 1;
      }
      temp *= 10;
      temp %= m;
    }

    result
  }
}
```