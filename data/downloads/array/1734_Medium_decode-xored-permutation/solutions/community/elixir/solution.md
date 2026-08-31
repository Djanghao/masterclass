# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/3892410/](https://leetcode.com/problems/decode-xored-permutation/solutions/3892410/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 366ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 89.9MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec decode(encoded :: [integer]) :: [integer]
  def decode(encoded) do
    n = Enum.count(encoded) + 1
    {i, a} =
      Enum.reduce(encoded, {0, 0}, fn encode, {i, a} ->
        a = Bitwise.bxor(a, i)
        if i < n and rem(i, 2) == 1 do
          {i + 1, Bitwise.bxor(a, encode)}
        else
          {i + 1, a}
        end
      end)
    a = Enum.reduce(i..n, a, fn i, a -> Bitwise.bxor(a, i) end)
    Enum.reduce_while(encoded, {0, [a], a}, fn enc, {i, res, tail} ->
      if i >= n - 2 do
        {:halt, {i, [tail | res], tail}}
      else
        tail = Bitwise.bxor(tail, enc)
        {:cont, {i, [tail | res], tail}}
        end
    end) |> elem(1) |> Enum.reverse
  end
end

```