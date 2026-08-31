# Elixir stdlib with MapSet and Enum.count/2

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/4980576/](https://leetcode.com/problems/jewels-and-stones/solutions/4980576/)

---

```
defmodule Solution do
  @spec num_jewels_in_stones(jewels :: String.t, stones :: String.t) :: integer
  def num_jewels_in_stones(jewels, stones) do
    jewels = jewels |> String.graphemes() |> MapSet.new()

    stones
    |> String.graphemes()
    |> Enum.count(&MapSet.member?(jewels, &1))
  end
end
```