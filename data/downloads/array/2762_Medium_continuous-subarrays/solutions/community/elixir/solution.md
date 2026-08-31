# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/5238518/](https://leetcode.com/problems/continuous-subarrays/solutions/5238518/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 1202ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 218.99MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec continuous_subarrays(nums :: [integer]) :: integer
  def continuous_subarrays(nums) do
    Enum.reduce(nums, {0, 0, %{}, 0}, fn num, {i, j, dic, ans} ->
      {i, dic} =
        Enum.reduce(Map.keys(dic), {i, dic}, fn k, {i, dic} ->
          if abs(k - num) > 2 do
            {max(i, dic[k] + 1), Map.delete(dic, k)}
          else
            {i, dic}
          end
        end)
      {i, j + 1, Map.put(dic, num, j), ans + (j - i + 1)}
    end)
    |> elem(3)
  end
end

```