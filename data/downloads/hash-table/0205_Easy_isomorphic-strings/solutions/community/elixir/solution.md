# Easy Elxir solution with MapSet

**Author:** PavelPatsey
**Votes:** 0
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/4963676/](https://leetcode.com/problems/isomorphic-strings/solutions/4963676/)

---

# Complexity
- Time complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec is_isomorphic(s :: String.t(), t :: String.t()) :: boolean
  def is_isomorphic(s, t) do
    [size_s, size_t] =
      [s, t]
      |> Enum.map(&String.to_charlist(&1))
      |> Enum.map(&MapSet.new(&1))
      |> Enum.map(&MapSet.size(&1))

    size_zip =
      [s, t]
      |> Enum.map(&String.to_charlist(&1))
      |> Enum.zip()
      |> MapSet.new()
      |> MapSet.size()

    size_s == size_t and size_t == size_zip
  end
end
```