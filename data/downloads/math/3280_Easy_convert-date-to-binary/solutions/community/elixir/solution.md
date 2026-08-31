# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/5783358/](https://leetcode.com/problems/convert-date-to-binary/solutions/5783358/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 5ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.0MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec convert_date_to_binary(date :: String.t) :: String.t
  def convert_date_to_binary(date) do
    String.split(date, "-")
    |> Enum.reduce([], fn fld, ans ->
        [Integer.to_charlist(String.to_integer(fld), 2)] ++ ans
      end)
    |> Enum.reverse()
    |> Enum.join("-")
  end
end

```