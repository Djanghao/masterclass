# Rust Solution using dfs

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3975869/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3975869/)

---


# Code
```
struct Helper {
  result: bool,
  target: i32
}
impl Helper {
  fn dfs(&mut self, arr:&Vec<i32>, ci:usize, now:i32) {
    let len = arr.len();
    if len == ci {
      if self.target == now {
        self.result = true;
      }
      return
    }

    let mut temp = 0;
    for i in ci..len {
      temp *= 10;
      temp += arr[i];
      self.dfs(arr, i+1, now + temp);
    }
  }
}

impl Solution {
  pub fn punishment_number(n: i32) -> i32 {
    let mut result = 0;
    for i in 1..=n {
      let mut helper = Helper { result:false, target:i };
      let sv = i * i;
      let arr = sv.to_string().chars().map(|v| v.to_digit(10).unwrap() as i32).collect::<Vec<i32>>();
      helper.dfs(&arr, 0, 0);
      if helper.result {
        result += sv;
      }
    }
    result
  }
}
```