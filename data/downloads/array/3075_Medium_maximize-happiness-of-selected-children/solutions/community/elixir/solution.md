# Elixir - Simple - n log(n)

**Author:** Nono31
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132525/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132525/)

---


# Complexity
- Time complexity:
$$O(n log(n))$$

- Space complexity:
$$O(1)$$

# Code
```
defmodule Solution do
  @spec maximum_happiness_sum(happiness :: [integer], k :: integer) :: integer
  def maximum_happiness_sum(happiness, k) do
    happiness
    |> Enum.sort(:desc)
    |> Enum.with_index()
    |> Enum.reduce_while(0, fn {h, idx}, sum ->
      if h - idx > 0 and idx < k do
        {:cont, sum + h - idx}
      else
        {:halt, sum}
      end
    end)
  end
end
```