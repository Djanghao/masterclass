# rust straightforward

**Author:** zakharovvi
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/1700277/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/1700277/)

---

```
impl Solution {
    pub fn tictactoe(moves: Vec<Vec<i32>>) -> String {
        let mut field = [[""; 3]; 3];

        moves.iter()
            .step_by(2)
            .for_each(|mv| field[mv[0] as usize][mv[1] as usize] = "A");
        moves.iter()
            .skip(1)
            .step_by(2)
            .for_each(|mv| field[mv[0] as usize][mv[1] as usize] = "B");

        for row in 0..3 {
            if field[row][0] != "" && (field[row][0], field[row][1]) == (field[row][1], field[row][2]) {
                return field[row][0].to_string()
            }
        }
        for col in 0..3 {
            if field[0][col] != "" && (field[0][col], field[1][col]) == (field[1][col], field[2][col]) {
                return field[0][col].to_string()
            }
        }
        if field[0][0] != "" && (field[0][0], field[1][1]) == (field[1][1], field[2][2]) {
            return field[0][0].to_string()
        }
        if field[0][2] != "" && (field[0][2], field[1][1]) == (field[1][1], field[2][0]) {
            return field[0][2].to_string()
        }

        if moves.len() == 9 {
            return "Draw".to_string()
        }

        return "Pending".to_string()
    }
}
```