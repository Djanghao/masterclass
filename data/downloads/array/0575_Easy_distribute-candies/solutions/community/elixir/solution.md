# Elixir, uses set

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/4225206/](https://leetcode.com/problems/distribute-candies/solutions/4225206/)

---

# Approach
Create a set to determine the number of unique candy types. Return the minimum of len(candies)/2 and number of candy types

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec distribute_candies(candy_type :: [integer]) :: integer
  def distribute_candies(candy_type) do 
    for x <- candy_type, reduce: {MapSet.new(), 0} do
      {types, total} -> {MapSet.put(types, x), total + 1}
    end |> 
    then(fn {types, total} -> min(MapSet.size(types), div(total,2)) end)
  end
end
```