# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/4567446/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/4567446/)

---

# Approach
Uses binary pattern matching to iterate each character, keeps track of the previous character, finds the distance to move to the current character and returns the accumulated seconds required to type the word.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec min_time_to_type(word :: String.t) :: integer
  def min_time_to_type(word), do: do_min_time_to_type(word, ?a, byte_size(word))

  defp do_min_time_to_type(<<ch, rest::bytes>>, cur_ch, seconds) do
    do_min_time_to_type(rest, ch, seconds + move_pointer(cur_ch, ch))
  end
  defp do_min_time_to_type(_, _, seconds), do: seconds

  defp move_pointer(ch, ch1) do
    distance = abs(ch - ch1) 
    min(distance, 26 - distance)
  end
end
```