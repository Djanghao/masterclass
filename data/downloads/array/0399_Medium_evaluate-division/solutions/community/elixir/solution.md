# Elixir with union find

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/3543307/](https://leetcode.com/problems/evaluate-division/solutions/3543307/)

---

# Code
```
defmodule Solution do
  @spec calc_equation(equations :: [[String.t]], values :: [float], queries :: [[String.t]]) :: [float]
  def calc_equation(equations, values, queries) do
    Enum.zip(equations, values)
    |> Enum.reduce({%{}, MapSet.new()}, fn {[a, b], val}, {map, set} ->
      {a_root, a_ratio, map} = find_set(a, map) # a = a_root * a_ratio
      {b_root, b_ratio, map} = find_set(b, map) # b = b_root * b_ratio
      map = if a_root == b_root do
        map
      else # a_root = a / a_ratio = (b * val) / a_ratio = below
        Map.put(map, a_root, {b_root, val * b_ratio / a_ratio})
      end
      set = MapSet.put(set, a) |> MapSet.put(b)
      {map, set}
    end)
    |> then(fn {map, set} ->
      Enum.map_reduce(queries, map, fn [c, d], map ->
        if MapSet.member?(set, c) and MapSet.member?(set, d) do 
          {c_root, c_ratio, map} = find_set(c, map)
          {d_root, d_ratio, map} = find_set(d, map)
          if c_root == d_root do
            {c_ratio / d_ratio, map}
          else
            {-1, map}
          end
        else
          {-1, map}
        end
      end)
    end)
    |> elem(0)
  end

  defp find_set(i, map) do
    case Map.get(map, i) do
      nil -> {i, 1, map}
      {p, ratio} -> # i = p * ratio
        {root, ratio2, map} = find_set(p, map) # p = root * ratio2
        map = Map.put(map, i, {root, ratio2 * ratio})
        {root, ratio2 * ratio, map} # i = root * ratio2 * ratio
    end
  end
end
```