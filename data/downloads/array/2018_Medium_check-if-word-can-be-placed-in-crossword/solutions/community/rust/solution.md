# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/3245913/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/3245913/)

---

# Code
```
impl Solution {
    pub fn place_word_in_crossword(board: Vec<Vec<char>>, word: String) -> bool {
        fn check(board: &Vec<Vec<char>>, word: &[char]) -> bool {
            let m = board.len();
            let n = board[0].len();
            let mut h = vec![vec![-1; n]; m];
            for i in 0..m {
                for j in 0..n {
                    if j == 0 || board[i][j - 1] == '#' || h[i][j - 1] != -1 {
                        let pos = if j == 0 { 0 } else { (h[i][j - 1] + 1) as usize };
                        if board[i][j] == ' ' || board[i][j] == word[pos] {
                            if pos == word.len() - 1 {
                                if j == n - 1 || board[i][j + 1] == '#' {
                                    return true;
                                }
                            } else {
                                h[i][j] = pos as i32;
                            }
                        }
                    }
                }
            }
            false
        }

        let m = board.len();
        let n = board[0].len();
        let mut trans = vec![vec![' '; m]; n];
        for i in 0..m {
            for (j, trans_j) in trans.iter_mut().enumerate() {
                trans_j[i] = board[i][j];
            }
        }
        let rev_word = word.chars().rev().collect::<Vec<_>>();
        let word = word.chars().collect::<Vec<_>>();
        check(&board, &word) || check(&board, &rev_word) || check(&trans, &word) || check(&trans, &rev_word)
    }
}
```