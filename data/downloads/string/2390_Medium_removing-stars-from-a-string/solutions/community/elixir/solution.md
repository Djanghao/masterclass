# Super easy to understand with comment.

**Author:** hongsuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3408157/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3408157/)

---

# Intuition
Count the number of stars from the end of the string and you can omit the character as the number of stars.

# Approach
Transform the string into character list and start computation from the end.

# Complexity
- Time complexity:
It traverses each chracters once. O(n)

- Space complexity:
It creates another list. O(n)

# Code
```
defmodule Solution do
  @spec remove_stars(s :: String.t) :: String.t
  def remove_stars(s) do
    s 
    |> String.split("", trim: true) # make a list of characters
    |> Enum.reverse() # reverse the list
    |> compute(0, [])
    |> Enum.join("") # make a string from the list of characters
  end

  defp compute([], _, ret), do: ret # all done
  defp compute(["*" | s], stars, ret), do: compute(s, stars+1, ret) # increase star count
  defp compute([c | s], 0, ret), do: compute(s, 0, [c | ret]) # keep the character if the star count is zero
  defp compute([c | s], stars, ret), do: compute(s, stars-1, ret) # omit the character if the star count is greater than zero
end
```