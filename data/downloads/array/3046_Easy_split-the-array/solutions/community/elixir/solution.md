# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4779921/](https://leetcode.com/problems/split-the-array/solutions/4779921/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 316ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.07MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
- solution1 use Enum.reduce_while()

```
# 316ms - 336ms
defmodule Solution do
  @spec is_possible_to_split(nums :: [integer]) :: boolean
  def is_possible_to_split(nums) do
    Enum.reduce_while(nums, {%{}, false}, fn num, {cnts, _ans} ->
      cnts = Map.put(cnts, num, Map.get(cnts, num, 0) + 1)
      if cnts[num] == 3 do
        {:halt, {cnts, false}}
      else
        {:cont, {cnts, true}}
      end
    end)
    |> elem(1)
  end
end

```

- solution2 use Enum.all?() solution.
```
  # 337ms - 346ms
  @spec is_possible_to_split2(nums :: [integer]) :: boolean
  def is_possible_to_split2(nums) do
    cnts = Enum.reduce(nums, %{}, fn x, acc -> Map.update(acc, x, 1, &(&1 + 1)) end)
    Enum.all?(Map.values(cnts), fn x -> x < 3 end)
  end
```
