# Elixir union find with :ets

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/5389045/](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/5389045/)

---

Use 2 Union Finds for Alice and Bob, one for each person. An edge can be removed if `u` and `v` are **already connected**.
# Code
```
defmodule Solution do
  @spec max_num_edges_to_remove(n :: integer, edges :: [[integer]]) :: integer
  def max_num_edges_to_remove(n, edges) do
    new_or_clear(:a_parent)
    new_or_clear(:a_size)
    new_or_clear(:b_parent)
    new_or_clear(:b_size)
    ans =
      Enum.filter(edges, fn [type, _, _] -> type == 3 end)
      |> Enum.reduce(0, fn [_, u, v], ans ->
        # make sure both unions are computed and not short-circuited.
        case {union(u, v, :a_parent, :a_size), union(u, v, :b_parent, :b_size)} do
          {true, true} -> ans + 1
          _ -> ans
        end
      end)
    ans =
      Enum.filter(edges, fn [type, _, _] -> type == 1 end)
      |> Enum.reduce(ans, fn [_, u, v], ans ->
        if union(u, v, :a_parent, :a_size) do
          ans + 1
        else
          ans
        end
      end)
    ans =
      Enum.filter(edges, fn [type, _, _] -> type == 2 end)
      |> Enum.reduce(ans, fn [_, u, v], ans ->
        if union(u, v, :b_parent, :b_size) do
          ans + 1
        else
          ans
        end
      end)
    a1_root = find_set(1, :a_parent)
    b1_root = find_set(1, :b_parent)
    if get_size(a1_root, :a_size) == n and get_size(b1_root, :b_size) == n do
      ans
    else
      -1
    end
  end

  defp new_or_clear(name) do
    if :ets.whereis(name) == :undefined do
      :ets.new(name, [:set, :named_table])
    else
      :ets.delete_all_objects(name)
    end
  end

  defp find_set(i, parent) do
    case :ets.lookup(parent, i) do
      [] -> i
      [{^i, p}] -> case find_set(p, parent) do
        ^p -> p
        root ->
          :ets.insert(parent, {i, root})
          root
      end
    end
  end

  defp union(i, j, parent, size) do
    i_root = find_set(i, parent)
    j_root = find_set(j, parent)
    if i_root == j_root do
      true
    else
      i_size = get_size(i_root, size)
      j_size = get_size(j_root, size)
      if i_size >= j_size do
        :ets.insert(parent, {j_root, i_root})
        :ets.insert(size, {i_root, i_size + j_size})
      else
        :ets.insert(parent, {i_root, j_root})
        :ets.insert(size, {j_root, i_size + j_size})
      end
      false
    end
  end

  defp get_size(i, size) do
    case :ets.lookup(size, i) do
      [] -> 1
      [{^i, s}] -> s
    end
  end
end
```