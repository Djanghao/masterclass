# Elixir - O(1)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5556377/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5556377/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec number_of_child(n :: integer, k :: integer) :: integer
  def number_of_child(n, k) do
    no_of_rounds_completed = div(k, n - 1)
    remaining_seconds = rem(k, n - 1)
    if rem(no_of_rounds_completed, 2) == 0,
    do: remaining_seconds,
    else: n - 1 - remaining_seconds
  end
end
```