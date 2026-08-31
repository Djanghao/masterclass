# Elixir, bitwise operation

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/4307926/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/4307926/)

---

# Approach
Bitwise.bxor between two numbers results in a 0 bit if the two input bits are the same and a 1 bit if the two input bits are different. Hence a bxor of the number with a mask of same number of 1 bits will return the number's complement.

101 - 5
111 - mask
010 - xor result

To create a mask you need to know the number of bits of the input number which can be obtained by floor(log\u2082(num) + 1). Then the number 1 can be left shifted the same number of times and subtracted by 1 to get the mask.

number of bits in number 5 - 3
the number 1 left shifted three places gives you - 1000
subtracting one from the above, you get - 111 which is the mask required

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  import Bitwise
  
  @spec bitwise_complement(n :: integer) :: integer
  def bitwise_complement(0), do: 1
  def bitwise_complement(n), do: bxor(n, get_1_mask(n))

  defp get_1_mask(n), do: bsl(1, get_no_bits(n)) - 1

  defp get_no_bits(n), do: floor(:math.log2(n) + 1)
end
```