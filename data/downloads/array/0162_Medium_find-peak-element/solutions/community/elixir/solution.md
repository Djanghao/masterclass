# O(n) Elixir

**Author:** frkbmr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/4480491/](https://leetcode.com/problems/find-peak-element/solutions/4480491/)

---

# Intuition
Chunks into 3 sliding window, check the middle, and then get the index. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec find_peak_element(nums :: [integer]) :: integer
  def find_peak_element(nums) do
    # easiest way, iterate through, checking if each value is its peak, keep track of the previous one, if it's bigger, return it, otherwise continue to the end until you find one 
    # we know the first and last can't be peaks, move with a sliding window of 3
    nums = [-21474836490 | nums] 
    nums = List.insert_at(nums, length(nums), -21474836490)
    nums |> Stream.with_index |> Stream.chunk_every(3, 1, :discard) 
    |> Enum.find([{}, {-1, 0}], fn chunk -> 
        # is the middle chunk member greater? 
        [{first, _}, {second, idx}, {third, _}] = chunk
        first < second and third < second 
    end)
    |> Enum.at(1)
    |> elem(1) |> Kernel.-(1)
  end
end
```