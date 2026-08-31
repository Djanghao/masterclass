# [Rust / Elixir] maintain left sum and right sum

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2874771/](https://leetcode.com/problems/minimum-average-difference/solutions/2874771/)

---

Seems there is overflow for i32 so use i64 to store sum.
There is division by zero issue when i = n - 1, so use `1i64.max()` on the denominator to avoid it.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Rust
```rust
impl Solution {
    pub fn minimum_average_difference(nums: Vec<i32>) -> i32 {
        let mut left = 0;
        let mut right = nums.iter().map(|&x| x as i64).sum::<i64>();
        let mut ans = 0;
        let mut min = i64::MAX;
        for i in 0..nums.len() {
            left += nums[i] as i64;
            right -= nums[i] as i64;
            let diff = (left / (i + 1) as i64 - right / 1i64.max((nums.len() - i - 1) as i64)).abs();
            if diff < min {
                ans = i as i32;
                min = diff;
            }
        }
        ans
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec minimum_average_difference(nums :: [integer]) :: integer
  def minimum_average_difference(nums) do
    n = length(nums)
    sum = Enum.sum(nums)
    Enum.scan(nums, {0, sum}, fn x, {left, right} -> {left + x, right - x} end)
    |> Enum.with_index()
    |> Enum.map(fn {{left, right}, i} ->
      diff =
        floor(left / (i + 1)) - floor(right / max(n - i - 1, 1))
        |> abs()
      {diff, i}
    end)
    |> Enum.min()
    |> elem(1)
  end
end
```