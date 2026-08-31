# Elixir - using Enum and Map - Beats 100%

**Author:** msantoshdora
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/2863375/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/2863375/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to calculate the frequencies of each element. And then just check if the count of values of frequencies is same as count of unique values.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)


# Code
```
defmodule Solution do
  @spec unique_occurrences(arr :: [integer]) :: boolean
  def unique_occurrences(arr) do
    total_values = Enum.frequencies(arr) |> Map.values
    Enum.count(total_values) == Enum.uniq(total_values) |> Enum.count
  end
end
```