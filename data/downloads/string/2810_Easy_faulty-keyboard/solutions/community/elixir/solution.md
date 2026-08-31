# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/4775103/](https://leetcode.com/problems/faulty-keyboard/solutions/4775103/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec final_string(s :: String.t) :: String.t
  def final_string(s) do
    for <<x <- s>>, reduce: {%{}, -1, 0, true} do
      {acc, front_i, back_i, append?} ->
        cond do
          x == ?i -> {acc, front_i, back_i, !append?}
          append? -> {Map.put(acc, back_i, x), front_i, back_i + 1, append?}
          true -> {Map.put(acc, front_i, x), front_i - 1, back_i, append?}
        end
    end |> then(fn {map, i, j, append?} -> 
      range = if append?, do: i+1..j-1, else: j-1..i+1
      for x <- range, into: <<>>, do: <<map[x]>>
    end)
  end
end
```