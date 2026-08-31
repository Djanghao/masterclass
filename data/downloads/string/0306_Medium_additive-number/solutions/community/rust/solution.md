# Rust Solution

**Author:** rchaser53
**Votes:** 1
**Link:** [https://leetcode.com/problems/additive-number/solutions/4181665/](https://leetcode.com/problems/additive-number/solutions/4181665/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```
fn convert(c:char) -> isize {
  (c as usize - '0' as usize) as isize
}

const MAX:isize = 1_000_000_000_000_000_000;
struct Helper {
  s: Vec<char>,
  result: bool
}
impl Helper {
  fn dfs(&mut self, v1:isize, v2:isize, ci:usize) {
    let n = self.s.len();
    // println!("v1:{} v2:{} ci:{}", v1, v2, ci);
    if n <= ci { return }
    if self.s[ci] == '0' {
      if v1 + v2 == 0 {
        self.dfs(v2,0,ci+1);
        if ci+1 == n {
          self.result = true;
        }
      }
      return
    }

    let mut v3 = 0;
    for i in ci..n {
      v3 *= 10;
      v3 += convert(self.s[i]);

      if MAX <= v3 { break }
      if v1 + v2 == v3 {
        let ni = i+1;
        if ni == n {
          self.result = true;
        }
        self.dfs(v2,v3,ni);
      }
    }
  }
}

impl Solution {
  pub fn is_additive_number(num: String) -> bool {
    let s = num.chars().collect::<Vec<_>>();
    let n = s.len();

    if n < 3 { return false }

    let mut helper = Helper { s, result:false };

    let mut v1 = 0;
    let limit = if helper.s[0] == '0' {
      1
    } else {
      n-1
    };
    for i in 0..limit {
      v1 *= 10;
      v1 += convert(helper.s[i]);
      if helper.s[i+1] == '0' {
        helper.dfs(v1,0,i+2);
        continue
      }

      let mut v2 = 0;
      for j in i+1..n {
        v2 *= 10;
        v2 += convert(helper.s[j]);
        helper.dfs(v1,v2, j+1);
      }
    }
    helper.result
  }
}
```