# Elixir, checks first and last element

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4384630/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4384630/)

---

# Approach
If the first sector is less than or equal to the last sector, then the answer is first sector .. last sector.

n = 7, [1, 4, 5, 3]
       **1 2 3** 4
       5
       6 7 **1 2 3**
Ans: [1, 2, 3]

If the first sector is greater than the last sector, then the answer is 1 .. last ++ first..total_sectors

n = 7, [7, 4, 5, 1, 2]
       **7** **1 2** 3 4
       5
       6 **7 1**
       **2**
Ans: [1, 2, 7]

# Complexity
- Time complexity:
O(r) where r is the number of rounds

- Space complexity:
O(n) where n is the total number of sectors

# Code
```
defmodule Solution do
  @spec most_visited(n :: integer, rounds :: [integer]) :: [integer]
  def most_visited(n, [first | tl]) do
    last = List.last(tl)
    cond do
      first <= last -> first .. last |> Enum.to_list
      true -> (1 .. last |> Enum.to_list) ++ (first .. n |> Enum.to_list) 
    end
  end
end
```