# Elixir solution

**Author:** JJamesWWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/1902184/](https://leetcode.com/problems/brace-expansion/solutions/1902184/)

---

Store all words when in brackets and reduce by copying existing words.
```
defmodule Solution do
  @spec expand(s :: String.t) :: [String.t]
  def expand(s) do
    s
    |> String.graphemes()
    |> Enum.reverse()
    |> Enum.reduce({[[]], [], false}, fn c, {words, options, acc?} -> 
        case {c, acc?} do
          {"}", _} -> {words, [], true}
          {"{", _} -> {Enum.map(options, fn c -> (Enum.map(words, &([c | &1]))) end) |> Enum.concat(), [], false}
          {",", _} -> {words, options, true} 
          {_, true} -> {words, [c | options], true}
          {_, false} -> {Enum.map(words, &([c | &1])), options, false}
        end
    end)
    |> elem(0)     
    |> Enum.map(&(Enum.join(&1)))     
    |> Enum.sort()
  end
end
```