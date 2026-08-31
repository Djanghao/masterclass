# [Rust / Elixir] Fast DP solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-trees-with-factors/solutions/4209284/](https://leetcode.com/problems/binary-trees-with-factors/solutions/4209284/)

---

# Approach
The solution is optimized by using early exits for the inner loop.

The Rust solution is further optimized (to 3ms) by storing the DP values with a `Vec`, to minimize usage of the `HashMap`, while the values of the `HashMap` are the indices inside `arr`.

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn num_factored_binary_trees(mut arr: Vec<i32>) -> i32 {
        let large = 1_000_000_007i64;
        arr.sort_unstable();
        let hash: HashMap<i32, usize> =
            arr.iter().enumerate().map(|(i, &val)| (val, i)).collect();
        let mut dp = vec![1i64; arr.len()];
        for j in 0..arr.len() - 1 {
            for i in 0..=j {
                let prod = arr[i].saturating_mul(arr[j]);
                if prod > *arr.last().unwrap() {
                    break;
                }
                if let Some(&k) = hash.get(&prod) {
                    let mul = if i == j { 1 } else { 2 };
                    dp[k] = (dp[k] + mul * dp[i] * dp[j]) % large;
                }
            }
        }
        (dp.iter().sum::<i64>() % large) as i32
    }
}
```
```Elixir []
defmodule Solution do
  @large 1_000_000_007

  @spec num_factored_binary_trees(arr :: [integer]) :: integer
  def num_factored_binary_trees(arr) do
    arr = Enum.sort(arr)
    max = Enum.max(arr)
    dp = Map.new(arr, fn x -> {x, 1} end)
    Enum.reduce(arr, dp, fn y, dp ->
      Enum.take_while(arr, &(&1 <= y))
      |> Enum.reduce_while(dp, fn x, dp ->
        if x * y > max do
          {:halt, dp}
        else
          case Map.get(dp, x * y) do
            nil -> {:cont, dp}
            val ->
              mul = if x == y, do: 1, else: 2
              val2 = rem(val + mul * dp[x] * dp[y], @large)
              {:cont, Map.put(dp, x * y, val2)}
          end
        end
      end)
    end)
    |> Map.values()
    |> Enum.sum()
    |> rem(@large)
  end
end
```