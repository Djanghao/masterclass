# Elixir & Rust Prefix Sum Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2490720/](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2490720/)

---

Similar as [1074. Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)

```elixir
defmodule Solution do
  @spec max_sum_submatrix(matrix :: [[integer]], k :: integer) :: integer
  def max_sum_submatrix(matrix, k) do
    m = length(matrix) - 1
    n = length(hd(matrix)) - 1

    matrix =
      matrix
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {row, i}, acc ->
        row
        |> Enum.with_index()
        |> Enum.reduce(acc, fn {n, j}, acc ->
          if j == 0 do
            Map.put(acc, {i, j}, n)
          else
            Map.put(acc, {i, j}, n + acc[{i, j - 1}])
          end
        end)
      end)

    for left <- 0..n, right <- left..n, reduce: -100_000 do
      ans ->
        for r <- 0..m, reduce: {ans, 0, :gb_sets.from_list([0])} do
          {ans, pre_sum, set} ->
            pre_sum = pre_sum + matrix[{r, right}] - Map.get(matrix, {r, left - 1}, 0)
            iter = :gb_sets.iterator_from(pre_sum - k, set)

            ans =
              case :gb_sets.next(iter) do
                {sum, _} -> max(ans, pre_sum - sum)
                _ -> ans
              end

            set = :gb_sets.add(pre_sum, set)
            {ans, pre_sum, set}
        end
        |> elem(0)
    end
  end
end
```

```rust
use std::collections::BTreeSet;
use std::ops::Bound::Included;

impl Solution {
    pub fn max_sum_submatrix(mut matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        for i in 0..matrix.len() {
            for j in 1..matrix[i].len() {
                matrix[i][j] += matrix[i][j - 1];
            }
        }

        let mut ans = i32::MIN;
        for left in 0..matrix[0].len() {
            for right in left..matrix[0].len() {
                let mut set = BTreeSet::new();
                set.insert(0);
                let mut pre_sum = 0;
                for r in 0..matrix.len() {
                    pre_sum += matrix[r][right];
                    if left > 0 {
                        pre_sum -= matrix[r][left - 1];
                    }
                    if let Some(sum) = set.range(pre_sum - k..).next() {
                        ans = ans.max(pre_sum - sum);
                    }

                    set.insert(pre_sum);
                }
            }
        }
        ans
    }
}
```