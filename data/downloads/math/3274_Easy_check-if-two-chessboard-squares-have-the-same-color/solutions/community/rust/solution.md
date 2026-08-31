# Rust Imperative Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5752700/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5752700/)

---

# Code
```rust []
impl Solution {
  pub fn check_two_chessboards(coordinate1: String, coordinate2: String) -> bool {
    let mut board = vec![vec![0; 8]; 8];

    for row in 0..8 {
      for col in 0..8 {
        if col % 2 == row % 2 {
          board[row][col] = 1
        }
      }
    }

    let (mut x_1, mut y_1) = Solution::convert_coords(
      coordinate1.chars().nth(0).unwrap_or('a'),
      coordinate1.chars().nth(1).unwrap_or('0'),
    );
    let (mut x_2, mut y_2) = Solution::convert_coords(
      coordinate2.chars().nth(0).unwrap_or('a'),
      coordinate2.chars().nth(1).unwrap_or('0'),
    );

    board[x_1][y_1] == board[x_2][y_2]
  }

  pub fn convert_coords(x: char, y: char) -> (usize, usize) {
    (match x {
      'a' => 0,
      'b' => 1,
      'c' => 2,
      'd' => 3,
      'e' => 4,
      'f' => 5,
      'g' => 6,
      'h' => 7,
      _   => 0},
      ((y.to_digit(10).unwrap_or(0) as i32) - 1) as usize
    )
  }
}
```