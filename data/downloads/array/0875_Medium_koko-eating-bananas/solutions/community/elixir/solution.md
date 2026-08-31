# Elixir binary search solution

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/3270583/](https://leetcode.com/problems/koko-eating-bananas/solutions/3270583/)

---

# Code
```elixir
defmodule Solution do
  @spec min_eating_speed(piles :: [integer], h :: integer) :: integer
  def min_eating_speed(piles, h) do
    binary_search(piles, 1, Enum.max(piles), h)
  end

  defp binary_search(_, lo, lo, _), do: lo
  defp binary_search(piles, lo, hi, h) do
    mid = div(lo + hi, 2)
    hours = Enum.reduce(piles, 0, fn x, acc -> acc + ceil(x / mid) end)
    if hours > h do
      binary_search(piles, mid + 1, hi, h)
    else
      binary_search(piles, lo, mid, h)
    end
  end
end
```