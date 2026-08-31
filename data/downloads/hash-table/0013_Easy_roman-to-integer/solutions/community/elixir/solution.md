# Binary pattern matching and recursion

**Author:** harfangk
**Votes:** 1
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/3663806/](https://leetcode.com/problems/roman-to-integer/solutions/3663806/)

---

# Intuition
Leverage binary pattern matching to iterate over string, at times by two characters.

# Complexity
- Time complexity: $$O(n)$$
 
- Space complexity: $$O(1)$$

# Code
```
defmodule Solution do
  @spec roman_to_int(s :: String.t) :: integer
  def roman_to_int(s) do
    do_roman_to_int(s, 0)
  end

  defp do_roman_to_int(<<"M" <> rest >>, result), do: do_roman_to_int(rest, result + 1000)
  defp do_roman_to_int(<<"CM" <> rest >>, result), do: do_roman_to_int(rest, result + 900)
  defp do_roman_to_int(<<"D" <> rest >>, result), do: do_roman_to_int(rest, result + 500)
  defp do_roman_to_int(<<"CD" <> rest >>, result), do: do_roman_to_int(rest, result + 400)
  defp do_roman_to_int(<<"C" <> rest >>, result), do: do_roman_to_int(rest, result + 100)
  defp do_roman_to_int(<<"XC" <> rest >>, result), do: do_roman_to_int(rest, result + 90)
  defp do_roman_to_int(<<"L" <> rest >>, result), do: do_roman_to_int(rest, result + 50)
  defp do_roman_to_int(<<"XL" <> rest >>, result), do: do_roman_to_int(rest, result + 40)
  defp do_roman_to_int(<<"X" <> rest >>, result), do: do_roman_to_int(rest, result + 10)
  defp do_roman_to_int(<<"IX" <> rest >>, result), do: do_roman_to_int(rest, result + 9)
  defp do_roman_to_int(<<"V" <> rest >>, result), do: do_roman_to_int(rest, result + 5)
  defp do_roman_to_int(<<"IV" <> rest >>, result), do: do_roman_to_int(rest, result + 4)
  defp do_roman_to_int(<<"I" <> rest >>, result), do: do_roman_to_int(rest, result + 1)
  defp do_roman_to_int("", result), do: result
end
```