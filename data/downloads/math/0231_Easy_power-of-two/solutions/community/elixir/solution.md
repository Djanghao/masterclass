# Elixir, O(1), bitwise and

**Author:** Lykos_unleashed
**Votes:** 1
**Link:** [https://leetcode.com/problems/power-of-two/solutions/4173554/](https://leetcode.com/problems/power-of-two/solutions/4173554/)

---

# Approach
A power of 2 will have the first bit as 1 and the rest of the bits as 0. Using this information, you have to check if the number without the first bit is zero. If it is, then the number is a power of 2. A bitwise and operation between the number and number - 1 will give you 0 if the number is a power of 2.

16         - 1000
16 - 1 = 15- 0111
16 band 15 - 0000 == 0, hence 16 is a power of 2

13         - 1101
13 - 1 = 12- 1100
13 band 12 - 1100 != 0, hence 13 is not a power of 2

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_power_of_two(n :: integer) :: boolean
  def is_power_of_two(0), do: false
  def is_power_of_two(n), do: Bitwise.band(n, n-1) == 0
end
```