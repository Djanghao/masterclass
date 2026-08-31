# Elixir, string

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/4724973/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/4724973/)

---

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(log(n))

# Code
```
defmodule Solution do
  @spec min_max_difference(num :: integer) :: integer
  def min_max_difference(num) do
    num_s = Integer.to_string(num)
    get_max_num(num_s) - get_min_num(num_s)
  end

  defp get_max_num(num_s) do
    for <<x <- num_s>>, reduce: {0, nil} do
      {acc, swapped_dig} -> cond do
        x == ?9 -> {(acc * 10) + 9, swapped_dig}
        swapped_dig == nil -> {(acc * 10) + 9, x}
        x == swapped_dig -> {(acc * 10) + 9, x}
        true -> {(acc * 10) + (x - ?0), swapped_dig}
      end
    end |> elem(0)
  end

  defp get_min_num(<<swapped_dig, rest::bytes>>) do
    for <<x <- rest>>, reduce: 0 do
      acc -> if x == swapped_dig, do: (acc * 10) + 0, else: (acc * 10) + (x - ?0)
    end 
  end
end
```