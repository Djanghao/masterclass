# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/2856372/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/2856372/)

---

# Code
```
use std::collections::*;

pub trait LexicalPermutation {
  fn next_permutation(&mut self) -> bool;
}

impl<T> LexicalPermutation for [T] where T: Ord {
  fn next_permutation(&mut self) -> bool {
    if self.len() < 2 { return false; }
      let mut i = self.len() - 1;
      while i > 0 && self[i-1] >= self[i] {
        i -= 1;
      }

      if i == 0 {
        return false;
      }

      let mut j = self.len() - 1;
      while j >= i && self[j] <= self[i-1]  {
        j -= 1;
      }

      self.swap(j, i-1);

      self[i..].reverse();

      true
    }
}

impl Solution {
  pub fn max_compatibility_sum(students: Vec<Vec<i32>>, mentors: Vec<Vec<i32>>) -> i32 {
    let mut result = 0;
    let n = students.len();
    let m = students[0].len();
    let mut pattern = (0..n).into_iter().collect::<Vec<usize>>();
    
    loop {
      let next: Vec<usize> = pattern.iter().map(|v| *v).collect();
      
      let mut temp = 0;
      for i in 0..n {
        let ti = next[i];
        for j in 0..m {
          if students[ti][j] == mentors[i][j] {
            temp += 1;
          }
        }
      }
      
      result = result.max(temp);
      if !pattern.next_permutation() {
        break
      }
    } 
    result
  }
}
```