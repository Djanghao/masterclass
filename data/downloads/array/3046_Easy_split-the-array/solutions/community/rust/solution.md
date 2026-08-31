# max frequency = 2

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array/solutions/5383570/](https://leetcode.com/problems/split-the-array/solutions/5383570/)

---

```
use std::collections::HashMap;

impl Solution {
    pub fn is_possible_to_split(nums: Vec<i32>) -> bool {

        nums.into_iter()
            .fold(HashMap::<i32, i32>::new(), |mut m, x|{
                *m.entry(x).or_default() += 1;
                m
            }).values().max().unwrap()<=&2
    }
}
```