# Rust/Python. BFS

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/3563668/](https://leetcode.com/problems/stepping-numbers/solutions/3563668/)

---

# Intuition
Start from the numbers 1 .. 9 and grow the number by adding last digit. For example if the number is `X6`, next numbers will be `X67`, `X65`

# Complexity

At every step we increasing our number by 10 and generating 18 numbers.

- Time complexity: $O(\\log n)$
- Space complexity: $O(\\log n)$

# Code
```Rust []
impl Solution {
  pub fn count_stepping_numbers(low: i32, high: i32) -> Vec<i32> {
    let mut res = vec![];
    for v in vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9] {
      if v >  high {
        return res;
      }
      if v >= low {
        res.push(v);
      }
    }


    let mut frontier: Vec<i64> = vec![1, 2, 3, 4, 5, 6, 7, 8, 9];
    while !frontier.is_empty() {
      let mut new_frontier = Vec::new();
      for v in frontier {
        let last_digit = v % 10;
        if last_digit > 0 {
          let tmp = v * 10 + last_digit - 1;
          if tmp <= high as i64 {
            new_frontier.push(tmp);
            if tmp >= low as i64 {
              res.push(tmp as i32);
            }
          }
        }
        if last_digit < 9 {
          let tmp = v * 10 + last_digit + 1;
          if tmp <= high as i64 {
            new_frontier.push(tmp);
            if tmp >= low as i64 {
              res.push(tmp as i32);
            }
          }
        }
      }
      frontier = new_frontier;
    }

    return res;
  }
}
```
```python []
class Solution:
  
  def __init__(self):
    self.data = self.generate_all()

  def generate_all(self, max_val=2 * 10**9):
    all_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    frontier = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    while frontier:
      new_frontier = []
      for n in frontier:
        last_digit = n % 10
        if last_digit > 0:
          tmp = n * 10 + last_digit - 1
          if tmp <= max_val:
            new_frontier.append(tmp)
            all_vals.append(tmp)
        if last_digit < 9:
          tmp = n * 10 + last_digit + 1
          if tmp <= max_val:
            new_frontier.append(tmp)
            all_vals.append(tmp)

      frontier = new_frontier

    return all_vals

  def countSteppingNumbers(self, low: int, high: int) -> List[int]:
    res = []
    for v in self.data:
      if v > high:
        break
      if v >= low:
        res.append(v)
      
    return res
```
