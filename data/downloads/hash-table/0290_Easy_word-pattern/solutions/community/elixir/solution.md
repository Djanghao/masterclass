# Elixir: leverage Map.put_new/3

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern/solutions/5009123/](https://leetcode.com/problems/word-pattern/solutions/5009123/)

---

# Code
```
defmodule Solution do
  @spec word_pattern(pattern :: String.t(), s :: String.t()) :: boolean
  def word_pattern(pattern, s) do
    p = String.graphemes(pattern)
    s = String.split(s)

    zip_reduce(p, s, %{}, MapSet.new())
  end

  defp zip_reduce([p | pr], [s | sr], acc_m, acc_s) do
    case Map.put_new(acc_m, p, s) do
      %{^p => ^s} = acc_m -> zip_reduce(pr, sr, acc_m, MapSet.put(acc_s, s))
      _ -> false
    end
  end

  defp zip_reduce([], [], acc_m, acc_s),
    do: map_size(acc_m) == MapSet.size(acc_s)

  defp zip_reduce(_, _, _, _), do: false
end
```