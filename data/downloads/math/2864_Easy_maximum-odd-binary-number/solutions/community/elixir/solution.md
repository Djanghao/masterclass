# Elixir - reduce - O(n)

**Author:** Nono31
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802537/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802537/)

---

# Code
```
defmodule Solution do
  @spec maximum_odd_binary_number(s :: String.t) :: String.t
  def maximum_odd_binary_number(s) do
    {[ _ | ones], zeros} = s |> String.graphemes() |> Enum.reduce({[], []}, fn c, {ones, zeros} ->
      case c do 
        "0" -> { ones, [c | zeros] }
        "1" -> { [c | ones], zeros }
      end
    end)
    (ones ++ zeros ++ ["1"]) |> Enum.join()
   end
end
```