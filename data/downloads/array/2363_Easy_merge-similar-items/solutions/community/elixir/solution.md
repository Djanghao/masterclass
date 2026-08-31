# Elixir, :gb_trees

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/4669099/](https://leetcode.com/problems/merge-similar-items/solutions/4669099/)

---

# Complexity
- Time complexity:
O(n.log(n) + m.log(m)) where n and m are the lengths of lists items1 and items2

- Space complexity:
O(n + m)

# Code
```
defmodule Solution do
  @spec merge_similar_items(items1 :: [[integer]], items2 :: [[integer]]) :: [[integer]]
  def merge_similar_items(items1, items2) do
    gb_tree = for [k, v] <- items1, reduce: :gb_trees.empty() do
      acc -> :gb_trees.insert(k, v, acc)  
    end
    gb_tree = for [k, v] <- items2, reduce: gb_tree do
      acc -> case :gb_trees.lookup(k, acc) do
        {:value, val} -> :gb_trees.update(k, v + val, acc)
        _ ->  :gb_trees.insert(k, v, acc)
      end
    end 
    to_list(gb_tree, :gb_trees.size(gb_tree), []) 
  end

  defp to_list(tree, i, acc) when i > 0 do
    {k, v, tree} = :gb_trees.take_largest(tree)
    to_list(tree, i - 1, [[k, v] | acc]) 
  end
  defp to_list(_, _, acc), do: acc
end
```