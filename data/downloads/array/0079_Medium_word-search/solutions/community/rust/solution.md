# Rust | Backtracking | Nice and Concise with Functional Style

**Author:** wallicent
**Votes:** 9
**Link:** [https://leetcode.com/problems/word-search/solutions/2144001/](https://leetcode.com/problems/word-search/solutions/2144001/)

---

I like the fact that a significant part of this already short (in comparison) solution is just assigning some variables for convenience and legibility (first 4 lines of `exist(...)`. Using iterators, `any()` and the `windows(2)` trick shortens down the solution quite a bit compared to a more imperative. Note that `dfs` is in essence a single expression.

```
impl Solution {
    fn dfs(board: &[Vec<char>], word: &[char], visited: &mut [Vec<bool>], m: usize, n: usize, len: usize, i: usize, j: usize, depth: usize) -> bool {
        depth == len || (i < m && j < n && !visited[i][j] && word[depth] == board[i][j] && {
            visited[i][j] = true;
            let rez = [0, 1, 0, !0, 0]
                .windows(2)
                .any(|w| Self::dfs(board, word, visited, m, n, len, i.wrapping_add(w[0]), j.wrapping_add(w[1]), depth + 1));
            visited[i][j] = false;
            rez
        })
    }

    pub fn exist(board: Vec<Vec<char>>, word: String) -> bool {
        let m = board.len();
        let n = board[0].len();
        let word = word.chars().collect::<Vec<_>>();
        let len = word.len();
        let mut visited = vec![vec![false; n]; m];

        (0..m).any(|i| (0..n).any(|j| Self::dfs(&board, &word, &mut visited, m, n, len, i, j, 0)))
    }
}
```