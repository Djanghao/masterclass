# Elixir - sum from bottom to top

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/triangle/solutions/2148753/](https://leetcode.com/problems/triangle/solutions/2148753/)

---

I wrote this solution, it passes, and it looks easy, but it hurts my brain when I try to think it through.

```elixir
defmodule Solution do
  @spec minimum_total(triangle :: [[integer]]) :: integer
  def minimum_total(triangle) do
    triangle
    |> Enum.reverse()
    |> Enum.reduce(fn row, acc ->
      acc
      |> Stream.chunk_every(2, 1, :discard)
      |> Stream.map(&apply(Kernel, :min, &1))
      |> Stream.zip_with(row, &+/2)
    end)
    |> Enum.at(0)
  end
end
```

If I change all the `Stream` to `Enum`, it's very easy to understand. When I `|> IO.inspect()` just before `Enum.at(0)`, it prints something like `#Function<71.58486609/2 in Stream.zip_with/2>` with no internal state! What happened?