# [Elixir] Greedy approach | Beat 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3588689/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3588689/)

---

# Approach
1. Retrieve the desired element from each lists and put it to a new list along with its corresponding index.
2. Sort the list of indexed elements in descending order.
3. Extract the indices from the sorted list and store them in a new list.
4. Loop over the new index-contained list and retrieve the corresponding elements from the original ```score``` list by the index.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
defmodule Solution do
  @spec sort_the_students(score :: [[integer]], k :: integer) :: [[integer]]
  def sort_the_students(score, k) do
    score
    |> Enum.reduce([], fn (el, acc) -> 
      acc = acc ++ [Enum.at(el, k)]
    end)
    |> Enum.with_index
    |> Enum.sort(fn ({x, _}, {y, _}) -> x > y end)
    |> Enum.reduce([], fn ({el, i}, acc) -> 
      acc = acc ++ [Enum.at(score, i)]
    end)
  end
end
```