# Elixir: O(n), two pointers

**Author:** pul-paulsen
**Votes:** 1
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/5790967/](https://leetcode.com/problems/container-with-most-water/solutions/5790967/)

---

# Intuition

Shrink from both sides by removing the lower of either walls and keeping the max volumen (two pointers approach)

# Approach

* Turn heights list into tuple for constant time index access
* Start with left and right pointer spanning the whole tuple and max volume = 0
* Recur as long as right > left:
    * Retrieve the heights of both pointers
    * Calculate the volume as breadth (r - l) * smaller height
    * Change the pointer with the smaller height inwards
    * Keep the max volume
* Return max volume

# Complexity

* Time complexity: **O(n)**
* Space complexity: **O(n)**; tuple must be created from list, tradeoff for constant access by index

# Code
```elixir []
defmodule Solution do
  @spec max_area(heights :: [integer]) :: integer
  def max_area(heights), 
    do: 
      heights 
      |> List.to_tuple()
      |> then(&max(&1, 0, tuple_size(&1) - 1, 0))

  defp max(heights, l, r, max_vol) when l < r do
    h_l = elem(heights, l)
    h_r = elem(heights, r)
    if h_l < h_r do 
        max(heights, l + 1, r, max(max_vol, (r - l) * h_l))
    else 
        max(heights, l, r - 1, max(max_vol, (r - l) * h_r))
    end
  end   

  defp max(_, _, _, max_vol), do: max_vol

end
```