# [Rust / Elixir] count with HashMap

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6070777/](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6070777/)

---

# Intuition
The answer is `a` if we can find at most `a` rows which have exactly the "**same**" or "**opposite**" pattern.
(e.g. `[1,0,0,0,0,1,0,1]` and `[0,1,1,1,1,0,1,0]` have the opposite patterns.)
# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn max_equal_rows_after_flips(matrix: Vec<Vec<i32>>) -> i32 {
        let mut hash = HashMap::<Vec<i32>, i32>::new();
        let mut ans = 1;
        for mut v in matrix.into_iter() {
            if v[0] == 1 {
                for b in v.iter_mut() {
                    *b = 1 - *b;
                }
            }
            let entry = hash.entry(v)
                .and_modify(|c| *c += 1)
                .or_insert(1);
            ans = ans.max(*entry);
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_equal_rows_after_flips(matrix :: [[integer]]) :: integer
  def max_equal_rows_after_flips(matrix) do
    Enum.map(matrix, fn
      list = [1 | _] -> Enum.map(list, &(1 - &1))
      list -> list
    end)
    |> Enum.frequencies()
    |> Map.values()
    |> Enum.max()
  end
end
```