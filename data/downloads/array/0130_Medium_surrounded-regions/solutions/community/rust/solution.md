# Rust | Iterative DFS

**Author:** wallicent
**Votes:** 1
**Link:** [https://leetcode.com/problems/surrounded-regions/solutions/2122634/](https://leetcode.com/problems/surrounded-regions/solutions/2122634/)

---

```
impl Solution {
    pub fn solve(board: &mut Vec<Vec<char>>) {
        let mut stack = vec![];
        let (m, n) = (board.len(), board[0].len());

        // Chain together iterators over the border indicies
        for (r, c) in (0..n)
            .map(|c| (0, c))
            .chain((0..n).map(|c| (m - 1, c)))
            .chain((1..m - 1).map(|r| (r, 0)))
            .chain((1..m - 1).map(|r| (r, n - 1)))
        {
            if board[r][c] == 'O' {
                // Perform iterative DFS to discover all elements connected to this
                // border element.
                stack.push((r, c));

                while let Some((r, c)) = stack.pop() {
                    if r < m && c < n && board[r][c] == 'O' {
                        for d in [0, 1, 0, !0, 0].windows(2) {
                            stack.push((r.wrapping_add(d[0]), c.wrapping_add(d[1])));
                        }
                        board[r][c] = 'M'; // M for marked
                    }
                }
            }
        }

        // All 'O' elements connected to the border are now marked as 'M'. Reset these to
        // 'O' and set everything else to 'X'
        board
            .iter_mut()
            .map(|row| {
                row.iter_mut()
                    .for_each(|entry| *entry = if *entry == 'M' { 'O' } else { 'X' })
            })
            .for_each(drop);
    }
}
```