# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/4290258/](https://leetcode.com/problems/long-pressed-name/solutions/4290258/)

---

# Approach
Uses binary pattern matching to iterate characters in both strings to check if all the characters present in name is present in typed in the same order.

# Complexity
- Time complexity:
O(n) where n is the length of typed

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec is_long_pressed_name(name :: String.t, typed :: String.t) :: boolean
  def is_long_pressed_name(name, typed) do
     <<f, rest::bytes>> = name
     do_is_long_pressed_name(name, typed, f)
  end

  defp do_is_long_pressed_name(<<f1, rest::bytes>> = name, <<f2, rest1::bytes>> = typed, ch) do 
    case {f1 == ch, f2 == ch} do
      {false, true} -> do_is_long_pressed_name(name, rest1, ch)
      {true, true} -> do_is_long_pressed_name(rest, rest1, ch)
      {false, false} -> do_is_long_pressed_name(name, typed, f1)
      {true, false} -> false
    end
  end
  defp do_is_long_pressed_name(<<>>, <<ch, rest1::bytes>>, ch), do: do_is_long_pressed_name(<<>>, rest1, ch)
  defp do_is_long_pressed_name(name, typed, _ch), do: byte_size(name) == 0 and byte_size(typed) == 0
end
```