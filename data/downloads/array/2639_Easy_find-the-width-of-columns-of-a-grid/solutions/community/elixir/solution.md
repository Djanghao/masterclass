# [Rust / Elixir] with to_string

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/4927549/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/4927549/)

---

Convert each cell to string and then check the length.
# Code
```Rust []
impl Solution {
    pub fn find_column_width(grid: Vec<Vec<i32>>) -> Vec<i32> {
        let mut ans = vec![1; grid[0].len()];
        for i in 0..grid.len() {
            for j in 0..grid[i].len() {
                ans[j] = ans[j].max(grid[i][j].to_string().len() as i32);
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec find_column_width(grid :: [[integer]]) :: [integer]
  def find_column_width(grid) do
    Enum.zip_with(grid, &(&1))
    |> Enum.map(fn col ->
      Enum.map(col, fn x ->
        Integer.to_string(x)
        |> String.length()
      end)
      |> Enum.max()
    end)
  end
end
```