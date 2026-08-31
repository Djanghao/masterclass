# [Rust / Elixir] prefix sum solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381286/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381286/)

---

# Code
```Rust []
impl Solution {
    pub fn minimize_array_value(nums: Vec<i32>) -> i32 {
        let mut ans = 0i64;
        let mut sum = 0i64;
        for (i, &x) in nums.iter().enumerate() {
            sum += x as i64;
            if sum > 0 {
                let avg = (sum - 1) / (i as i64 + 1) + 1;
                ans = ans.max(avg);
            }
        }
        ans as i32
    }
}
```
```Elixir []
defmodule Solution do
  @spec minimize_array_value(nums :: [integer]) :: integer
  def minimize_array_value(nums) do
    Enum.scan(nums, &+/2)
    |> Enum.with_index(1)
    |> Enum.map(fn {acc, i} -> ceil(acc / i) end)
    |> Enum.max()
  end
end
```