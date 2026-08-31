# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/4368424/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/4368424/)

---

# Approach
Iterate both start times and end times, check and update the count if the queried time falls between the start and end times of the student.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec busy_student(start_time :: [integer], end_time :: [integer], query_time :: integer) :: integer
  def busy_student(start_time, end_time, query_time), do: do_busy_student(start_time, end_time, query_time, 0)

  defp do_busy_student([s | s_tl], [e | e_tl], query_time, count) do
    count = if query_time >= s and query_time <= e, do: count + 1, else: count
    do_busy_student(s_tl, e_tl, query_time, count)
  end
  defp do_busy_student(_, _, _, count), do: count
end
```