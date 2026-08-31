# Elixir solution use Enum.zip() and Enum.reduce_while().

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4305808/](https://leetcode.com/problems/make-three-strings-equal/solutions/4305808/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 447ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 64.8MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec find_minimum_operations(s1 :: String.t, s2 :: String.t, s3 :: String.t) :: integer
  def find_minimum_operations(s1, s2, s3) do
    min_length = min(min(String.length(s1), String.length(s2)), String.length(s3))
    total_length = String.length(s1) + String.length(s2) + String.length(s3)
    if String.at(s1, 0) != String.at(s2, 0) or String.at(s2, 0) != String.at(s3, 0) or String.at(s3, 0) != String.at(s1, 0) do
      -1
    else
      Enum.zip([String.to_charlist(s1), String.to_charlist(s2), String.to_charlist(s3)]) |>
        Enum.reduce_while({0, total_length}, fn {ch1, ch2, ch3}, {i, total_length} ->
          cond do
            i >= min_length ->
              {:halt, {i + 1, total_length}}
            ch1 == ch2 and ch2 == ch3 and ch3 == ch1 ->
              {:cont, {i + 1, total_length - 3}}
            true ->
              {:halt, {i + 1, total_length}}
          end
        end) |> elem(1)
    end
  end
end

```