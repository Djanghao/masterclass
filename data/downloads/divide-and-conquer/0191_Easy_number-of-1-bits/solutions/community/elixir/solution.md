# This may be not the best way to do it

**Author:** meoooh
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/5189170/](https://leetcode.com/problems/number-of-1-bits/solutions/5189170/)

---

# Code
```
defmodule Solution do
  @spec hamming_weight(n :: integer) :: integer
  def hamming_weight(n) do
    Integer.to_string(n, 2) |> String.graphemes |> Enum.count(& &1 != "0")
  end
end
```