# Simple Elixir Solution

**Author:** lreid295
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4995101/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4995101/)

---

# Approach
Remove sandwiches and students until the top sandwhich cannot be taken or until all the students have taken a sandwich.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec count_students(students :: [integer], sandwiches :: [integer]) :: integer
  def count_students(students, sandwiches) do
    do_count(students, sandwiches)
  end

  defp do_count([], sa), do: 0
  defp do_count(st, sa) do
    [h_st | t_st] = st
    [h_sa | t_sa] = sa
    cond do
      h_st == h_sa -> do_count(t_st, t_sa)
      h_sa not in st -> length(st)
      true -> do_count(t_st ++ [h_st], sa)
    end
  end
end
```