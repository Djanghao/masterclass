# Rust 0ms, one-liner

**Author:** TimLikesTacos
**Votes:** 18
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/793793/](https://leetcode.com/problems/search-insert-position/solutions/793793/)

---

```
impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        nums.binary_search(&target).unwrap_or_else(|x| x) as i32
    }
}
```