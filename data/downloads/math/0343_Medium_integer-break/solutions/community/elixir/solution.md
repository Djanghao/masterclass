# [Rust / Elixir] Math solution

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/integer-break/solutions/4135861/](https://leetcode.com/problems/integer-break/solutions/4135861/)

---

# Intuition
3s are good by trying and observing the answers for a few cases.
# Approach
When n < 4, the only way is to break n into [n - 1, 1].
Otherwise, prioritize breaking into 3s until remaining <= 4.

# Complexity
- Time complexity: $$O(log(n))$$ 

- Space complexity: $$O(1)$$

# Code
```Rust []
impl Solution {
    pub fn integer_break(n: i32) -> i32 {
        if n < 4 {
            n - 1
        }
        else {
            3i32.pow((n as u32 - 2) / 3) * ((n - 2) % 3 + 2)
        }
    }
}
```
```Elixir []
defmodule Solution do
  @spec integer_break(n :: integer) :: integer
  def integer_break(n) when n < 4, do: n - 1
  def integer_break(n) do
    (3 ** div(n - 2, 3)) * (rem(n - 2, 3) + 2)
  end
end
```