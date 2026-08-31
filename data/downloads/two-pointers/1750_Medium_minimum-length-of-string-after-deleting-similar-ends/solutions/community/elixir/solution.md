# An Elixir Solution

**Author:** lreid295
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4829263/](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4829263/)

---

# Intuition
Recursivley remove start and end sequences of repeated characters.

# Approach
A cond case matches on single character lists. Another case matches if the string is the same reversed so it can save time by not entering the loop.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g.  -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  require Integer 
  @spec minimum_length(s :: String.t) :: integer
  def minimum_length(s) do
    cond do
      String.length(s) == 1 ->
        1

      s == String.reverse(s) and Integer.is_even(String.length(s)) ->
        0

      true ->
        s
        |> String.graphemes()
        |> recurs()
        |> length()
    end
  end

  defp recurs(s) when length(s) == 1, do: s

  defp recurs(s) do
    to_delete = Enum.at(s, 0)

    if Enum.at(s, length(s) - 1) == to_delete and !Enum.empty?(s) do
      s =
        s
        |> Enum.drop_while(&(&1 == to_delete))
        |> Enum.reverse()
        |> Enum.drop_while(&(&1 == to_delete))

      recurs(s)
    else
      s
    end
  end
end
```