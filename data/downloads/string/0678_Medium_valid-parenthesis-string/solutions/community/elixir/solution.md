# Elixir - Recursive Pattern Matching

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4985329/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4985329/)

---

# Code
```
defmodule Solution do
  @spec check_valid_string(s :: String.t) :: boolean
  def check_valid_string(s) do
    String.to_charlist(s)
    |> Enum.with_index()
    |> check([], [])
  end

  defp check([], _stars, []), do: true
  defp check([], [], _opened), do: false
  defp check([], [s_idx | _stars], [p_idx | _opened]) when s_idx < p_idx, do: false
  defp check([], [s_idx | stars], [p_idx | opened]) when s_idx > p_idx, do: check([], stars, opened)
  defp check([{?), _} | _s], [], []), do: false
  defp check([{?*, idx} | s], stars, opened), do: check(s, [idx | stars], opened)
  defp check([{?(, idx} | s], stars, opened), do: check(s, stars, [idx | opened])
  defp check([{?), _} | s], [], opened ), do: check(s, [], tl(opened))
  defp check([{?), _} | s], stars, []), do: check(s, tl(stars), [])
  defp check([{?), _} | s], stars, opened), do: check(s, stars, tl(opened))
end
```