# [Rust / Elixir] Hash map solution

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630966/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630966/)

---

Elixir's code is very simple for doing this kind of operations.
# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn equal_pairs(grid: Vec<Vec<i32>>) -> i32 {
        let mut hash = HashMap::<&[i32], i32>::new();
        for row in grid.iter() {
            *hash.entry(row).or_insert(0) += 1;
        }
        let mut ans = 0;
        let mut v = vec![0; grid.len()];
        for j in 0..grid.len() {
            for i in 0..grid.len() {
                v[i] = grid[i][j];
            }
            if let Some(&x) = hash.get(&v[..]) {
                ans += x;
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec equal_pairs(grid :: [[integer]]) :: integer
  def equal_pairs(grid) do
    Enum.frequencies(grid)
    |> then(fn map ->
      Enum.zip_with(grid, &(&1))
      |> Enum.map(&(Map.get(map, &1, 0)))
    end)
    |> Enum.sum()
  end
end
```