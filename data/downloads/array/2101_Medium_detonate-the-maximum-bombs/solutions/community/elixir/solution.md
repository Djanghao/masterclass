# [Rust / Elixir] DFS solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3587948/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3587948/)

---

# Approach
1. Treat the bombs as nodes of a directed graph.
Make adjacency list of the graph.
2. Do DFS with each bomb as the starting node and count the detonated(visited) bombs.
3. Return the maximum among the counts.

# Code
```Rust []
impl Solution {
    pub fn maximum_detonation(bombs: Vec<Vec<i32>>) -> i32 {
        let mut adj = vec![Vec::new(); bombs.len()];
        for i in 0..bombs.len() {
            for j in 0..i {
                let dist = (bombs[i][0] as i64 - bombs[j][0] as i64).pow(2)
                        + (bombs[i][1] as i64 - bombs[j][1] as i64).pow(2);
                if (bombs[i][2] as i64).pow(2) >= dist {
                    adj[i].push(j);
                }
                if (bombs[j][2] as i64).pow(2) >= dist {
                    adj[j].push(i);
                }
            }
        }
        let mut ans = 1;
        for i in 0..bombs.len() {
            ans = ans.max(Self::dfs(i, &mut vec![false; adj.len()], &adj));
        }
        ans
    }

    fn dfs(i: usize, visited: &mut Vec<bool>, adj: &Vec<Vec<usize>>) -> i32 {
        let mut count = 1;
        visited[i] = true;
        for &j in adj[i].iter() {
            if !visited[j] {
                count += Self::dfs(j, visited, adj);
            }
        }
        count
    }
}
```
```Elixir []
defmodule Solution do
  @spec maximum_detonation(bombs :: [[integer]]) :: integer
  def maximum_detonation(bombs) do
    adj =
      for {[xi, yi, ri], i} <- Enum.with_index(bombs),
      {[xj, yj, rj], j} <- Enum.with_index(bombs) |> Enum.take(i),
      reduce: %{} do map ->
        dist = (xi - xj)**2 + (yi - yj)**2
        if ri**2 >= dist do
          Map.update(map, i, [j], &([j | &1]))
        else
          map
        end
        |> then(fn map ->
          if rj**2 >= dist do
            Map.update(map, j, [i], &([i | &1]))
          else
            map
          end
        end)
      end
    
    (0..length(bombs) - 1)
    |> Enum.map(fn i ->
      dfs(i, MapSet.new(), adj)
      |> elem(0)
    end)
    |> Enum.max()
  end

  defp dfs(i, visited, adj) do
    Map.get(adj, i, [])
    |> Enum.reduce({1, MapSet.put(visited, i)}, fn j, {count, visited} ->
      if MapSet.member?(visited, j) do
        {count, visited}
      else
        {count2, visited} = dfs(j, visited, adj)
        {count + count2, visited}
      end
    end)
  end
end
```