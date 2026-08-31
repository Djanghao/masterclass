# Elixir - Bit Manipulation

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021300/](https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021300/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
The following two implementations are basically the same. The only difference is that one uses the functions in `Bitwise` while the other uses the operators. Just pick your favorite.

```elixir [Functions]
defmodule Solution do
  @spec get_maximum_xor(nums :: [integer], maximum_bit :: integer) :: [integer]
  def get_maximum_xor(nums, maximum_bit) do
    target = Bitwise.bsl(1, maximum_bit) - 1

    nums
    |> Enum.scan(&Bitwise.bxor/2)
    |> Enum.map(&Bitwise.bxor(&1, target))
    |> Enum.reverse()
  end
end
```

```elixir [Operators]
defmodule Solution do
  import Bitwise

  @spec get_maximum_xor(nums :: [integer], maximum_bit :: integer) :: [integer]
  def get_maximum_xor(nums, maximum_bit) do
    target = (1 <<< maximum_bit) - 1

    nums
    |> Enum.scan(&^^^/2)
    |> Enum.map(& &1 ^^^ target)
    |> Enum.reverse()
  end
end
```