# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/2962631/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/2962631/)

---

# Code
```
struct Helper {
  n:usize,
  patterns: Vec<Vec<usize>>
}

impl Helper {
  fn dfs(&mut self, ci:usize, arr:Vec<usize>) {
    if self.n == ci {
      self.patterns.push(arr);
      return
    }

    for ni in [0,1,6,8,9] {
      let mut new_arr = arr.clone();
      new_arr.push(ni);
      self.dfs(ci+1,new_arr);
    }
  }
}

impl Solution {
  pub fn find_strobogrammatic(n: i32) -> Vec<String> {
    let center_pattern = vec![format!("0"),format!("1"),format!("8")];
    if n == 1 {
      return center_pattern;
    }

    let mut result = vec![];
    let hn = n as usize / 2;
    let out = 1000;
    let dict = vec![0,1,out,out,out,out,9,out,8,6];
    let mut helper = Helper { patterns: vec![], n: hn };
    for i in [1,6,8,9] {
      helper.dfs(1,vec![i]);
    }

    for front in helper.patterns {
      let mut back = vec![0;hn];
      for i in 0..hn {
        back[hn-1-i] = dict[front[i]];
      }
      let front = front.into_iter().map(|v| v.to_string()).collect::<String>();
      let back = back.into_iter().map(|v| v.to_string()).collect::<String>();

      if n % 2 == 1 {
        result.push(format!("{}0{}",front.clone(), back.clone()));
        result.push(format!("{}1{}",front.clone(), back.clone()));
        result.push(format!("{}8{}",front, back));
      } else {
        result.push(format!("{}{}",front, back));
      }
    }
    result
  }
}
```