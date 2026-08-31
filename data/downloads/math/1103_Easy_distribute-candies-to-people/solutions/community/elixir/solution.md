# Elixir, uses :array

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/4319530/](https://leetcode.com/problems/distribute-candies-to-people/solutions/4319530/)

---

# Approach
Uses a fixed array to store the number of candies given out to the people. Iterates and updates the candies for each person until the candies run out.

# Complexity
- Time complexity:
O(sqrt(candies))

- Space complexity:
O(sqrt(candies))

# Code
```
defmodule Solution do
  @spec distribute_candies(candies :: integer, num_people :: integer) :: [integer]
  def distribute_candies(candies, num_people), do: do_distribute_candies(candies, 0, num_people - 1, 1, :array.new(size: num_people, fixed: true, default: 0))

  defp do_distribute_candies(candies, i, max_i, cur_val, arr) when i <= max_i do 
    person_candies = :array.get(i, arr)
    if candies > cur_val  do 
      do_distribute_candies(candies - cur_val, i + 1, max_i, cur_val + 1, :array.set(i, person_candies + cur_val, arr))
    else
      :array.set(i, person_candies + candies, arr) |> :array.to_list
    end
  end
  defp do_distribute_candies(candies, _, max_i, cur_val, arr), do: do_distribute_candies(candies, 0, max_i, cur_val, arr)
end
```