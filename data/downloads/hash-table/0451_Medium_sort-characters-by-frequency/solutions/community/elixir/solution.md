# Enum.frequencies Sorting

**Author:** erinawiggins
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/5466841/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/5466841/)

---

# Intuition
Seemed like a job for Enum.frequencies for sure. Then it's just a matter of arranging and making sure every character is represented rather than one each.

# Approach
Similar to a lot of other solutions I've seen posted. Enum.flat_map combines Enum.map and List.flatten together. List.duplicate is needed to display the characters *n* times instead of one each.

# Code
```
defmodule Solution do
  @spec frequency_sort(s :: String.t) :: String.t
  def frequency_sort(s) do
    String.graphemes(s)
    |> Enum.frequencies
    |> Enum.sort_by(fn {v, f} -> f end, :desc)
    |> Enum.flat_map(fn {v, f} ->
      List.duplicate(v, f)
    end)
  end
end
```