# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-four/solutions/5320579/](https://leetcode.com/problems/power-of-four/solutions/5320579/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public boolean isPowerOfFour(final int n) {
        return inner(n, 0);
    }

    private static boolean inner(final Integer n, final Integer r){
        if (r != 0) return false;
        else return switch (n.compareTo(1)){
                case -1 -> false;
                case 0  -> true;
                default -> inner(n / 4, n % 4);
            };
    }
}
```
```python []
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        def inner(n: int, r: int) -> bool:
            match (n, r):
                case (_, r) if r != 0:
                    return False
                case (n, _) if n < 1:
                    return False
                case (1, 0):
                    return True
                case _:
                    return inner(n // 4, n % 4)
        return inner(n, 0)
```
```rust []
impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        fn inner(n: i32, r: i32) -> bool {
            match (n, r) {
                (_, r) if r != 0 => false,
                (n, _) if n < 1 => false,
                (1, 0) => true,
                _ => inner(n / 4, n % 4),
            }
        }
        inner(n, 0)
    }
}
```
``` Erlang []
-spec is_power_of_four(N :: integer()) -> boolean().
is_power_of_four(N) -> inner(N, 0).

-spec inner(N :: integer(), R :: integer()) -> boolean().
inner(_, R) when R =/= 0 -> false;
inner(N, _) when N < 1 -> false;
inner(1, 0) -> true;
inner(N, _) -> inner(N div 4, N rem 4).
```
``` Elixir []
defmodule Solution do
  @spec is_power_of_four(n :: integer) :: boolean
  def is_power_of_four(n), do: inner(n, 0)

  @spec inner(n :: integer(), r :: integer()) :: boolean
  defp inner(_, r) when r != 0, do: false
  defp inner(n, _) when n < 1, do: false
  defp inner(1, 0), do: true
  defp inner(n, _), do: inner(div(n, 4), rem(n, 4))
  
end
```
