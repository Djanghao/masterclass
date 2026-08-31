# Rust Solution using dfs

**Author:** rchaser53
**Votes:** 3
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/2225036/](https://leetcode.com/problems/nested-list-weight-sum/solutions/2225036/)

---

```
// #[derive(Debug, PartialEq, Eq)]
// pub enum NestedInteger {
//   Int(i32),
//   List(Vec<NestedInteger>)
// }
impl Solution {
    pub fn depth_sum(nested_list: Vec<NestedInteger>) -> i32 {
        let mut helper = Helper { result: 0 };
        helper.culc(&nested_list, 1);        
        helper.result
    }
}

struct Helper {
    result: i32
}

impl Helper {
    fn culc(&mut self, list:&Vec<NestedInteger>, depth:i32) {
        for i in 0..list.len() {
            match &list[i] {
                NestedInteger::Int(v) => self.result += v * depth,
                NestedInteger::List(list) => self.culc(&list , depth+1)
            } 
        }
    }
}
```