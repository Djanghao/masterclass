# Elixir, one-liner

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/4690270/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/4690270/)

---

# Complexity
- Time complexity:
O(1)
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec have_conflict(event1 :: [String.t], event2 :: [String.t]) :: boolean
  def have_conflict([e1_s, e1_e], [e2_s, e2_e]), do: max(e1_s, e2_s) <= min(e1_e, e2_e)
end
```