# Rust dfs solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/3214422/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/3214422/)

---

# Code
```
impl Solution {
    pub fn queens_attackthe_king(queens: Vec<Vec<i32>>, king: Vec<i32>) -> Vec<Vec<i32>> {
        const DIR: [(i32, i32); 8] = [
            (-1, 0),
            (-1, 1),
            (-1, -1),
            (0, 1),
            (0, -1),
            (1, 1),
            (1, 0),
            (1, -1),
        ];
        fn dfs(
            board: &Vec<Vec<i32>>,
            position: (i32, i32),
            direction: (i32, i32),
            result: &mut Vec<Vec<i32>>,
        ) {
            let (x, y) = position;
            if x < 0 || y < 0 || x >= board.len() as i32 || y >= board[0].len() as i32 {
                return;
            }
            if board[x as usize][y as usize] == 1 {
                result.push(vec![x, y]);
                return;
            }
            let next_position = (x + direction.0, y + direction.1);
            dfs(board, next_position, direction, result);
        }
        let mut board = vec![vec![0; 8]; 8];
        for q in queens {
            let x = q[0];
            let y = q[1];
            board[x as usize][y as usize] = 1;
        }
        let mut result = vec![];
        for d in DIR {
            dfs(&board, (king[0], king[1]), d, &mut result);
        }
        result
    }
}
```