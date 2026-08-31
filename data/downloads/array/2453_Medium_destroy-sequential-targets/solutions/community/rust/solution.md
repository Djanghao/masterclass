# 21ms beats 100% Rust Solution

**Author:** Esmail_2
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/4969082/](https://leetcode.com/problems/destroy-sequential-targets/solutions/4969082/)

---

# Code
```
use::std::collections::HashMap;

impl Solution {
    pub fn destroy_targets(nums: Vec<i32>, space: i32) -> i32 {
        let mut map: HashMap<i32, (i32, i32)> = HashMap::new();
        let (mut res, mut size): (i32, i32) = (0, 0);
        for value in nums.into_iter() {
            map.entry(value % space).or_insert((0, 1e9 as i32 + 1));
            let refer: &mut (i32, i32) = map.get_mut(&(value % space)).unwrap();
            refer.0 += 1;
            refer.1 = if refer.1 > value {value} else {refer.1};
        }
        for (key, value) in map.into_iter() {
            if (value.0 < res || (value.0 == res && value.1 >= size)) {continue;}
            res = value.0; size = value.1;
        }
        return size;
    }
}
```