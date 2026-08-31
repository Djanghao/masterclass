# Rust Solution using dp

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/2735684/](https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/2735684/)

---

```
use std::collections::*;

struct Helper {
    map:HashMap<(i32,i32),i32>,
}
impl Helper {
    fn dfs(&mut self, base:i32, left:i32) -> i32 {
        if let Some(&v) = self.map.get(&(base, left)) {
          return v
        }

        let mut temp = 0;
        if left < 2 { return 0 }
        if left == 2 && base > 0 {
            return 1
        }
        for i in 1..base {
            let v = left-2-i*3;
            if v < 0 { break }
            if v == 0 {
                temp += 1;
            } else {
                temp += self.dfs(i, v);
            }
        }

        self.map.insert((base,left), temp);
        temp
    }  
}
impl Solution {  
    pub fn house_of_cards(n: i32) -> i32 {      
        let mut helper = Helper { map:HashMap::new() };
        helper.dfs(300, n)
    }
}
```