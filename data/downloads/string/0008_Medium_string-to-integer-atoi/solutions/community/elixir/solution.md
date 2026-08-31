# Elixir Solution

**Author:** CGDEX
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/1944234/](https://leetcode.com/problems/string-to-integer-atoi/solutions/1944234/)

---

```
defmodule Solution do
  @spec my_atoi(s :: String.t) :: integer
  def my_atoi(s) do
    result = s
          |> String.trim
          |> String.split
          |> List.first

    if result != nil and Integer.parse(result) != :error do
      {num,_} = Integer.parse(result)
      cond do
        num < -2 ** 31 -> -2 ** 31
        num > 2 ** 31 - 1 -> 2 ** 31 - 1
        true  -> num
      end
    else
      0
    end
  end

end
```