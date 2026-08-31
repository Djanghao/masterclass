# [Rust / Elixir] check visited after DFS

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/2930280/](https://leetcode.com/problems/keys-and-rooms/solutions/2930280/)

---

# Rust
```rust
impl Solution {
    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {
        let mut visited = vec![false; rooms.len()];
        Self::dfs(0, &mut visited, &rooms);
        visited.iter().all(|&b| b)
    }

    fn dfs(i: usize, visited: &mut Vec<bool>, rooms: &Vec<Vec<i32>>) {
        visited[i] = true;
        for j in rooms[i].iter().map(|&j| j as usize) {
            if !visited[j] {
                Self::dfs(j, visited, rooms);
            }
        }
    }
}

```
# Elixir
```elixir
defmodule Solution do
  @spec can_visit_all_rooms(rooms :: [[integer]]) :: boolean
  def can_visit_all_rooms(rooms) do
    adj = List.to_tuple(rooms)
    MapSet.new()
    |> dfs(0, adj)
    |> MapSet.size()
    |> Kernel.==(tuple_size(adj))
  end

  defp dfs(visited, i, adj) do
    for j <- elem(adj, i),
    reduce: MapSet.put(visited, i) do
      visited ->
        if MapSet.member?(visited, j) do
          visited
        else
          dfs(visited, j, adj)
        end
    end
  end
end
```