# Elixir - O(n) solution with tail recursion

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/3319346/](https://leetcode.com/problems/can-place-flowers/solutions/3319346/)

---

# Approach
1. Pad the flowerbed with 0 on both sides
2. Slide the window of size 3 and try to find a window with 3 zeroes
3. Update the window to `[0, 1, 0]` (omitted in the code), and the next window to `[1, 0, x]`
4. Recurse with `n = n - 1`.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec can_place_flowers(flowerbed :: [integer], n :: integer) :: boolean
  def can_place_flowers(flowerbed, n) do
    chunks = Enum.chunk_every([0] ++ flowerbed ++ [0], 3, 1, :discard)
    solve(chunks, n)
  end

  defp solve(_, 0), do: true

  defp solve([], _), do: false

  defp solve([_], n) when n > 1, do: false

  defp solve([[0,0,0]], 1), do: true

  defp solve([[0, 0, 0], h2 | rest], n) do
    solve([[1 | tl(h2)] | rest], n - 1)
  end

  defp solve([_ | rest], n), do: solve(rest, n)
end
```