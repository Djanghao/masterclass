# Elixir - Monotonic Stack

**Author:** Nono31
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-k-digits/solutions/5006236/](https://leetcode.com/problems/remove-k-digits/solutions/5006236/)

---



# Code
```
defmodule Solution do
  @spec remove_kdigits(num :: String.t, k :: integer) :: String.t
  def remove_kdigits(num, k) do
    if String.length(num) <= k do
      "0"
    else
      num
      |> String.to_charlist()
      |> do_rem(k, [])
      |> rem_leading_zero()
      |> handle_empty()
      |> to_string()
    end
  end

  defp do_rem(nums, 0, stack), do: Enum.reverse(stack) ++ nums
  defp do_rem([], 0, stack), do: Enum.reverse(stack)
  defp do_rem([], k, stack), do: stack |> Enum.drop(k) |> Enum.reverse()
  defp do_rem([num | t_nums], k, []), do: do_rem(t_nums, k, [num])
  defp do_rem([num | _t_nums] = nums, k, [top | t_stack]) when num < top do
    do_rem(nums, k - 1, t_stack)
  end
  defp do_rem([num | t_nums] , k, stack) do
    do_rem(t_nums, k, [num | stack])
  end

  defp rem_leading_zero([?0| list]), do: rem_leading_zero(list)
  defp rem_leading_zero(list), do: list

  defp handle_empty([]), do: ["0"]
  defp handle_empty(list), do: list
end
```