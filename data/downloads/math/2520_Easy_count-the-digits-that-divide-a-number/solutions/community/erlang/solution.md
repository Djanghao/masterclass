# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/5492749/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/5492749/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Erlang []
-spec count_digits(Num :: integer()) -> integer().
count_digits(Num) -> helper(Num, Num, 0).

-spec helper(Num :: integer(), N :: integer(), Acc :: integer()) -> integer().
helper(_, 0, Acc) -> Acc;
helper(Num, N, Acc) when Num rem (N rem 10) =:= 0 -> helper(Num, N div 10, Acc + 1);
helper(Num, N, Acc) -> helper(Num, N div 10, Acc).
```
``` Elixir []
defmodule Solution do
  @spec count_digits(num :: integer) :: integer
  def count_digits(num), do: helper(num, num, 0)

  @spec helper(num :: integer, n :: integer, acc :: integer) :: integer
  defp helper(_, 0, acc), do: acc
  defp helper(num, n, acc) when rem(num, rem(n, 10)) === 0, do: helper(num, div(n, 10), acc + 1)
  defp helper(num, n, acc), do: helper(num, div(n, 10), acc)  
end
```
``` rust []
impl Solution {
    pub fn count_digits(num: i32) -> i32 {
        let (mut n, mut count) = (num, 0);
        while n != 0 {
            count += (num % (n % 10) == 0) as i32; 
            n /= 10;
        }
        count
    }
}
```