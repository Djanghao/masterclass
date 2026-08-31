# [Rust / Elixir] Sorting + Sliding window

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4302136/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4302136/)

---

# Code
```Rust []
impl Solution {
    pub fn max_frequency(mut nums: Vec<i32>, mut k: i32) -> i32 {
        nums.sort_unstable();
        let mut i = 0;
        let mut ans = 1;
        for j in 1..nums.len() {
            k -= (nums[j] - nums[j - 1]) * (j - i) as i32;
            while k < 0 {
                k += nums[j] - nums[i];
                i += 1;
            }
            ans = ans.max(j - i + 1);
        }
        ans as i32
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_frequency(nums :: [integer], k :: integer) :: integer
  def max_frequency(nums, k) do
    nums = Enum.sort(nums)
    slide(nums, nums, k, 1, 1)
  end

  defp slide([x1 | tail1], [x2 | tail2], k, len, ans) when k < 0 do
    slide(tail1, [x2 | tail2], k + x2 - x1, len - 1, ans)
  end
  defp slide(_, [_], _, len, ans), do: max(len, ans)
  defp slide(nums1, [x2, y2 | tail2], k, len, ans) do
    slide(nums1, [y2 | tail2], k - (y2 - x2) * len, len + 1, max(len, ans))
  end
end
```