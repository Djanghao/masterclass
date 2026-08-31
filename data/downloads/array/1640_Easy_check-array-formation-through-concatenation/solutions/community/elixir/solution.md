# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4402527/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4402527/)

---

# Approach
Iterate the pieces and create a map with the first element of the piece as key and the pieces as value. Iterate the arr and find the respective piece in the pieces map. Check if all the values in the piece is present in the same order as arr and move on to the rest of the numbers in the arr until the end.

# Complexity
- Time complexity:
O(n) where n is the length of arr

- Space complexity:
O(k) where k is the length of pieces

# Code
```
defmodule Solution do
  @spec can_form_array(arr :: [integer], pieces :: [[integer]]) :: boolean
  def can_form_array(arr, pieces) do
    pieces_map = for x <- pieces, first = hd(x), reduce: %{} do
      acc -> Map.put(acc, first, x)
    end
    do_can_form_array(arr, pieces_map)    
  end

  defp do_can_form_array([hd | _] = arr, pieces_map) do
    with piece when piece != nil <- pieces_map[hd],
         {true, rest} <- equal?(arr, piece) do
         do_can_form_array(rest, pieces_map)
    else
      _ -> false
    end
  end
  defp do_can_form_array(_, _), do: true

  defp equal?([hd | tl], [hd1 | tl1]), do: hd == hd1 and equal?(tl, tl1)
  defp equal?(rest, []), do: IO.inspect {true, rest}
end
```