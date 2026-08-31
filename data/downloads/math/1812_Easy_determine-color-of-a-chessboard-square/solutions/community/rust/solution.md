# Rust 1 liner 0ms

**Author:** reimao
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/3325116/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/3325116/)

---

# Code
```
impl Solution {
    pub fn square_is_white(coordinates: String) -> bool {
        coordinates.as_bytes().into_iter().map(|c| c % 2).sum::<u8>() == 1
    }
}
```