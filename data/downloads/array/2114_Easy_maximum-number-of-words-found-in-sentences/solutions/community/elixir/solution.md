# Elixir One-liner

**Author:** JJamesWWang
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1886500/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1886500/)

---

```elixir
defmodule Solution do
  @spec most_words_found(sentences :: [String.t]) :: integer
  def most_words_found(sentences) do
    Enum.reduce(sentences, 0, fn s, acc -> max(acc, s |> String.split() |> Enum.count()) end)
  end
end```