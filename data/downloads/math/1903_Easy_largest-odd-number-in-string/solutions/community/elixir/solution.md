# Elixir - Regular Expression

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372598/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372598/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
defmodule Solution do
  @spec largest_odd_number(num :: String.t) :: String.t
  def largest_odd_number(num) do
    ~r/^.*[13579]/
    |> Regex.run(num)
    |> List.wrap()
    |> List.first("")
  end
end
```