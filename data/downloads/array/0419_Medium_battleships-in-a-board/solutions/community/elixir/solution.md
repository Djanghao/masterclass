# [Rust / Elixir] count the heads

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/3275537/](https://leetcode.com/problems/battleships-in-a-board/solutions/3275537/)

---

# Approach
Only count the topmost / leftmost block of the ships (assuming those are the ship heads).

# Complexity
- Time complexity: O(m * n)

- Space complexity: O(1) (Probably Elixir too, but not sure)

# Rust
```rust
impl Solution {
    pub fn count_battleships(board: Vec<Vec<char>>) -> i32 {
        let mut ans = 0;
        for i in 0..board.len() {
            for j in 0..board[i].len() {
                if board[i][j] == 'X'
                && (i == 0 || board[i - 1][j] == '.')
                && (j == 0 || board[i][j - 1] == '.') {
                    ans += 1;
                }
            }
        }
        ans
    }
}
```

# Elixir
Make a dummy row before 1st row, and a dummy column on the left, for easier logic.
```elixir
defmodule Solution do
  @spec count_battleships(board :: [[char]]) :: integer
  def count_battleships(board) do
    dummy = [?. | hd(board)]
    count(0, [dummy | board])
  end

  defp count(ans, [_]), do: ans
  defp count(ans, [row1, row2 | tail]) do
    count_row(ans, [?. | row1], [?. | row2])
    |> count([row2 | tail])
  end

  defp count_row(ans, _, [_]), do: ans
  defp count_row(ans, [_, ?. | row1], [?., ?X | row2]) do
    count_row(ans + 1, [?. | row1], [?X | row2])
  end
  defp count_row(ans, [_ | row1], [_ | row2]) do
    count_row(ans, row1, row2)
  end
end
```