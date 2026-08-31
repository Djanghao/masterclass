# Elixir, find overlap

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/4679827/](https://leetcode.com/problems/count-days-spent-together/solutions/4679827/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_days_together(arrive_alice :: String.t, leave_alice :: String.t, arrive_bob :: String.t, leave_bob :: String.t) :: integer
  def count_days_together(arrive_alice, leave_alice, arrive_bob, leave_bob) do
    alice_s = get_day_of_year(arrive_alice)
    alice_e = get_day_of_year(leave_alice)
    bob_s = get_day_of_year(arrive_bob)
    bob_e = get_day_of_year(leave_bob)
    overlap_s = max(alice_s, bob_s)
    overlap_e = min(alice_e, bob_e)
    if overlap_s > overlap_e, do: 0, else: (overlap_e - overlap_s) + 1
  end

  defp get_day_of_year(<<m1, m2, _, d1, d2>>) do
    month = (m1 - ?0) * 10 + (m2 - ?0)
    date = (d1 - ?0) * 10 + (d2 - ?0)
    cumulative_days = {0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334}
    elem(cumulative_days, month - 1) + date
  end
end
```