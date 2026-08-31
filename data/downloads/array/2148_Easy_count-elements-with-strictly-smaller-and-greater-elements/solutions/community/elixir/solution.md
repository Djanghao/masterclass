# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/4613061/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/4613061/)

---

# Approach
Iterate the numbers and find the min number's count and max number's count. The result is total count - (min num's count + max num's count). If the list only has one number then the answer is zero.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_elements(nums :: [integer]) :: integer
  def count_elements(nums), do: do_count_elements(nums, {nil, 0}, {-(10**5), 0}, 0)

  defp do_count_elements([hd | tl], {min, min_count}, {max, max_count}, length) do
    {min, min_count} = cond do
      hd < min -> {hd, 1}
      hd == min -> {hd, min_count + 1}
      true -> {min, min_count}
    end
    {max, max_count} = cond do
      hd > max -> {hd, 1}
      hd == max -> {hd, max_count + 1}
      true -> {max, max_count}
    end
    do_count_elements(tl, {min, min_count}, {max, max_count}, length + 1)
  end
  defp do_count_elements(_, {min, min_count}, {max, max_count}, length) do 
    if min == max, do: 0, else: length - (min_count + max_count)
  end
end
```