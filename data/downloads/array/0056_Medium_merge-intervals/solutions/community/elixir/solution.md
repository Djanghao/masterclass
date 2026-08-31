# Just reduce it

**Author:** macoafi
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/5643537/](https://leetcode.com/problems/merge-intervals/solutions/5643537/)

---

# Intuition
This was an obvious job for reduce, if starting with a sorted list. 

# Approach
Elixir's default `Enum.sort/1` will sort lists of lists by their first element, then their next element, etc., so `Enum.sort_by/2` was unnecessary.

I used Elixir's pattern matching to establish what would be the base case if this was recursive, then started thinking about which comparisons needed to be made. At first, I was using a tuple to store `{current_possibility, accumulator}`, but then I realized I could use our good friends `[head | tail]` and keep updating that `head` as it expanded. That simplified the code.

# Complexity
- Time complexity:
$$O(n log(n))$$

- Space complexity:
$$O(n)$$ 

# Code
```
defmodule Solution do
  @spec merge(intervals :: [[integer]]) :: [[integer]]
  def merge(intervals) do
    Enum.sort(intervals)
    |> Enum.reduce([], fn   
        elem, [] ->
            [elem]
        [new_start, _new_end] = elem, [[_start, old_end] | _tail] = acc when new_start > old_end ->
            [elem | acc]
        [_new_start, new_end], [[start, old_end] | acc] when new_end > old_end ->
            [[start, new_end] | acc]
        _elem, acc ->
            acc
    end)
    |> Enum.reverse
  end
end
```