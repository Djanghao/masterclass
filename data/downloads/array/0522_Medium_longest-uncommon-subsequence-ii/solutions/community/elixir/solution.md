# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/4187358/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/4187358/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 285ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 63.02MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec find_lu_slength(strs :: [String.t]) :: integer
  def find_lu_slength(strs) do
    len_strs = Enum.count(strs)
    Enum.reduce(0..len_strs - 1, -1, fn i, max_len ->
      count =
        Enum.reduce_while(0..len_strs - 1, 0, fn j, count ->
          if i != j do
            if not is_sub_sequence(Enum.at(strs, i), Enum.at(strs, j)) do
              {:cont, count + 1}
            else
              {:halt, count}
            end
          else
            {:cont, count}
          end
        end)
      if count == len_strs - 1 do
        max(max_len, String.length(Enum.at(strs, i)))
      else
        max_len
      end
    end)
  end

  @spec is_sub_sequence(a :: String.t, b :: String.t) :: bool
  def is_sub_sequence(a, b) do
    i =
      Enum.reduce(0..String.length(b)-1, 0, fn j, i ->
        if String.at(a, i) == String.at(b, j) do
          i + 1
        else
          i
        end
      end)
    i == String.length(a)
  end
end

```