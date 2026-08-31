# Elixir solutions.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4604539/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4604539/)

---

# Code

355ms
```
defmodule Solution do
  @spec minimum_cost(nums :: [integer]) :: integer
  def minimum_cost(nums) do
    tl_nums = Enum.sort(nums |> tl)
    (nums |> hd) + (tl_nums |> hd) + (tl_nums |> tl |> hd)
  end
end

```

396ms
```
defmodule Solution do
  @spec minimum_cost(nums :: [integer]) :: integer
  def minimum_cost(nums) do
    m_nums = Enum.reduce(nums, {0, Map.new()}, fn num, {i, m_nums} ->
      {i + 1, Map.put(m_nums, i, num)}
    end) |> elem(1)
    n = Enum.count(nums)
    Enum.reduce(1..n-2, 150, fn i, ans ->
      Enum.reduce(1..n-i-1, ans, fn j, ans ->
        min(ans, m_nums[0] + m_nums[i] + m_nums[i + j])
      end)
    end)
  end
end
```
