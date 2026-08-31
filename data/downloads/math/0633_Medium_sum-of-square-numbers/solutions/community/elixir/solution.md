# [Rust / Elixir] test every a

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5324507/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5324507/)

---

# Approach
Just test every value of a where `0 <= a * a * 2 <= c`.

# Code
```Rust []
impl Solution {
    pub fn judge_square_sum(c: i32) -> bool {
        let hi = (c as f64 * 0.5).sqrt() as i32;
        for a in 0..=hi {
            let b = ((c - a * a) as f64).sqrt() as i32;
            if a * a + b * b == c {
                return true;
            }
        }
        false
    }
}
```
```Elixir []
defmodule Solution do
  @spec judge_square_sum(c :: integer) :: boolean
  def judge_square_sum(c) do
    Stream.unfold(0, &({&1 * &1, &1 + 1}))
    |> Stream.take_while(&(&1 * 2 <= c))
    |> Enum.any?(fn a_sq ->
      :math.sqrt(c - a_sq)
      |> floor()
      |> then(&(a_sq + &1 * &1 == c))
    end)
  end
end
```