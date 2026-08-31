# rust accepted

**Author:** jam411
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/1177390/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/1177390/)

---

```
use std::cmp;

impl Solution {
    pub fn find_lu_slength(a: String, b: String) -> i32 {
        if a == b {
            return -1
        } else {
            return cmp::max(a.len() as i32, b.len() as i32)
        }
    }
}
```