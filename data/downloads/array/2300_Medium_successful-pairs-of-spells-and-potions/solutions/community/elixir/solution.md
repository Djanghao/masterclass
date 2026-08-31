# Elixir - Binary search

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3378336/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3378336/)

---

# Complexity
- Time complexity: $$O(|spells| \	imes |potions| \\log(|potions|))$$

- Space complexity: $$O(|potions|)$$

# Code
```
defmodule Solution do
  @spec successful_pairs(spells :: [integer], potions :: [integer], success :: integer) :: [integer]
  def successful_pairs(spells, potions, success) do
    potions_count = length(potions)

    potions = potions |> Enum.sort() |> List.to_tuple()
    
    for spell <- spells do
      index = binary_search_index(potions, success / spell)
      potions_count - index
    end
  end

  defp binary_search_index(tuple, target) do
    do_binary_search_index(tuple, target, 0, tuple_size(tuple))
  end

  defp do_binary_search_index(_tuple, _target, i, j) when i >= j do
    i
  end

  defp do_binary_search_index(tuple, target, i, j) do
    m = div(i + j , 2)

    if elem(tuple, m) >= target do
      do_binary_search_index(tuple, target, i, m)
    else
      do_binary_search_index(tuple, target, m + 1, j)
    end
  end
end
```