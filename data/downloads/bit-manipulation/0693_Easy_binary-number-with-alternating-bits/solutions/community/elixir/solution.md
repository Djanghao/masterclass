# Elixir, bit wise manipulation

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4242068/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4242068/)

---

# Approach
5 - 101
bsr(5,1) - 010
bxor(101, 010) = 111
band(111, 111+1) = band(111, 1000) == 0

9 - 1001
bsr(9,1) - 0100
bxor(1001, 0100) = 1101
band(1101, 1101 + 1) = band(1101, 1110) == 1100 != 0

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec has_alternating_bits(n :: integer) :: boolean
  def has_alternating_bits(n) do 
    x = Bitwise.bsr(n,1) |> Bitwise.bxor(n)
    Bitwise.band(x, x+1) == 0
  end
end
```