# Simulation of O(n), O(1) solution for other languages

**Author:** harfangk
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/3760946/](https://leetcode.com/problems/first-missing-positive/solutions/3760946/)

---

# Approach

We're searching for the smallest missing positive integer `n` in list `nums`. We can exploit the relationship between index `i` and `n`. 

If the list is `[3,2,4,1]`, it can be rearranged to `[1,2,3,4]`. `1` is at index `0`, `2` is at index `1`, and so on. Since all `n` between `1` and `4` are present, the answer is `5`.

If the list is `[3,2,0,6,1,5]`, it can be rearranged to `[1,2,3,0,5,6]`. `0` at index `3` is the only one that does not satisfy `list[x - 1] == x`, and missing number is `4`, which is `i + 1`.

If the list is `[-1,3,2,4,8,99,9,6,1,5]`, it can be rearranged to `[1,2,3,4,5,6,-1,99,8,9]`. `-1` at index `6` is the first one that does not satisfy `list[x - 1] == x`, and the first missing number is `7`, which is yet again `i + 1`.

Our goal is to rearrange the list so that any `x` that is between `1` and `length(nums)` is at the correct place. Then find the first occurence where `list[x - 1] != x`. 

Languages with mutable data structure can update the list in-place, enabling the space complexity of $$O(1)$$.  Elixir data structures are immutable, so that's impossible. Here we construct a new `Map` to store values, bringing up space complexity to $$O(n)$$.



# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec first_missing_positive(nums :: [integer]) :: integer
  def first_missing_positive(nums) do
    result = 
      nums
      # Map is needed for index-based processing
      |> list_to_map()
      |> rearrange(0)
    0..(length(nums) - 1)
    |> Enum.reduce_while(length(nums) + 1, fn i, acc -> 
      x = Map.get(result, i)
      if (x != nil and x == i + 1) do
        {:cont, acc}
      else
        {:halt, i + 1}
      end
    end)
  end

  # Base case
  def rearrange(nums, i) when map_size(nums) == i, do: nums
  def rearrange(nums, i) do
    x = Map.get(nums, i)
    # Valid x should be an integer positive and smaller than length(nums)
    if (x >= 1 and x <= map_size(nums)) do
      # If the list were sorted, 1 would be at 0, 2 would be at 1, ..., x would be at x - 1
      x_index = x - 1
      replacement = Map.get(nums, x_index)
      if (replacement != x) do
        # swap replacement and x, putting x at the correct place
        new_nums = 
          nums
          |> Map.put(x_index, x)
          |> Map.put(i, replacement)
        # element at i, which is replacement, could still be incorrect, so call it again
        rearrange(new_nums, i)
      else
        # x is at the correct place, so move on 
        rearrange(nums, i + 1)
      end
    else
      # x doesn't have a correct place on this list, so move on
      rearrange(nums, i + 1)
    end
  end

  defp list_to_map(list) do
    list
    |> Enum.with_index()
    |> Enum.into(%{}, fn {x, i} -> {i, x} end)
  end
end

```