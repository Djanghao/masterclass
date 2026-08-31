# Elixir - Regular Expression

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359413/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359413/)

---

# Code
```elixir
defmodule Solution do
  @spec largest_good_integer(num :: String.t) :: String.t
  def largest_good_integer(num) do
    ~r/(\\d)\\1{2}/
    |> Regex.scan(num, capture: :first)
    |> List.flatten()
    |> Enum.max(fn -> "" end)
  end
end
```