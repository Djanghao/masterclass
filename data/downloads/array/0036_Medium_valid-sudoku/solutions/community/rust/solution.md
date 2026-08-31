# Rust iterators 14 lines 4mc

**Author:** astadnik
**Votes:** 9
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/2841489/](https://leetcode.com/problems/valid-sudoku/solutions/2841489/)

---

```
fn uniq<'a>(it: impl Iterator<Item = &'a char>) -> bool {
    let mut v = [0; 10];
    it.filter_map(|c| c.to_digit(10))
        .for_each(|c| v[c as usize] += 1);
    v.iter().all(|&v| v < 2)
}

impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let block_it = |i, j| board[i..i + 3].iter().flat_map(move |row| &row[j..j + 3]);

        (0..3).all(|i| (0..3).all(|j| uniq(block_it(i * 3, j * 3))))
            && (0..9).all(|i| uniq(board.iter().map(|row| &row[i])))
            && board.iter().map(|v| v.iter()).all(uniq)
    }
}
```