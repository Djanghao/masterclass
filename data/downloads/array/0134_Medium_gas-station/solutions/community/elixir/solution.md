# Elixir O(n) Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/gas-station/solutions/3011582/](https://leetcode.com/problems/gas-station/solutions/3011582/)

---

```
defmodule Solution do
  @spec can_complete_circuit(gas :: [integer], cost :: [integer]) :: integer
  def can_complete_circuit(gas, cost) do
    diff =
      Enum.zip(gas, cost)
      |> Enum.map(fn {g, c} -> g - c end)

    if Enum.sum(diff) < 0 do
      -1
    else
      diff
      |> Enum.with_index()
      |> Enum.reduce({0, 0}, fn {d, i}, {ans, gas} ->
        if gas < 0, do: {i, d}, else: {ans, gas + d}
      end)
      |> elem(0)
    end
  end
end

```