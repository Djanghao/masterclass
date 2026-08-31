# Rust & Python Solutions

**Author:** ajesh-mishra
**Votes:** 1
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/3985107/](https://leetcode.com/problems/available-captures-for-rook/solutions/3985107/)

---

# Code
```python []
from typing import Literal, Type

MOVE: Type[str] = Literal['up', 'down', 'left', 'right']


class Solution:
    @staticmethod
    def move(board: list[list[str]], moves: range, pos: int, to_move: MOVE) -> int:
        count = 0
        for move in moves:
            if to_move == 'up' or to_move == 'down':
                value = board[move][pos]
            else:
                value = board[pos][move]

            if value == 'B':
                break
            if value == 'p':
                count += 1
                break
        return count

    def numRookCaptures(self, board: List[List[str]]) -> int:
        count = 0

        row, col = [
            (r, c)
            for r, line in enumerate(board)
            for c, value in enumerate(line)
            if value == 'R'
        ][0]

        count += Solution().move(board, range(row, -1, -1), col, 'up')
        count += Solution().move(board, range(row, 8, 1), col, 'down')
        count += Solution().move(board, range(col, -1, -1), row, 'left')
        count += Solution().move(board, range(col, 8, 1), row, 'right')

        return count
```
```rust []
enum Moves {
    UpDown,
    LeftRight
}

impl Solution {
    fn move_up_down(board: &Vec<Vec<char>>, moves: impl Iterator<Item = usize>, pos: usize, to_move: Moves) -> i32 {
        for m in moves {
            let value = match to_move {
                Moves::UpDown => board[m][pos],
                Moves::LeftRight => board[pos][m],
            };
            if value == 'B' {
                break;
            }
            if value == 'p' {
                return 1;
            }
        }
        0
    }
    pub fn num_rook_captures(board: Vec<Vec<char>>) -> i32 {
        let (mut count, mut row, mut col) = (0, 0, 0);
        for (r, line) in board.iter().enumerate() {
            for (c, value) in line.iter().enumerate() {
                if *value == 'R' {
                    row = r; 
                    col = c;
                }
            }
        }
        count += Solution::move_up_down(&board, (0..row).rev(), col, Moves::UpDown);
        count += Solution::move_up_down(&board, row..8, col, Moves::UpDown);
        count += Solution::move_up_down(&board, (0..col).rev(), row, Moves::LeftRight);
        count += Solution::move_up_down(&board, col..8, row, Moves::LeftRight);

        count
    }
}
```