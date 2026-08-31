# Elixir DFS & Rust BFS

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/2108263/](https://leetcode.com/problems/number-of-enclaves/solutions/2108263/)

---

```elixir
defmodule Solution do
  @spec num_enclaves(grid :: [[integer]]) :: integer
  def num_enclaves(grid) do
    {g, m, n} = to_map(grid)

    g =
      for i <- 0..(m - 1), reduce: g do
        acc -> acc |> dfs(i, 0) |> dfs(i, n - 1)
      end

    for j <- 0..(n - 1), reduce: g do
      acc -> acc |> dfs(0, j) |> dfs(m - 1, j)
    end
    |> Enum.reduce(0, fn {_, v}, acc -> v + acc end)
  end

  def dfs(g, i, j) do
    if g[{i, j}] == 1 do
      g
      |> Map.put({i, j}, 0)
      |> dfs(i + 1, j)
      |> dfs(i - 1, j)
      |> dfs(i, j + 1)
      |> dfs(i, j - 1)
    else
      g
    end
  end

  def to_map(grid) do
    m = Enum.count(grid)
    n = Enum.count(hd(grid))

    grid
    |> Enum.with_index()
    |> Enum.reduce(%{}, fn {row, i}, acc ->
      row
      |> Enum.with_index()
      |> Enum.reduce(acc, fn {n, j}, acc ->
        Map.put(acc, {i, j}, n)
      end)
    end)
    |> then(&{&1, m, n})
  end
end
```

```rust
fn bfs(grid: &mut Vec<Vec<i32>>, i: usize, j: usize) {
    if grid[i][j] == 0 {
        return;
    }
    let mut q = Vec::new();
    q.push((i, j));
    while let Some((x, y)) = q.pop() {
        grid[x][y] = 0;
        for (dx, dy) in [(-1, 0), (0, 1), (1, 0), (0, -1)] {
            let nx = (x as i32 + dx) as usize;
            let ny = (y as i32 + dy) as usize;
            if nx < grid.len() && ny < grid[0].len() && grid[nx][ny] == 1 {
                q.push((nx, ny));
            }
        }
    }
}

impl Solution {
    pub fn num_enclaves(mut grid: Vec<Vec<i32>>) -> i32 {
        let M = grid.len();
        let N = grid[0].len();
        for j in 0..N {
            bfs(&mut grid, 0, j);
            bfs(&mut grid, M-1, j);
        }
        for i in 0..M {
            bfs(&mut grid, i, 0);
            bfs(&mut grid, i, N-1);
        }
        grid.iter().fold(0, |acc, row| row.iter().sum::<i32>() + acc)
    }
}
```