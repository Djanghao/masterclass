# Simple Elixir solution without using trim and last function

**Author:** alexandresw
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/2837440/](https://leetcode.com/problems/length-of-last-word/solutions/2837440/)

---

```elixir
defmodule Solution do
  @spec length_of_last_word(s :: String.t) :: integer
  def length_of_last_word(s) do
    s
    |> String.to_charlist()
    |> process(true, 0)
  end
      
  defp process([], _, count), do: count
  defp process([?\\s | tail], _restart, count), do: process(tail, true, count)
  defp process([c | tail], true, _count), do: process(tail, false, 1)
  defp process([c | tail], false, count), do: process(tail, false, count + 1)
end
```