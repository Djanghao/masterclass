# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4034670/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4034670/)

---

# Code
```
defmodule Solution do
  @spec min_deletions(s :: String.t) :: integer
  def min_deletions(s) do
    String.to_charlist(s)
    |> Enum.frequencies()
    |> Map.values()
    |> Enum.sort(:desc)
    |> Enum.reduce({0, 999999}, fn x, {ans, prev} ->
      del_to = min(x, prev - 1) |> max(0)
      {ans + x - del_to, del_to}
    end)
    |> elem(0)
  end
end
```