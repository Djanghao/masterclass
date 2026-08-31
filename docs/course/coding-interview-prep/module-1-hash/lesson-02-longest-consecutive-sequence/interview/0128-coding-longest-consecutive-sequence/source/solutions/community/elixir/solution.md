# Elixir, Simple Recursion

**Author:** visuelledata
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/3162839/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/3162839/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

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
  @spec longest_consecutive(nums :: [integer]) :: integer
  def longest_consecutive(nums) do
    nums 
      |> Enum.sort()
      |> count_consecutive([1])
      |> Enum.max() # find max 
  end

  defp count_consecutive(nums = [head_1, head_2 | tail], 
                         seq_lens = [seq_head | _seq_tail]) do
    new_len = 
      case (head_1 - head_2) do
        -1 -> seq_head + 1 # element is consecutive, increment
        0  -> seq_head     # element is same, do nothing
        _  -> 1            # element not consecutive, reset count
      end

    # Prepend count of consecutive elements
    count_consecutive([head_2 | tail], [new_len | seq_lens]) 
  end

  defp count_consecutive([_h | []], seq_lens), do: seq_lens # terminates when list is empty

  defp count_consecutive([], [_h | []]), do: [0] # runs if list has single number
end
```