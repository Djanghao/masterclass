# Elixir | One liner

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5875319/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5875319/)

---

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec check_two_chessboards(coordinate1 :: String.t(), coordinate2 :: String.t()) :: boolean
  def check_two_chessboards(c1, c2), do: rem(elem({String.to_charlist(c1), String.to_charlist(c2)}, 0) |> Enum.reduce(0, &(&1 + &2)), 2) == rem(elem({String.to_charlist(c1), String.to_charlist(c2)}, 1) |> Enum.reduce(0, &(&1 + &2)), 2)
end

```