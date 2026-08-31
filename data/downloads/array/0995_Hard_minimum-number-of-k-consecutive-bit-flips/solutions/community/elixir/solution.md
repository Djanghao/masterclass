# Elixir - Greedy & Bit Manipulation

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359837/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359837/)

---

# Code
```Elixir
defmodule Solution do
  import Integer, only: [is_odd: 1]
  import Bitwise

  @spec min_k_bit_flips(nums :: [integer], k :: integer) :: integer
  def min_k_bit_flips(nums, k) do
    # k bits of 1
    mask = (1 <<< k) - 1

    # we prepend a 1 to nums
    # so that we won't lose leading 0's
    # when we convert the binary list to an integer
    n = Integer.undigits([1 | nums], 2)

    # recursively solve the problem
    # by checking least significant bits first
    flips(n, mask, 0)
  end

  # if n is 1 (the prepended bit),
  # then all the other bits are checked,
  # so we are done.
  defp flips(1, _mask, count), do: count

  # if n is odd (i.e. the lowest bit is 1),
  # we don't need to flip that bit,
  # so we right-shift n by 1
  # then recursively find the solution.
  defp flips(n, mask, count) when is_odd(n) do
    flips(n >>> 1, mask, count)
  end

  # if n is even (i.e. the lowest bit is 0) and is less than the mask,
  # it means there are not enough 0's to flip at once
  # to make n all 1's,
  # so there's no solution to this situation.
  defp flips(n, mask, _count) when n < mask, do: -1

  # if n is even and is larger than the mask,
  # then we flip the lowest k bits
  # and recursively find the solution.
  defp flips(n, mask, count) do
    flips(n ^^^ mask, mask, count + 1)
  end
end
```

**UPDATE**

We can eagerly remove all the trailing 1's in one go by replacing the following piece of code

```elixir
  defp flips(n, mask, count) when is_odd(n) do
    flips(n >>> 1, mask, count)
  end
```

with

```elixir
  defp flips(n, mask, count) when is_odd(n) do
    d = bxor(n, n + 1)
    d = bxor(d, d >>> 1)
    flips(div(n, d), mask, count)
  end
```

and the end-recursion clause needs to be changed to

```elixir
  defp flips(0, _mask, count), do: count
```