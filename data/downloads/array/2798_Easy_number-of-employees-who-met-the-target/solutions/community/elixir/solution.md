# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5104067/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5104067/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec number_of_employees_who_met_target(hours :: [integer], target :: integer) :: integer
  def number_of_employees_who_met_target(hours, target), do: Enum.count(hours, &(&1 >= target))
end
```