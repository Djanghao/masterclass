# Elixir - Straightforward solution

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/2750614/](https://leetcode.com/problems/group-anagrams/solutions/2750614/)

---

```elixir
defmodule Solution do
  @spec group_anagrams(strs :: [String.t]) :: [[String.t]]
  def group_anagrams(strs) do
    strs
    |> Stream.map(&{&1 |> String.to_charlist() |> Enum.frequencies(), &1})
    |> Enum.group_by(&elem(&1, 0), &elem(&1, 1))
    |> Map.values()
  end
end
```