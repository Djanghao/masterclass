# Elixir, O(log(n))

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/4730550/](https://leetcode.com/problems/split-with-minimum-sum/solutions/4730550/)

---

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(log(n))

# Code
```
defmodule Solution do
  @spec split_num(num :: integer) :: integer
  def split_num(num) do
    digit_count = get_digit_count(num, %{})
    do_split_num(digit_count, 0, 0)
  end

  defp do_split_num(digit_count, n1, n2) when map_size(digit_count) > 0 do
    {d1, digit_count} = get_smallest_num(digit_count, 0)
    {d2, digit_count} = get_smallest_num(digit_count, 0)
    n1 = n1 * 10 + d1
    n2 = if d2, do:  n2 * 10 + d2, else: n2
    do_split_num(digit_count, n1, n2)
  end
  defp do_split_num(_, n1, n2), do: n1 + n2

  defp get_smallest_num(_, i) when i > 9, do: {nil, %{}}
  defp get_smallest_num(digit_count, i) do
    case digit_count[i] do
      nil -> get_smallest_num(digit_count, i + 1)
      1 -> {i, Map.delete(digit_count, i)}
      x -> {i, Map.put(digit_count, i, x - 1)}
    end
  end

  defp get_digit_count(num, dig_count) when num > 0 do
    dig_count = Map.update(dig_count, rem(num, 10), 1, &(&1 + 1))
    get_digit_count(div(num, 10), dig_count)
  end
  defp get_digit_count(_, dig_count), do: dig_count
end
```