# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/4206105/](https://leetcode.com/problems/construct-the-rectangle/solutions/4206105/)

---

# Approach
Start from the floor(sqrt(area)) and recurse this number i by decrementing it by 1 until the number is a factor of area and if so,return the result as [factor, i].  

# Complexity
- Time complexity:
O(sqrt(area))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec construct_rectangle(area :: integer) :: [integer]
  def construct_rectangle(area), do: do_construct_rectangle(area, floor(:math.sqrt(area)))

  defp do_construct_rectangle(area, i) when rem(area, i) != 0, do: do_construct_rectangle(area, i-1) 
  defp do_construct_rectangle(area, i), do: [div(area,i), i]
end
```