# Elixir - Just sort it!

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-string/solutions/5920070/](https://leetcode.com/problems/longest-happy-string/solutions/5920070/)

---

# Intuition
Using a priorty queue on only 3 entries is a waste. Sorting does the job perfectly.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```elixir []
defmodule Solution do
  @spec longest_diverse_string(a :: integer, b :: integer, c :: integer) :: String.t
  def longest_diverse_string(a, b, c) do
    [
      {a, ?a},
      {b, ?b},
      {c, ?c}
    ]
    |> Enum.reject(&elem(&1, 0) == 0)
    |> Enum.sort(:desc)
    |> solve([])
    |> IO.iodata_to_binary()
  end

  defp solve([], acc) do
    acc
  end

  defp solve([{_, c}], [c, c | _] = acc) do
    acc
  end

  defp solve([{_, c1} = e1, {n2, c2} | t], [c1, c1 | _] = acc) do
    [e1, {n2 - 1, c2} | t]
    |> Enum.reject(&elem(&1, 0) == 0)
    |> Enum.sort(:desc)
    |> solve([c2 | acc])
  end

  defp solve([{n1, c1} | t], acc) do
    [{n1 - 1, c1} | t]
    |> Enum.reject(&elem(&1, 0) == 0)
    |> Enum.sort(:desc)
    |> solve([c1 | acc])
  end
end
```