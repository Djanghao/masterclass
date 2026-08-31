# Elixir single pipeline

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/4980463/](https://leetcode.com/problems/license-key-formatting/solutions/4980463/)

---

# Code
```
defmodule Solution do
  @spec license_key_formatting(s :: String.t, k :: integer) :: String.t
  def license_key_formatting(s, k) do
    s
    |> String.reverse()
    |> String.graphemes()
    |> Stream.reject(&Kernel.==(&1, "-"))
    |> Stream.chunk_every(k)
    |> Stream.map(&Enum.join/1)
    |> Enum.join("-")
    |> String.reverse()
    |> String.upcase()
  end
end
```