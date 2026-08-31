# Solution in Elixir

**Author:** drdec
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/3146538/](https://leetcode.com/problems/permutation-in-string/solutions/3146538/)

---

# Code
```
defmodule Solution do
  @spec check_inclusion(s1 :: String.t, s2 :: String.t) :: boolean
  def check_inclusion(s1, s2) do
    len = String.length(s1)

    target_freq = s1 |> String.to_charlist() |> Enum.frequencies() |> Map.to_list()

    if String.length(s2) < len do
      false
    else
      window = String.to_charlist(s2)
      rest = Enum.drop(window, len - 1)
      freq = window |> Enum.slice(0, len - 1) |> Enum.frequencies()
      check(target_freq, freq, window, rest)
    end
  end

  defp check(_, _, _, []), do: false

  defp check(target_freq, freq, [w | window], [r | rest]) do
    freq = Map.update(freq, r, 1, fn count -> count + 1 end)

    if check_freqs(target_freq, freq) do
      true
    else
      freq = Map.update(freq, w, 0, fn count -> count - 1 end)
      check(target_freq, freq, window, rest)
    end
  end

  defp check_freqs(target_freq, freq) do
    target_freq |> Enum.all?(fn {ch, count} -> count == Map.get(freq, ch, 0) end)
  end
end

```