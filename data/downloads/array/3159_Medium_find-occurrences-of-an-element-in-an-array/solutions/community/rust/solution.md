# first, save all positions of x in nums

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5957186/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5957186/)

---

```rust []
impl Solution {
    pub fn occurrences_of_element(nums: Vec<i32>, queries: Vec<i32>, x: i32) -> Vec<i32> {

        let mut p = vec![];
        for (i, y) in nums.into_iter().enumerate() {
            if y == x {
                p.push(i as i32)
            }
        }
        queries.into_iter()
            .map(|q|*p.get(q as usize - 1).unwrap_or(&-1))
            .collect()
    }
}
```