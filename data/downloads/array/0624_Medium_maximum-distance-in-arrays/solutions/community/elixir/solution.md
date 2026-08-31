# [Rust / Elixir] read only first and last of array

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5643070/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5643070/)

---

# Code
```Rust []
impl Solution {
    pub fn max_distance(arrays: Vec<Vec<i32>>) -> i32 {
        let mut lo = 10_000;
        let mut hi = -10_000;
        let mut ans = 0;
        for (x, y) in arrays.iter().map(|v| (v[0], v[v.len() - 1])) {
            ans = ans.max(hi - x).max(y - lo);
            lo = lo.min(x);
            hi = hi.max(y);
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_distance(arrays :: [[integer]]) :: integer
  def max_distance(arrays) do
    Enum.map(arrays, fn list -> {List.first(list), List.last(list)} end)
    |> Enum.reduce({0, 10_000, -10_000}, fn {x, y}, {ans, lo, hi} ->
      {Enum.max([ans, hi - x, y - lo]), min(lo, x), max(hi, y)}
    end)
    |> elem(0)
  end
end
```