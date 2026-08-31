# Elixir, uses bitstring pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/4194865/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/4194865/)

---

# Approach
Elixir already uses 2's complement to store the integer internally. Hence all you have to do is extract every 4 bit from the binary representation with each four bits representing a hexadecimal digit. You can also extract every 4 digits by performing a binary_and with the mask 0b1111 and left shiting it by 4 to get the previous digit.

```
26 - 0b11010
26 in 32 bits = 0000_0000_0000_0000_0000_0000_0001_1010
                  0    0    0    0    0    0    1    a

-26 in 32 bits = invert the above bits and add 1
                1111_1111_1111_1111_1111_1111_1110_0110
                  f    f    f    f    f    f    e    6
```

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(log(n))

# Code
```
defmodule Solution do
  @spec to_hex(num :: integer) :: String.t
  def to_hex(0), do: "0"
  def to_hex(num) when num > 0, do: do_to_hex(<<num::32>>, "")
  def to_hex(num), do: do_to_hex(<<num::32>>,"") |> String.pad_leading(8,"f")

  defp do_to_hex(<<>>, hex), do: String.trim_leading(hex, "0")
  defp do_to_hex(<<d::4,rest::bits>>, hex), do: do_to_hex(rest, hex <> hex_digit(d))

  defp hex_digit(n) when n < 10, do: "#{n}"
  defp hex_digit(n), do: <<n + 87>>
end
```