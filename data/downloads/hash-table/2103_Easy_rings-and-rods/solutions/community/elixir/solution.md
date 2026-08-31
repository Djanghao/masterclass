# Elixir, uses map, for comprehension and bitmask

**Author:** Lykos_unleashed
**Votes:** 1
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/4601625/](https://leetcode.com/problems/rings-and-rods/solutions/4601625/)

---

# Approach
Iterate the ring rod and color, use a map to keep track of how many rings a rod has. Use a bitmask to keep track of the different rods.

111 => RGB
100 => R
010 => G
001 => B

# Complexity
- Time complexity:
O(n) where n is the length of the input string 

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec count_points(rings :: String.t) :: integer
  def count_points(rings) do
    for <<col, i <- rings>>, reduce: %{} do
      acc -> rings = Map.get(acc, i, 0)
             Map.put(acc, i, update_ring(rings, col))
    end |> Enum.count(fn {_, v} -> v == 7 end)
  end

  defp update_ring(rings, color) do
    case color do
      ?R -> Bitwise.bor(rings, 4)
      ?G -> Bitwise.bor(rings, 2)
      ?B -> Bitwise.bor(rings, 1)
    end
  end
end
```