# Elixir, Enum.max, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/4364398/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/4364398/)

---

# Approach
Get the maximum candies in the array using Enum.max. Iterate the candies in the array and check if candies + extra_candies >= max_candies to create the result

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec kids_with_candies(candies :: [integer], extra_candies :: integer) :: [boolean]
  def kids_with_candies(candies, extra_candies) do 
    max_candies = Enum.max(candies)
    for x <- candies, do: x + extra_candies >= max_candies
  end
end
```