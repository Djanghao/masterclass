# Elixir Reduce_While solution

**Author:** MiguelsPizza
**Votes:** 3
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/4023695/](https://leetcode.com/problems/contains-duplicate/solutions/4023695/)

---

No need to interate through the entire list. We return a boolean at the first duplicate

```
defmodule Solution do
  @spec contains_duplicate(nums :: [integer]) :: boolean
  def contains_duplicate(nums) do
    Enum.reduce_while(nums, MapSet.new(), fn x, acc ->
      if MapSet.member?(acc, x) do
        {:halt, true}
      else
        {:cont, MapSet.put(acc, x)}
      end
    end) == true
  end
end
```