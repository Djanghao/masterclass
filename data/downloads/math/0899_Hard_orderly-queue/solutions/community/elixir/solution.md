# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2849348/](https://leetcode.com/problems/orderly-queue/solutions/2849348/)

---

```elixir
defmodule Solution do
  @spec orderly_queue(s :: String.t(), k :: integer) :: String.t()
  def orderly_queue(s, 1) do
    len = String.length(s)
    s = s <> s

    for i <- 0..len do
      String.slice(s, i, len)
    end
    |> Enum.min()
  end

  def orderly_queue(s, _k) do
    s |> String.graphemes() |> Enum.sort() |> Enum.join()
  end
end
```