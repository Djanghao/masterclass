# Elixir Enum.all?

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/3245820/](https://leetcode.com/problems/escape-the-ghosts/solutions/3245820/)

---

# Code
```
defmodule Solution do
  @spec escape_ghosts(ghosts :: [[integer]], target :: [integer]) :: boolean
  def escape_ghosts(ghosts, target) do
    my_dist = dist([0, 0], target)
    Enum.all?(ghosts, &(dist(&1, target) > my_dist))
  end
  
  defp dist([x1, y1], [x2, y2]) do
    abs(x1 - x2) + abs(y1 - y2)
  end
end
```