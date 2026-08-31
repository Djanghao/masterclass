# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/2043422/](https://leetcode.com/problems/camelcase-matching/solutions/2043422/)

---

```elixir
defmodule Solution do
  @spec camel_match(queries :: [String.t()], pattern :: String.t()) :: [boolean]
  def camel_match(queries, pattern) do
    pattern = String.graphemes(pattern)

    queries
    |> Enum.map(fn q ->
      q |> String.graphemes() |> match(pattern)
    end)
  end

  def match([], []) do
    true
  end

  def match([], ps) do
    false
  end

  def match([x | xs], []) do
    if upper?(x) do
      false
    else
      match(xs, [])
    end
  end

  def match([x | xs], [p | ps]) do
    cond do
      x == p -> match(xs, ps)
      not upper?(x) -> match(xs, [p | ps])
      true -> false
    end
  end

  def upper?(s) do
    s == String.upcase(s)
  end
end
```