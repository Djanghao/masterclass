# Rust 0ms

**Author:** ajcarvajal
**Votes:** 21
**Link:** [https://leetcode.com/problems/remove-element/solutions/500524/](https://leetcode.com/problems/remove-element/solutions/500524/)

---

```
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        nums.retain(|&x| x != val);
        return nums.len() as i32;
    }
}
```