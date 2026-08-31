# [Rust / Elixir] Hashing + BFS

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3257955/](https://leetcode.com/problems/jump-game-iv/solutions/3257955/)

---

# Approach
Use a HashMap to store the list of indices for each arr value.
After each BFS move, delete the respective indices list from the HashMap so it won't be iterated over again.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)
# Rust
```rust
use std::collections::HashMap;

impl Solution {
    pub fn min_jumps(arr: Vec<i32>) -> i32 {
        let mut hash = HashMap::new();
        for (i, &x) in arr.iter().enumerate() {
            hash.entry(x).or_insert(Vec::new()).push(i);
        }
        let mut visited = vec![false; arr.len()];
        visited[0] = true;
        
        let mut curr = vec![0];
        let mut next = Vec::new();
        for step in 0.. {
            for i in curr.drain(..) {
                if i == arr.len() - 1 {
                    return step;
                }
                for j in hash.remove(&arr[i])
                            .unwrap_or(Vec::new())
                            .into_iter()
                            .chain(vec![i.saturating_sub(1), i + 1].into_iter()) {
                    if !visited[j] {
                        next.push(j);
                        visited[j] = true;
                    }
                }
            }
            std::mem::swap(&mut curr, &mut next);
        }
        unreachable!()
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec min_jumps(arr :: [integer]) :: integer
  def min_jumps(arr) do
    map =
      Enum.with_index(arr)
      |> Enum.reduce(%{}, fn {x, i}, map ->
        Map.update(map, x, [i], &([i | &1]))
      end)
    
    bfs([0], [], 0, MapSet.new([0]), List.to_tuple(arr), map)
  end

  defp bfs([i | _], _, step, _, t, _) when i == tuple_size(t) - 1, do: step
  defp bfs([i | tail], list2, step, visited, t, map) do
    Map.get(map, elem(t, i), [])
    |> Kernel.++([i - 1, i + 1])
    |> Enum.reduce({list2, visited}, fn j, {list2, visited} ->
      if j >= 0 and j < tuple_size(t) and not MapSet.member?(visited, j) do
        {[j | list2], MapSet.put(visited, j)}
      else
        {list2, visited}
      end
    end)
    |> then(fn {list2, visited} ->
      bfs(tail, list2, step, visited, t, Map.delete(map, elem(t, i)))
    end)
  end
  defp bfs([], list2, step, visited, t, map) do
    bfs(list2, [], step + 1, visited, t, map)
  end
end
```