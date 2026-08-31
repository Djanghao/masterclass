# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/3303602/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/3303602/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
  pub fn find_rle_array(encoded1: Vec<Vec<i32>>, mut encoded2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let mut i = 0;
    let mut temps = vec![];
    for arr in encoded1 {
      let v1 = arr[0];
      let mut num1 = arr[1];

      while encoded2[i][1] < num1 {
        num1 -= encoded2[i][1];
        temps.push(vec![v1*encoded2[i][0], encoded2[i][1]]);
        i += 1;
      }

      if encoded2[i][1] == num1 {
        temps.push(vec![v1*encoded2[i][0], num1]);
        i += 1;
      } else {
        encoded2[i][1] -= num1;
        temps.push(vec![v1*encoded2[i][0], num1]);
      }
    }
    let mut result = vec![vec![temps[0][0], temps[0][1]]];
    let n = temps.len();
    for i in 1..n {
      let li = result.len()-1;
      if result[li][0] == temps[i][0] {
        result[li][1] += temps[i][1];
      } else {
        result.push(vec![temps[i][0], temps[i][1]]);
      }
    }

    result
  }
}
```