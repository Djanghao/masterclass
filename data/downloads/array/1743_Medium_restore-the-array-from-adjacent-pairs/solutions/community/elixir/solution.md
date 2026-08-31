# [Rust / Elixir] with HashMap

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4271590/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4271590/)

---

# Intuition
Solving this as a graph problem, treat the elements of the array as nodes, and `adjacentPairs` as the list of edges.
# Approach 
1. Build the adjacent list with a HashMap.
2. Find a node which is only connected by one edge.
3. Traverse along the graph (which has a shape of a doubly linked list), and add all the travelled nodes into the result.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

Where $$n$$ is length of the original array.

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn restore_array(adjacent_pairs: Vec<Vec<i32>>) -> Vec<i32> {
        let mut adj = HashMap::<i32, Vec<i32>>::new();
        for v in adjacent_pairs.iter() {
            adj.entry(v[0]).or_insert(Vec::new()).push(v[1]);
            adj.entry(v[1]).or_insert(Vec::new()).push(v[0]);
        }
        let mut ans = Vec::<i32>::with_capacity(adj.len());
        let (&(mut i), _) = adj.iter().find(|&(_, v)| v.len() == 1).unwrap();
        ans.push(i);
        while let Some(j) = adj.get_mut(&i).unwrap().pop() {
            ans.push(j);
            adj.get_mut(&j).unwrap().retain(|&x| x != i);
            i = j;
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec restore_array(adjacent_pairs :: [[integer]]) :: [integer]
  def restore_array(adjacent_pairs) do
    Enum.reduce(adjacent_pairs, %{}, fn [a, b], map ->
      Map.update(map, a, [b], &[b | &1])
      |> Map.update(b, [a], &[a | &1])
    end)
    |> then(fn map ->
      Enum.find_value(map, fn {k, v} ->
        if length(v) == 1, do: k
      end)
      |> traverse(map, [])
    end)
  end

  defp traverse(i, map, []) do
    [j] = Map.get(map, i)
    traverse(j, map, [i])
  end
  defp traverse(i, map, [prev | tail]) do
    case Map.get(map, i) do
      [^prev, j] -> traverse(j, map, [i, prev | tail])
      [j, ^prev] -> traverse(j, map, [i, prev | tail])
      [^prev] -> [i, prev | tail]
    end
  end
end
```