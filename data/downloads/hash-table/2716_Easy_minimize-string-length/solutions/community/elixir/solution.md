# Elixir, one liner, set

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/4760973/](https://leetcode.com/problems/minimize-string-length/solutions/4760973/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec minimized_string_length(s :: String.t) :: integer
  def minimized_string_length(s) do
    (for <<x <- s>>, into: MapSet.new(), do: x) |> MapSet.size() 
  end
end
```