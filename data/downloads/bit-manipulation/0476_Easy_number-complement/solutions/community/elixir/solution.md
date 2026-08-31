# Elixir - Simple Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-complement/solutions/5674189/](https://leetcode.com/problems/number-complement/solutions/5674189/)

---

# Code
```Elixir []
defmodule Solution do
  @spec find_complement(num :: integer) :: integer
  def find_complement(num) do
    num
    |> Integer.digits(2)
    |> Enum.map(& 1 - &1)
    |> Integer.undigits(2)
  end
end
```