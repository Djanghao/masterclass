# [Rust / Elixir] memoization DP solution & extra

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/3752492/](https://leetcode.com/problems/find-eventual-safe-states/solutions/3752492/)

---

1. A node is NOT safe if it belongs to a loop.
2. If a node `i` is NOT safe, all nodes which have an edge to `i` are also NOT safe.
3. DP approach is applied making use of Point 2.

# Code
```Rust []
#[derive(Clone, Copy, PartialEq)]
enum State {
    Unknown,
    Safe,
    Loop,
}

impl Solution {
    pub fn eventual_safe_nodes(graph: Vec<Vec<i32>>) -> Vec<i32> {
        let mut ans = Vec::new();
        let mut dp = vec![State::Unknown; graph.len()];
        let mut visited = vec![false; graph.len()];
        for i in 0..graph.len() {
            if Self::memo(i, &mut dp, &mut visited, &graph) == State::Safe {
                ans.push(i as i32);
            }
        }
        ans
    }

    fn memo(i: usize, dp: &mut Vec<State>, visited: &mut Vec<bool>, graph: &Vec<Vec<i32>>) -> State {
        if dp[i] == State::Unknown {
            dp[i] = State::Safe;
            visited[i] = true;
            for &j in graph[i].iter() {
                if visited[j as usize]
                || Self::memo(j as usize, dp, visited, graph) == State::Loop {
                    dp[i] = State::Loop;
                    break;
                }
            }
            visited[i] = false;
        }
        dp[i]
    }
}
```
```Elixir []
defmodule Solution do
  @spec eventual_safe_nodes(graph :: [[integer]]) :: [integer]
  def eventual_safe_nodes(graph) do
    adj =
      Enum.with_index(graph)
      |> Map.new(fn {list, i} -> {i, list} end)
    n = length(graph)

    Enum.reduce(n - 1..0//-1, {[], %{}}, fn i, {ans, dp} ->
      {is_safe, dp} = memo(i, dp, MapSet.new(), adj)
      if is_safe do
        {[i | ans], dp}
      else
        {ans, dp}
      end
    end)
    |> elem(0)
  end

  defp memo(i, dp, visited, adj) do
    case Map.get(dp, i) do
      is_safe when is_boolean(is_safe) -> {is_safe, dp}
      nil ->
        visited2 = MapSet.put(visited, i)

        Map.get(adj, i)
        |> Enum.reduce_while({true, dp}, fn j, {_, dp} ->
          if MapSet.member?(visited2, j) do
            {:halt, {false, dp}}
          else
            {j_is_safe, dp} = memo(j, dp, visited2, adj)
            if j_is_safe do
              {:cont, {true, dp}}
            else
              {:halt, {false, dp}}
            end
          end
        end)
        |> then(fn {is_safe, dp} ->
          {is_safe, Map.put(dp, i, is_safe)}
        end)
    end
  end
end
```

# Extra: Rust with modified topological sort
```Rust
impl Solution {
    pub fn eventual_safe_nodes(graph: Vec<Vec<i32>>) -> Vec<i32> {
        let mut out_deg = Vec::with_capacity(graph.len());
        let mut inv_adj = vec![Vec::new(); graph.len()];
        let mut safes = Vec::new();
        for (i, v) in graph.iter().enumerate() {
            out_deg.push(v.len());
            if v.is_empty() {
                safes.push(i);
            }
            for &j in v.iter() {
                inv_adj[j as usize].push(i);
            }
        }
        let mut ans = Vec::new();
        while let Some(i) = safes.pop() {
            ans.push(i as i32);
            for &j in inv_adj[i].iter() {
                out_deg[j] -= 1;
                if out_deg[j] == 0 {
                    safes.push(j);
                }
            }
        }
        ans.sort_unstable();
        ans
    }
}
```