# Rust Soluiton

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/2914230/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/2914230/)

---

# Code
```
use std::collections::*;

impl Solution {
  pub fn min_number_of_frogs(croak_of_frogs: String) -> i32 {
    let mut ques = vec![VecDeque::new();5];
    let s = croak_of_frogs.chars().collect::<Vec<char>>();
    let n = s.len();

    if n % 5 != 0 {
      return -1
    }
    
    for i in 0..n {
      match s[i] {
        'c' => ques[0].push_back(i),
        'r' => ques[1].push_back(i),
        'o' => ques[2].push_back(i),
        'a' => ques[3].push_back(i),
        _ => ques[4].push_back(i),
      }
    }

    let mut temp = vec![0;5];
    let mut ranges = vec![];
    let mut li = -1;
    for i in 0..n {
      let ti = i % 5;
      if ti == 0 {
        temp = vec![0;5];
      }
      if let Some(j) = ques[ti].pop_front() {
        let j = j as i32;
        if j <= li {
          return -1
        }
        temp[ti] = j as usize;
        li = j;
      } else {
        return -1
      }

      if ti == 4 {
        ranges.push((temp[0], temp[4]));
        li = 0;
      }
    }

    let mut memo = vec![(0,0);n];
    for (a,b) in ranges {
      memo[a].0 += 1;
      memo[b].1 += 1;
    }

    let mut result = 0;
    let mut temp = 0;
    
    for i in 0..n {
      temp += memo[i].0;
      result = result.max(temp);
      temp -= memo[i].1;
    }
    result
  }
}
```