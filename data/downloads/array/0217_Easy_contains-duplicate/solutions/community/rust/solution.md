# 2 line solution with Rust HashSet

**Author:** Cyclane
**Votes:** 30
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/2084097/](https://leetcode.com/problems/contains-duplicate/solutions/2084097/)

---

Simple solution with Rust using only 2 lines within the function.

```
use std::collections::HashSet;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut exists = HashSet::new();
        !nums.into_iter().all(|n| exists.insert(n))
    }
}
```

### Explanation
- `HashSet.insert` will return `true` if the inserted value does not yet exist in the set, otherwise false.
- Using this behaviour in an `Iter.all()` on the number list, it will return `true` if all the numbers are different and `false` if there is a duplicate number.
