# Elixir recursion solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/1637491/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/1637491/)

---

```elixir
defmodule Solution do
  @spec add_spaces(s :: String.t(), spaces :: [integer]) :: String.t()
  def add_spaces(s, spaces) do
    aux(String.graphemes(s), 0, spaces, []) |> Enum.join()
  end

  def aux([], _ct, _spaces, ans), do: Enum.reverse(ans)

  def aux(lst, ct, [], ans) do
    Enum.concat([Enum.reverse(ans), lst])
  end

  def aux([x | xs], ct, [space | rest] = spaces, ans) do
    if ct == space do
      aux(xs, ct + 1, rest, [x, " " | ans])
    else
      aux(xs, ct + 1, spaces, [x | ans])
    end
  end
end
```