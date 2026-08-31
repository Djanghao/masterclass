# [Rust / Elixir] slide or not slide

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4942220/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4942220/)

---

The Elixir solution doesn't look like a sliding window one...
# Code
```Rust []
impl Solution {
    pub fn count_subarrays(nums: Vec<i32>, k: i32) -> i64 {
        let max = *nums.iter().max().unwrap();
        let mut ans = 0;
        let mut i = 0;
        let mut count = 0;
        for &x in nums.iter() {
            if x == max {
                count += 1;
            }
            while count == k {
                if nums[i] == max {
                    count -= 1;
                }
                i += 1;
            }
            ans += i;
        }
        ans as i64
    }
}
```
```Elixir []
defmodule Solution do
  @spec count_subarrays(nums :: [integer], k :: integer) :: integer
  def count_subarrays(nums, k) do
    max = Enum.max(nums)
    list =
      Enum.with_index(nums)
      |> Enum.filter(fn {x, _} -> x == max end)
    Enum.drop(list, k - 1)
    |> Enum.chunk_every(2, 1)
    |> Enum.zip_with(list, fn
      [{_, j}, {_, k}], {_, i} -> (i + 1) * (k - j)
      [{_, j}], {_, i} -> (i + 1) * (length(nums) - j)
    end)
    |> Enum.sum()
  end
end
```