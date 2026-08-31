# Elixir - Simple solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4311657/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4311657/)

---

# Intuition
See the official hint.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```elixir
defmodule Solution do
  import Bitwise

  @modulus 1_000_000_007

  @spec count_nice_pairs(nums :: [integer]) :: integer
  def count_nice_pairs(nums) do
    nums
    |> Stream.map(& &1 - rev(&1))
    |> Enum.frequencies()
    |> Stream.map(&elem(&1, 1))
    |> Stream.filter(& &1 > 1)
    |> Stream.map(& &1 * &1 - &1)
    |> Stream.map(& &1 >>> 1)
    |> Stream.map(&rem(&1, @modulus))
    |> Enum.reduce(0, &rem(&1 + &2, @modulus))
  end

  defp rev(n) do
    n
    |> Integer.digits()
    |> Enum.reverse()
    |> Integer.undigits()
  end
end
```