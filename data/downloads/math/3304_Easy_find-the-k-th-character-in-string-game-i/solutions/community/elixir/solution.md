# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5847529/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5847529/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 0ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.06MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec kth_character(k :: integer) :: char
  def kth_character(k) do
    ?a + (for(<<bit::1 <- :binary.encode_unsigned(k - 1)>>, do: bit) |> Enum.sum)
  end
end

```