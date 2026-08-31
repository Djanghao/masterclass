# [Elixir] || Binary Search || Greedy || Functional || Tail Recursion

**Author:** KettelBear
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3888452/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3888452/)

---

# Intuition
As I am learning more complex algorithms, my intuition was to learn how to solve this problem. This was not solved of my own intuition.

# Approach
After understanding the solution, it was time to think in a functional approach given the immutability of variables in Elixir.

# Code
```
defmodule Solution do
  @spec minimize_max(nums :: [integer], p :: integer) :: integer
  def minimize_max(nums, p) do
    sorted = Enum.sort(nums)

    minimize_max(sorted, p, 0, List.last(sorted) - hd(sorted))
  end

  defp minimize_max(_, _, low, high) when low >= high, do: low
  defp minimize_max(nums, p, low, high) do
    middle = low + high |> div(2)

    if pairs?(nums, p, middle, 0) do
      minimize_max(nums, p, low, middle)
    else
      minimize_max(nums, p, middle + 1, high)
    end
  end

  defp pairs?([], p, _, count), do: count >= p
  defp pairs?([_last], p, _, count), do: count >= p
  defp pairs?([first, second | rest], p, middle, count) do
    if second - first <= middle do
      pairs?(rest, p, middle, count + 1)
    else
      pairs?([second | rest], p, middle, count)
    end
  end
end
```