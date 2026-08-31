# [Rust / Elixir] bottom top DP

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3902029/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3902029/)

---

Need to initialize the 3-boolean DP tuple to:
- 1st value: `nums[1] == nums[0]`: To determine whether nums[..2] is valid.
- 2nd value: `false`: Array is never valid when it has only 1 element.
- 3rd value: `true`: Assume empty arrays are valid.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```Rust []
impl Solution {
    pub fn valid_partition(nums: Vec<i32>) -> bool {
        let mut dp = (nums[1] == nums[0], false, true);
        for i in 2..nums.len() {
            let valid = match (dp.1, dp.2, nums[i] - nums[i - 1], nums[i - 1] - nums[i - 2]) {
                (true, _, 0, _) |
                (_, true, 0, 0) |
                (_, true, 1, 1) => true,
                _ => false,
            };
            dp = (valid, dp.0, dp.1);
        }
        dp.0
    }
}
```
```Elixir []
defmodule Solution do
  @spec valid_partition(nums :: [integer]) :: boolean
  def valid_partition(nums = [a, b | _]) do
    Enum.chunk_every(nums, 3, 1, :discard)
    |> Enum.reduce({a == b, false, true}, fn [a, b, c], {dp1, dp2, dp3} ->
      cond do
        dp2 and b == c -> true
        dp3 and a == b and b == c -> true
        dp3 and a + 1 == b and b + 1 == c -> true
        true -> false
      end
      |> then(&{&1, dp1, dp2})
    end)
    |> elem(0)
  end
end
```