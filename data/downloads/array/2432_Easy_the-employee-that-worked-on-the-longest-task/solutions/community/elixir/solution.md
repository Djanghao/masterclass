# Elixir, one pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/4685515/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/4685515/)

---

# Complexity
- Time complexity:
O(n) where n is the length of logs

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec hardest_worker(n :: integer, logs :: [[integer]]) :: integer
  def hardest_worker(_n, logs) do
    for [id, time] <- logs, reduce: {0, nil, 0} do
      {prev_t, res_id, max_time} -> cur_time = time - prev_t
                                    cond do
                                      cur_time > max_time -> {time, id, cur_time}
                                      cur_time == max_time -> {time, min(res_id, id), cur_time}
                                      true -> {time, res_id, max_time}
                                    end
    end |> elem(1)
  end
end
```