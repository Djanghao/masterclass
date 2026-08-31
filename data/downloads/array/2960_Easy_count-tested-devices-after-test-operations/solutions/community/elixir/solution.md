# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4391482/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4391482/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 270ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 64.34MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec count_tested_devices(battery_percentages :: [integer]) :: integer
  def count_tested_devices(battery_percentages) do
    Enum.reduce(battery_percentages, 0, fn target, ans ->
      if target > ans do; ans + 1 else ans end
    end)
  end
end
```