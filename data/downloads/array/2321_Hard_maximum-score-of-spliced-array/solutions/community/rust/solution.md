# [Rust / Elixir] double Kadane's

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/5439242/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/5439242/)

---

# Approach
Use [Kadane's algorithm](https://cp-algorithms.com/others/maximum_average_segment.html) to find both the minimum & maximum subarray difference of `nums1[l..r] - nums2[l..r]`.

# Code
```Rust []
impl Solution {
    pub fn maximums_spliced_array(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let mut min_diff = 0;
        let mut max_diff = 0;
        let mut lo_diff = 0;
        let mut hi_diff = 0;
        let mut sum1 = 0;
        let mut sum2 = 0;
        for i in 0..nums1.len() {
            sum1 += nums1[i];
            sum2 += nums2[i];
            lo_diff = 0.min(lo_diff + nums1[i] - nums2[i]);
            hi_diff = 0.max(hi_diff + nums1[i] - nums2[i]);
            min_diff = min_diff.min(lo_diff);
            max_diff = max_diff.max(hi_diff);
        }
        (sum1 - min_diff).max(sum2 + max_diff)
    }
}
```
```Elixir []
defmodule Solution do
  @spec maximums_spliced_array(nums1 :: [integer], nums2 :: [integer]) :: integer
  def maximums_spliced_array(nums1, nums2) do
    Enum.zip_reduce(nums1, nums2, {0, 0, 0, 0, 0, 0}, fn x, y, {sum1, sum2, lo_diff, hi_diff, min_diff, max_diff} ->
      sum1 = sum1 + x
      sum2 = sum2 + y
      lo_diff = min(0, lo_diff + x - y)
      hi_diff = max(0, hi_diff + x - y)
      min_diff = min(min_diff, lo_diff)
      max_diff = max(max_diff, hi_diff)
      {sum1, sum2, lo_diff, hi_diff, min_diff, max_diff}
    end)
    |> then(fn {sum1, sum2, _, _, min_diff, max_diff} ->
      max(sum1 - min_diff, sum2 + max_diff)
    end)
  end
end
```