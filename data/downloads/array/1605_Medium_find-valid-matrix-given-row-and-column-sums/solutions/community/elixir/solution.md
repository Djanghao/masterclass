# [Rust / Elixir] greeeeedy

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5503383/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5503383/)

---

Iterate through each matrix cell, assigning a value as large as possible.
# Code
```Rust []
impl Solution {
    pub fn restore_matrix(row_sum: Vec<i32>, mut col_sum: Vec<i32>) -> Vec<Vec<i32>> {
        let mut ans = Vec::<Vec<i32>>::with_capacity(row_sum.len());

        for mut x in row_sum.into_iter() {
            let mut v = Vec::<i32>::with_capacity(col_sum.len());

            for y in col_sum.iter_mut() {
                let min = x.min(*y);
                v.push(min);
                x -= min;
                *y -= min;
            }
            ans.push(v);
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec restore_matrix(row_sum :: [integer], col_sum :: [integer]) :: [[integer]]
  def restore_matrix(row_sum, col_sum) do
    Enum.reverse(row_sum)
    |> Enum.reduce({Enum.reverse(col_sum), {[], "x_placeholder"}},
    fn x, {col_sum, {mat, _}} ->
      # map_reduce for inner loop, to keep col_sum reversed
      Enum.map_reduce(col_sum, {[[] | mat], x},
      fn y, {[tail | mat], x} ->

        min = min(x, y)
        {y - min, {[[min | tail] | mat], x - min}}
      end)
    end)
    |> then(fn {_, {mat, _}} -> mat end)
  end
end
```