# [Rust / Elixir] union-find solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330454/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3330454/)

---

# Approach
Use union-find and keep track of number of spare edges and number of connected components.

# Complexity
- Time complexity: Almost O(n)

- Space complexity: O(n)

# Code
```Rust []
impl Solution {
    pub fn make_connected(n: i32, connections: Vec<Vec<i32>>) -> i32 {
        let mut parent: Vec<usize> = (0..n as usize).collect();
        let mut spare = 0;
        let mut count = n;
        for v in connections.iter() {
            let mut a = Self::find_set(v[0] as usize, &mut parent);
            let mut b = Self::find_set(v[1] as usize, &mut parent);
            if a == b {
                spare += 1;
            }
            else {
                count -= 1;
                if a > b {
                    std::mem::swap(&mut a, &mut b);
                }
                parent[b] = a;
            }
        }
        if spare >= count - 1 {
            count - 1
        }
        else {
            -1
        }
    }

    fn find_set(x: usize, parent: &mut Vec<usize>) -> usize {
        if x != parent[x] {
            parent[x] = Self::find_set(parent[x], parent);
        }
        parent[x]
    }
}
```
```Elixir []
defmodule Solution do
  @spec make_connected(n :: integer, connections :: [[integer]]) :: integer
  def make_connected(n, connections) do
    Enum.reduce(connections, {%{}, 0, n}, fn [a, b], {parent, spare, count} ->
      {a_root, parent} = find_set(a, parent)
      {b_root, parent} = find_set(b, parent)
      cond do
        a_root > b_root -> {Map.put(parent, a_root, b_root), spare, count - 1}
        a_root < b_root -> {Map.put(parent, b_root, a_root), spare, count - 1}
        true -> {parent, spare + 1, count}
      end
    end)
    |> then(fn {_, spare, count} ->
      if spare >= count - 1, do: count - 1, else: -1
    end)
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
end
```