# O(1) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number/solutions/5492212/](https://leetcode.com/problems/ugly-number/solutions/5492212/)

---

# Complexity
- Time complexity:$$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Erlang []
-spec is_ugly(N :: integer()) -> boolean().
is_ugly(N) when N =< 0 -> false;
is_ugly(1) -> true;
is_ugly(N) when N rem 2 =:= 0 -> is_ugly(N div 2);
is_ugly(N) when N rem 3 =:= 0 -> is_ugly(N div 3);
is_ugly(N) when N rem 5 =:= 0 -> is_ugly(N div 5);
is_ugly(_) -> false.
```
```Elixir []
defmodule Solution do
  @spec is_ugly(n :: integer) :: boolean
  def is_ugly(n) when n <= 0, do: false
  def is_ugly(1), do: true
  def is_ugly(n) when rem(n, 2) === 0, do: is_ugly(div(n, 2))
  def is_ugly(n) when rem(n, 3) === 0, do: is_ugly(div(n, 3))
  def is_ugly(n) when rem(n, 5) === 0, do: is_ugly(div(n, 5))
  def is_ugly(_), do: false
end
```
``` rust []
impl Solution {
    pub fn is_ugly(mut n: i32) -> bool {
        if n == 0 {return false;}
        for i in [2, 3, 5]{while n % i == 0{n /= i;}}
        n == 1
    }
}
```

