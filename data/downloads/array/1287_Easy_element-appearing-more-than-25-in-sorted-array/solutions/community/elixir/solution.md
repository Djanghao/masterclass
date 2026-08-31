# [Elixir] || Tail-Recursion || Duplicate Array || Pattern Matching

**Author:** KettelBear
**Votes:** 0
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4392515/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4392515/)

---

# Approach

After seeing a lot of other Elixir solutions, I felt as though my solution was different enough to warrent a post. I saw a lot of conversion to other data structures, and, to me, that seems like a lot of extra work.

Instead, I'm just going to pattern match in the arrays with one array one quarter ahead of the other.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec find_special_integer(arr :: [integer]) :: integer
  def find_special_integer([only]), do: only
  def find_special_integer(arr) do
    win_size = length(arr) |> div(4)

    arr |> Enum.drop(win_size) |> find_int(arr)
  end

  defp find_int([a | _], [a | _]), do: a
  defp find_int([_ | rest], [_ | remaining]) do
    find_int(rest, remaining)
  end
end
```