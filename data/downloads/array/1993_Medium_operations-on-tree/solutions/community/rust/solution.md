# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/2896463/](https://leetcode.com/problems/operations-on-tree/solutions/2896463/)

---

# Code
```
struct LockingTree {
  locks: Vec<Option<usize>>,
  g: Vec<Vec<usize>>,
  parent: Vec<i32>,
}

impl LockingTree {
    fn new(parent: Vec<i32>) -> Self {
      let n = parent.len();
      let mut g = vec![vec![];n];
      for i in 0..n {
        if parent[i] == -1 { continue }
        g[parent[i] as usize].push(i);
      }

      LockingTree {
        locks: vec![None;n],
        g,
        parent
      }
    }
    
    fn lock(&mut self, num: i32, user: i32) -> bool {
      if let Some(_) = self.locks[num as usize] {
        false
      } else {
        self.locks[num as usize] = Some(user as usize);
        true
      }
    }
    
    fn unlock(&mut self, num: i32, user: i32) -> bool {
      if let Some(lock_user) = self.locks[num as usize] {
        if lock_user as i32 == user {
          self.locks[num as usize] = None;
          true
        } else {
          false
        }
      } else {
        false
      }
    }
    
    fn upgrade(&mut self, num: i32, user: i32) -> bool {
      let mut ci = num;
      while ci != -1 {
        let i = ci as usize;
        if self.locks[i].is_some() {
          return false
        }
        ci = self.parent[i];
      }

      let mut dirty = false;
      let mut stack = vec![num as usize];
      while !stack.is_empty() {
        let mut new_stack = vec![];
        while let Some(ci) = stack.pop() {
          for i in 0..self.g[ci].len() {
            let ni = self.g[ci][i];

            if self.locks[ni].is_some() {
              self.locks[ni] = None;
              dirty = true;
            }
            new_stack.push(ni);
          }
        }
        stack = new_stack;
      }

      if dirty {
        self.locks[num as usize] = Some(user as usize);
      }

      dirty
    }
}

```