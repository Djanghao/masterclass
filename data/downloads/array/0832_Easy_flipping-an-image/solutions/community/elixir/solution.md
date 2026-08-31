# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/4271790/](https://leetcode.com/problems/flipping-an-image/solutions/4271790/)

---

# Approach
Uses tail call recursion and pattern matching to invert and reverse the pixels in the image.

# Complexity
- Time complexity:
O(n) where n is the number of pixels in the image

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec flip_and_invert_image(image :: [[integer]]) :: [[integer]]
  def flip_and_invert_image(image), do: do_flip_and_invert_image(image, [])

  defp do_flip_and_invert_image([], res), do: Enum.reverse(res)
  defp do_flip_and_invert_image([hd | tl], res), do: do_flip_and_invert_image(tl, [flip_row(hd, []) | res])

  defp flip_row([], res), do: res
  defp flip_row([hd | tl], res), do: flip_row(tl, [flip(hd) | res])

  defp flip(n), do: if n == 1, do: 0, else: 1
end
```