# Elixir using recursion

**Author:** Fedor-Lyanguzov
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4683096/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4683096/)

---

# Intuition

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
defmodule Solution do
  @spec first_uniq_char(s :: String.t) :: integer
  def first_uniq_char(s) do
    f(s |> String.codepoints(), 0, MapSet.new(), %{})
  end

  defp f([], _, _, acc) when acc == %{}, do: -1
  defp f([], _, _, acc), do: acc |> Map.values() |> Enum.min()
  defp f([x | s], i, set, acc) do
    if x in set do
      f(s, i+1, set, acc |> Map.delete(x))
    else
      f(s, i+1, set |> MapSet.put(x), acc |> Map.put(x, i))
    end
  end
end
```