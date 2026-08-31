# Elixir - uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5357844/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5357844/)

---

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec minimum_average(nums :: [integer]) :: float
  def minimum_average(nums) do
    sorted_nums = Enum.sort(nums)
    tuple = List.to_tuple(sorted_nums)
    max_i = tuple_size(tuple) - 1
    do_minimum_average(tuple, 0, max_i, nil)
  end

  defp do_minimum_average(_tuple, i, j, res) when i > j, do: res
  defp do_minimum_average(tuple, i, j, res) do
    min_el = elem(tuple, i)
    max_el = elem(tuple, j)
    avg = (min_el + max_el)/2
    do_minimum_average(tuple, i + 1, j - 1, min(res, avg))
  end
end
```