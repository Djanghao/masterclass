# Elixir, binary pattern matching, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/slowest-key/solutions/4398103/](https://leetcode.com/problems/slowest-key/solutions/4398103/)

---

# Approach
Iterate the times and keys, keep track of the maximum duration of key press and it's respective key. Compare the max duration with current duartion and update the results.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec slowest_key(release_times :: [integer], keys_pressed :: String.t) :: char
  def slowest_key(release_times, keys_pressed), do: do_slowest_key(release_times, keys_pressed, 0, 0, nil)

  defp do_slowest_key([t | tl], <<key, rest::bytes>>, prev_time, max_duration, res_key) do
    case t - prev_time do
      x when x > max_duration -> do_slowest_key(tl, rest, t, x, key)
      x when x < max_duration -> do_slowest_key(tl, rest, t, max_duration, res_key)
      _ -> do_slowest_key(tl, rest, t, max_duration, max(res_key, key))
    end
  end
  defp do_slowest_key(_, _, _, _, res_key), do: res_key
end
```