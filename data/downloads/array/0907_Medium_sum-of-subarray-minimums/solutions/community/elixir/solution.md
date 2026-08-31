# [Rust / Elixir] Monotonic Stack

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/2846966/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/2846966/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Rust
```rust
const LARGE: i64 = 1_000_000_007;

impl Solution {
    pub fn sum_subarray_mins(arr: Vec<i32>) -> i32 {
        let mut stack: Vec<(i64, i32)> = Vec::new();
        let mut ans = 0;
        for (i, &x) in arr.iter().chain(std::iter::once(&0)).enumerate() {
            while !stack.is_empty() && stack.last().unwrap().1 > x {
                let (j, y) = stack.pop().unwrap();
                let k = stack.last().unwrap_or(&(-1, 0)).0;
                let c = y as i64 * (i as i64 - j) * (j - k) % LARGE;
                ans = (ans + c) % LARGE;
            }
            stack.push((i as i64, x));
        }
        ans as i32
    }
}
```

# Elixir
(updated)
```elixir
defmodule Solution do
  @spec sum_subarray_mins(arr :: [integer]) :: integer
  def sum_subarray_mins(arr) do
    ([0] ++ arr ++ [0])
    |> Enum.with_index()
    |> Enum.reduce({0, []}, &do_reduce/2)
    |> elem(0)
  end

  defp do_reduce({x, i}, {ans, [{head, j}, {next, k} | tail]}) when head > x do
    ans = rem(ans + head * (i - j) * (j - k), 1_000_000_007)
    do_reduce({x, i}, {ans, [{next, k} | tail]})
  end
  defp do_reduce({x, i}, {ans, stack}) do
    {ans, [{x, i} | stack]}
  end
end
```