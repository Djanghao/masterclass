# Elixir with monotonic queue

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/3917304/](https://leetcode.com/problems/sliding-window-maximum/solutions/3917304/)

---

# Code
```
defmodule Solution do
  @spec max_sliding_window(nums :: [integer], k :: integer) :: [integer]
  def max_sliding_window(nums, k) do
    Enum.with_index(nums)
    |> Enum.map_reduce(:queue.new(), fn {x, i}, q ->
      enqueue(q, x, i)
      |> get_max(i - k)
    end)
    |> elem(0)
    |> Enum.drop(k - 1)
  end

  defp enqueue(q, x, i) do
    case :queue.peek_r(q) do
      {:value, {y, _}} when y <= x ->
        :queue.drop_r(q)
        |> enqueue(x, i)
      _ -> :queue.in({x, i}, q)
    end
  end

  defp get_max(q, drop_until) do
    case :queue.peek(q) do
      {:value, {_, j}} when j <= drop_until ->
        :queue.drop(q)
        |> get_max(drop_until)
      {:value, {y, _}} -> {y, q}
    end
  end
end
```