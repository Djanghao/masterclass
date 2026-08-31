# Elixir, Bitwise.bxor

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/4428382/](https://leetcode.com/problems/decode-xored-array/solutions/4428382/)

---

# Approach
Iterate the numbers in the encoded, perform Bitwise.bxor with the previous element and accumulate the result.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec decode(encoded :: [integer], first :: integer) :: [integer]
  def decode(encoded, first), do: do_decode(encoded, first, [first])

  defp do_decode([hd | tl], prev, acc) do 
    val = Bitwise.bxor(hd, prev)
    do_decode(tl, val, [val | acc])
  end
  defp do_decode(_, _, acc), do: Enum.reverse(acc)
end
```