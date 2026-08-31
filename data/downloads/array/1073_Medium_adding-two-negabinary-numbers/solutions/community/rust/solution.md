# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/4005668/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/4005668/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
  pub fn add_negabinary(mut arr1: Vec<i32>, mut arr2: Vec<i32>) -> Vec<i32> {
    arr1.reverse();
    arr2.reverse();
    let n = arr1.len();
    let m = arr2.len();
    let mut result = vec![0;n.max(m)+5];
    for i in 0..n.max(m)+2 {
      let mut v = result[i];
      if i < n {
        v += arr1[i];
      }
      if i < m {
        v += arr2[i];
      }

      if v == 3 {
        result[i+1] -= 1;
        result[i] = 1;
      } else if v == 2 {
        result[i+1] -= 1;
        result[i] = 0;
      } else if v >= 0 {
        result[i] = v;
      } else if v == -1 {
        result[i+1] += 1;
        result[i] = 1;
      }
    }

    while result.len() > 1 && result[result.len()-1] == 0 {
      result.pop();
    }
    result.reverse();
    result
  }
}
```