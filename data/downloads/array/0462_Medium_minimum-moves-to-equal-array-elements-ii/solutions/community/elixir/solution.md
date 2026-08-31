# Elixir Reduce on Median Calc

**Author:** erinawiggins
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/5467366/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/5467366/)

---

# Approach
Reduce on a median calculation

# Code
```
defmodule Solution do
  @spec min_moves2(nums :: [integer]) :: integer
  def min_moves2(nums) do
    sorted = Enum.sort(nums)

    Enum.reduce(nums, 0, fn (x, acc) ->
      acc + abs(x - Enum.at(sorted, div(length(sorted), 2)))
    end)
  end
end
```