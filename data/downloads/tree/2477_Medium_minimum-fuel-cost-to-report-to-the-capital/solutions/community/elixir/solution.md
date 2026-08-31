# [Rust/Elixir] DFS solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2907324/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2907324/)

---

There are no loops, so no need to keep visited state, only need to ensure that next node should not be equal to previous node.
# Rust
```rust
impl Solution {
    pub fn minimum_fuel_cost(roads: Vec<Vec<i32>>, seats: i32) -> i64 {
        let mut adj = vec![Vec::new(); roads.len() + 1];
        for v in roads.iter() {
            adj[v[0] as usize].push(v[1] as usize);
            adj[v[1] as usize].push(v[0] as usize);
        }
        Self::dfs(0, usize::MAX, seats, &adj).0
    }

    fn dfs(i: usize, prev: usize, seats: i32, adj: &Vec<Vec<usize>>) -> (i64, i32) {
        let mut ans = 0;
        let mut ppl = 1;
        for &j in adj[i].iter().filter(|&&j| j != prev) {
            let (ans2, ppl2) = Self::dfs(j, i, seats, adj);
            ans += ans2 + ((ppl2 - 1) / seats) as i64 + 1;
            ppl += ppl2;
        }
        (ans, ppl)
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec minimum_fuel_cost(roads :: [[integer]], seats :: integer) :: integer
  def minimum_fuel_cost(roads, seats) do
    adj =
      for [a, b] <- roads, reduce: %{} do
        map ->
          Map.update(map, a, [b], &([b | &1]))
          |> Map.update(b, [a], &([a | &1]))
      end
    dfs(-1, 0, seats, adj)
    |> elem(0)
  end

  defp dfs(p, i, seats, adj) do
    Map.get(adj, i, [])
    |> Enum.filter(&(&1 != p))
    |> Enum.reduce({0, 1}, fn j, {ans, ppl} ->
      {ans2, ppl2} = dfs(i, j, seats, adj)
      {ans + ans2 + ceil(ppl2 / seats), ppl + ppl2}
    end)
  end
end
```