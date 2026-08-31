# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/additive-number/solutions/2100782/](https://leetcode.com/problems/additive-number/solutions/2100782/)

---

```elixir
defmodule Solution do
  @spec is_additive_number(num :: String.t()) :: boolean
  def is_additive_number(num) do
    n = String.length(num)

    1..n
    |> Enum.to_list()
    |> combo(2)
    |> Enum.reduce_while(false, fn [i, j], acc ->
      a = String.slice(num, 0..(i - 1))
      b = String.slice(num, i..(j - 1))
      c = String.slice(num, j..n)

      cond do
        String.match?(a, ~r/^0.+/) || String.match?(b, ~r/^0.+/) ->
          {:cont, false}

        aux(a, b, c) ->
          {:halt, true}

        true ->
          {:cont, false}
      end
    end)
  end

  def aux(a, b, s) do
    c = "#{String.to_integer(a) + String.to_integer(b)}"

    cond do
      s == c ->
        true

      String.starts_with?(s, c) ->
        {_, s} = String.split_at(s, String.length(c))
        aux(b, c, s)

      true ->
        false
    end
  end

  def combo(_, 0), do: [[]]
  def combo([], _), do: []

  def combo([h | t], n) do
    for(l <- combo(t, n - 1), do: [h | l]) ++ combo(t, n)
  end
end
```