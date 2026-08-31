# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4605270/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4605270/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 284ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.53MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec minimum_pushes(word :: String.t) :: integer
  def minimum_pushes(word) do
    n = String.length(word)
    quotient = div(n, 8)
    cond do
      quotient == 0 -> rem(n, 8)
      quotient == 1 -> 8 + rem(n, 8)*2
      true ->
        {row, ans} = Enum.reduce(quotient..1, {1, 0}, fn _, {row, ans} ->
          {row + 1, ans + row*8}
        end)
        ans + rem(n, 8)*row
    end
  end
end

```