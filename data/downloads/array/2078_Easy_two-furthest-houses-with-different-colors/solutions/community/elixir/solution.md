# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/4595547/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/4595547/)

---

# Approach
Find the first color, second color's index, maximum distance of a different color house from the first house and the last house color while iteration. The answer will be the maximum of either maximum distance from the first house or distance between the last color index and second color's index.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec max_distance(colors :: [integer]) :: integer
  def max_distance(colors) do 
    first_color = hd(colors)
    do_max_distance(tl(colors), 1, first_color, nil, 0)
  end

  defp do_max_distance([last_color], i, first_color, second_color_ind, max_dist_from_left) do
    if first_color != last_color, do: i, else: max(max_dist_from_left, i - second_color_ind)
  end
  defp do_max_distance([hd | tl], i, first_color, second_color_ind, max_dist_from_left) do
    cond do
      hd != first_color -> second_color_ind = if !second_color_ind, do: i, else: second_color_ind
                           do_max_distance(tl, i + 1, first_color, second_color_ind, i) 
      true -> do_max_distance(tl, i + 1, first_color, second_color_ind, max_dist_from_left)
    end
  end
end
```