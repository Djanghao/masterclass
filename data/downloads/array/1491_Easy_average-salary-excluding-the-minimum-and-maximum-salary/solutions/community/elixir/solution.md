# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/4373256/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/4373256/)

---

# Approach
Iterate the salaries and keep track of the count, total sum, max and min salaries. Return total sum - (min + max)/ count - 2

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec average(salary :: [integer]) :: float
  def average(salary), do: do_average(salary, 0, 0, 0, nil)

  defp do_average([hd | tl], count, sum, max, min) do
    max = if hd > max, do: hd, else: max
    min = if hd < min, do: hd, else: min
    do_average(tl, count + 1, sum + hd, max, min)
  end
  defp do_average([], count, sum, max, min), do: (sum - (max + min))/(count - 2)
end
```