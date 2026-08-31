# [Rust / Elixir] simple DP solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4024480/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4024480/)

---

# Intuition
When we have the answer for `n - 1`, we can calculate the answer for `n` as follows:
Consider the earliest pickup. It will be `Pi` where `1 <= i <= n`.
Then the position of the corresponding `Di` can be in any spot among the other `2n - 1` positions.
Finally the number of possible orders of the remaining `2n - 2` positions is the answer of `n - 1`.

# Code
```Rust []
impl Solution {
    pub fn count_orders(n: i32) -> i32 {
        let mut dp = 1;
        for i in 2..=n {
            dp = (dp * (i * (2 * i - 1)) as i64) % 1_000_000_007;
        }
        dp as i32
    }
}
```
```Elixir []
defmodule Solution do
  @spec count_orders(n :: integer) :: integer
  def count_orders(n) do
    Enum.reduce(2..n//1, 1, fn i, acc ->
      (acc * i * (2 * i - 1))
      |> rem(1_000_000_007)
    end)
  end
end
```