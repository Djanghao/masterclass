# Elixir, math

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/4341561/](https://leetcode.com/problems/maximum-69-number/solutions/4341561/)

---

# Approach
Find the position of the most significant 6 in the number. Add 3 * (10**postition) to the number.

e.g. 9969
The most significant 6 is at position 1 in the number.
9969 + 3 * (10**1)
9969 + 3 * 10
9969 + 30 = 9999

6969
The most significant 6 is at position 3 in the number.
6969 + 3 * (10**3)
6969 + 3 * 1000
6969 + 3000 = 9969

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  def maximum69_number (num) do 
    most_significant_6_pos = get_most_significant_6_position(num, nil, 0)
    if most_significant_6_pos == nil, do: num, else: num + 3 * (10**most_significant_6_pos)
  end

  defp get_most_significant_6_position(num, most_sig_6_pos, cur_pos) when num > 0 do
    digit = rem(num, 10)
    most_sig_6_pos = if digit == 6, do: cur_pos, else: most_sig_6_pos
    get_most_significant_6_position(div(num, 10), most_sig_6_pos, cur_pos + 1)
  end
  defp get_most_significant_6_position(_, most_significant_6_position, _), do: most_significant_6_position
end
```