# O(1) soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-digits/solutions/5489847/](https://leetcode.com/problems/add-digits/solutions/5489847/)

---

# Complexity
- Time complexity:$$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Erlang []
-spec add_digits(N :: integer()) -> integer().
add_digits(0) -> 0;
add_digits(N) when N rem 9 =:= 0 -> 9;
add_digits(N) -> N rem 9.
```
``` Elixir []
defmodule Solution do
  @spec add_digits(n :: integer) :: integer
  def add_digits(0), do: 0
  def add_digits(n) when rem(n, 9) === 0, do: 9
  def add_digits(n), do: rem(n, 9)
end
```