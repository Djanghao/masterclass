# Elixir, binary comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/4895804/](https://leetcode.com/problems/to-lower-case/solutions/4895804/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec to_lower_case(s :: String.t) :: String.t

  @diff ?a - ?A

  def to_lower_case(s) do
    for <<x <- s>>, into: <<>> do
      if x >= ?A && x <= ?Z, do: <<x + @diff>>, else: <<x>>
    end
  end
end
```