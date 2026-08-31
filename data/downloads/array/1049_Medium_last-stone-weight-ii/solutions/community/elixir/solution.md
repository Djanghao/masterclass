# Elixir Solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/3892153/](https://leetcode.com/problems/last-stone-weight-ii/solutions/3892153/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 443ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 64.1MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec last_stone_weight_ii(stones :: [integer]) :: integer
  def last_stone_weight_ii(stones) do
    if Enum.count(stones) == 1 do
      stones |> hd
    else
      total = Enum.sum(stones)
      half = div(total, 2)
      dp = for _ <- 0..half, do: false
      dp = List.replace_at(dp, 0, true)
      dp =
        Enum.reduce(stones, dp, fn stone, dp ->
          Enum.reduce(half..stone, dp, fn j, dp ->
            if Enum.at(dp, j - stone) do
              List.replace_at(dp, j, true)
            else
              dp
            end
          end)
        end)
      i =
        Enum.reduce_while(half..0, 0, fn i, _ ->
          if Enum.at(dp, i) == false do
            {:cont, i}
          else
            {:halt, i}
          end
        end)
      total - 2*i
    end
  end
end

```