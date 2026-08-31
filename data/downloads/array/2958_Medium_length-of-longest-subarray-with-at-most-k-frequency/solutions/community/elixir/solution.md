# [Rust / Elixir] Hash map & sliding window

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4935167/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4935167/)

---

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn max_subarray_length(nums: Vec<i32>, k: i32) -> i32 {
        let mut hash = HashMap::<i32, i32>::new();
        let mut i = 0;
        let mut ans = 0;
        for j in 0..nums.len() {
            let entry = hash.entry(nums[j]).or_insert(0);
            *entry += 1;
            if *entry > k {
                loop {
                    *hash.get_mut(&nums[i]).unwrap() -= 1;
                    i += 1;
                    if nums[i - 1] == nums[j] {
                        break;
                    }
                }
            }
            ans = ans.max(j - i + 1);
        }
        ans as i32
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_subarray_length(nums :: [integer], k :: integer) :: integer
  def max_subarray_length(nums, k) do
    slide(nums, nums, :right, %{}, k, 0, 0)
  end

  defp slide(nums1, [x | nums2], :right, map, k, len, ans) do
    {c, map} = Map.get_and_update(map, x, fn
      nil -> {1, 1}
      c -> {c + 1, c + 1}
    end)
    if c <= k do
      slide(nums1, nums2, :right, map, k, len + 1, max(ans, len + 1))
    else
      slide(nums1, nums2, :left, map, k, len + 1, ans)
    end
  end
  defp slide([x | nums1], nums2, :left, map, k, len, ans) do
    {c, map} = Map.get_and_update!(map, x, fn
      c -> {c - 1, c - 1}
    end)
    if c == k do
      slide(nums1, nums2, :right, map, k, len - 1, ans)
    else
      slide(nums1, nums2, :left, map, k, len - 1, ans)
    end
  end
  defp slide(_, [], _, _, _, _, ans), do: ans
end
```
# Extra
For the sake of having less code...
```
defmodule Solution do
  @spec max_subarray_length(nums :: [integer], k :: integer) :: integer
  def max_subarray_length(nums, k) do
    slide(nums, nums, 1, %{}, k, 0, 0)
  end

  defp slide([x | nums], other, change, map, k, len, ans) do
    {c, map} = Map.get_and_update(map, x, fn
      nil -> {0, change}
      c -> {c, c + change}
    end)
    len = len + change
    ans = if c + change <= k, do: max(ans, len), else: ans
    if (c <= k) == (c + change <= k) do
      slide(nums, other, change, map, k, len, ans)
    else
      slide(other, nums, -change, map, k, len, ans)
    end
  end
  defp slide([], _, _, _, _, _, ans), do: ans
end
```