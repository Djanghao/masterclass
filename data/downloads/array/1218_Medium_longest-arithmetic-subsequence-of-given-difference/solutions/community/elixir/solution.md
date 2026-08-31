# [Rust / Elixir] with HashMap

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3763514/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3763514/)

---

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn longest_subsequence(arr: Vec<i32>, difference: i32) -> i32 {
        let mut hash = HashMap::<i32, i32>::new();
        let mut ans = 1;
        for &x in arr.iter() {
            let c = 1 + *hash.get(&(x - difference)).unwrap_or(&0);
            ans = ans.max(c);
            hash.insert(x, c);
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec longest_subsequence(arr :: [integer], difference :: integer) :: integer
  def longest_subsequence(arr, difference) do
    Enum.reduce(arr, {1, %{}}, fn x, {ans, map} ->
      c = 1 + Map.get(map, x - difference, 0)
      {max(ans, c), Map.put(map, x, c)}
    end)
    |> elem(0)
  end
end
```