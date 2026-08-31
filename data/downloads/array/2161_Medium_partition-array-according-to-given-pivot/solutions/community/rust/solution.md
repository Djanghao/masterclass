# Rust two-liner

**Author:** tmechelke
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/2101603/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/2101603/)

---

```
impl Solution {
    pub fn pivot_array(mut nums: Vec<i32>, pivot: i32) -> Vec<i32> {
        nums.sort_by_key(|num| num.cmp(&pivot));
        nums
    }
}
```