# Rust solution

**Author:** BigMih
**Votes:** 5
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1826374/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1826374/)

---

```
impl Solution {
    pub fn cells_in_range(s: String) -> Vec<String> {
        let sb = s.as_bytes();
        (sb[0]..=sb[3])
            .flat_map(|col| (sb[1]..=sb[4]).map(move |row| format!("{}{}", col as char, row as char)))
            .collect()
    }
}
```