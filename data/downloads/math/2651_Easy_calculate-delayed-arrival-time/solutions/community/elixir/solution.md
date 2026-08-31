# [Elixir] Sum Modulo by 24 | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5763323/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5763323/)

---

![image.png](./images/0.png)

# Approach
Sum the arrival and delayed time, then modulo by 24.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec find_delayed_arrival_time(arrival_time :: integer, delayed_time :: integer) :: integer
  def find_delayed_arrival_time(arrival_time, delayed_time) do
    arrival_time + delayed_time |> rem(24)
  end
end
```