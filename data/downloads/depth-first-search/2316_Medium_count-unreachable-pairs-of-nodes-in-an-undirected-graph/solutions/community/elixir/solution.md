# [Rust / Elixir] union by size

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3339601/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3339601/)

---

Since `size` can be used for calculating the answer, it's a good idea to do union by size.

# Complexity
- Time complexity: O(n + m)

- Space complexity: O(n)

Where n is number of nodes, and m is number of edges.

# Code
```Rust []
impl Solution {
    pub fn count_pairs(n: i32, edges: Vec<Vec<i32>>) -> i64 {
        let mut parent: Vec<usize> = (0..n as usize).collect();
        let mut size = vec![1i64; n as usize];
        for v in edges.iter() {
            Self::union_by_size(v[0] as usize, v[1] as usize, &mut parent, &mut size);
        }
        let mut ans = 0;
        let mut acc = 0;
        for i in 0..n as usize {
            if i == parent[i] {
                ans += size[i] * acc;
                acc += size[i];
            }
        }
        ans
    }

    fn find_set(i: usize, parent: &mut Vec<usize>) -> usize {
        if parent[i] != i {
            parent[i] = Self::find_set(parent[i], parent);
        }
        parent[i]
    }

    fn union_by_size(i: usize, j: usize, parent: &mut Vec<usize>, size: &mut Vec<i64>) {
        let mut i_root = Self::find_set(i, parent);
        let mut j_root = Self::find_set(j, parent);
        if i_root != j_root {
            if size[i_root] < size[j_root] {
                std::mem::swap(&mut i_root, &mut j_root);
            }
            parent[j_root] = i_root;
            size[i_root] += size[j_root];
        }
    }
}
```
```Elixir []
defmodule Solution do
  @spec count_pairs(n :: integer, edges :: [[integer]]) :: integer
  def count_pairs(n, edges) do
    {parent, size} = Enum.reduce(edges, {%{}, %{}}, &union_by_size/2)
    Enum.filter(0..n - 1, &(Map.get(parent, &1) == nil))
    |> Enum.reduce({0, 0}, fn i, {ans, acc} ->
      x = Map.get(size, i, 1)
      {ans + acc * x, acc + x}
    end)
    |> elem(0)
  end

  defp find_set(i, parent) do
    case Map.get(parent, i) do
      nil -> {i, parent}
      p -> case find_set(p, parent) do
        {^p, parent} -> {p, parent}
        {root, parent} -> {root, Map.put(parent, i, root)}
      end
    end
  end

  defp union_by_size([a, b], {parent, size}) do
    {a_root, parent} = find_set(a, parent)
    {b_root, parent} = find_set(b, parent)
    if a_root == b_root do
      {parent, size}
    else
      a_size = Map.get(size, a_root, 1)
      b_size = Map.get(size, b_root, 1)
      if a_size < b_size do
        {Map.put(parent, a_root, b_root), Map.put(size, b_root, a_size + b_size)}
      else
        {Map.put(parent, b_root, a_root), Map.put(size, a_root, a_size + b_size)}
      end
    end
  end
end
```