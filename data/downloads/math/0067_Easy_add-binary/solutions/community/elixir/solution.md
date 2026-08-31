# String.to_integer, Integer.to_string

**Author:** AeronStorm
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-binary/solutions/3627930/](https://leetcode.com/problems/add-binary/solutions/3627930/)

---

# Code
```
defmodule Solution do
  @spec add_binary(a :: String.t, b :: String.t) :: String.t
  def add_binary(a, b) do
    (String.to_integer(a,2) + String.to_integer(b,2)) |> Integer.to_string(2)
  end
end
```