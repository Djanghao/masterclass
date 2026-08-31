# [Elixir] Simple solution with Enum.reduce/3

**Author:** hyungzin
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5450351/](https://leetcode.com/problems/average-waiting-time/solutions/5450351/)

---

# Intuition
To solve this problem, we need to track the chef's available time and accumulate the waiting time for each customer

# Approach
sum = The time when the previous cooking ends, initially 0
wait = Total waiting time for all customers, initially 0

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec average_waiting_time(customers :: [[integer]]) :: float
  def average_waiting_time(customers) do
    customers
    |> Enum.reduce({0, 0}, &sum_and_wait/2)
    |> (fn {_, wait} -> wait / length(customers) end).()
  end

  defp sum_and_wait([arrival, time], {sum, wait}) do
    chef_available = max(sum, arrival)
    {chef_available + time, wait + chef_available + time - arrival}
  end
end
```