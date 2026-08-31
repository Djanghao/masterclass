# Elixir doing linear scan

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/4030184/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/4030184/)

---

Scan from right to left, and look for one of the wanted subsequences.
If not found, answer is dependent on whether `'0'` is already seen.
# Code
```
defmodule Solution do
  @spec minimum_operations(num :: String.t) :: integer
  def minimum_operations(num) do
    String.to_charlist(num)
    |> Enum.reverse()
    |> find_min(1, false, false)
  end

  defp find_min([ch | tail], i, five, zero) do
    cond do
      ch in [?5, ?0] and zero -> i - 2
      ch in [?2, ?7] and five -> i - 2
      ch == ?5 -> find_min(tail, i + 1, true, zero)
      ch == ?0 -> find_min(tail, i + 1, five, true)
      true -> find_min(tail, i + 1, five, zero)
    end
  end
  defp find_min([], i, _, true), do: i - 2
  defp find_min([], i, _, _), do: i - 1
end
```