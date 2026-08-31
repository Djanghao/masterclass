# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/4241454/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/4241454/)

---

# Approach
Uses tail call recursion to iterate and comparing each number with the previous number and updating the max count after each sequence.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_length_of_lcis(nums :: [integer]) :: integer
  def find_length_of_lcis(nums) do
    for x <- tl(nums), reduce: {hd(nums), 1, 0} do
      {prev, cur_len, max_len} ->
        if x > prev, do: {x, cur_len + 1, max_len},
        else: {x, 1, max(max_len, cur_len)} 
    end |> then(fn {_, cur_len, max_len} -> max(cur_len, max_len) end)
  end
end
```