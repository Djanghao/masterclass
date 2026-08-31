# Simple Rust

**Author:** borisofsky
**Votes:** 2
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/1790494/](https://leetcode.com/problems/excel-sheet-column-number/solutions/1790494/)

---

```
impl Solution {
    pub fn title_to_number(column_title: String) -> i32 {
        column_title
        .chars()
        .map(|c| c as i32 - 'A' as i32 + 1)
        .fold(0, |prev, next| prev * 26 + next)
    }
}
```