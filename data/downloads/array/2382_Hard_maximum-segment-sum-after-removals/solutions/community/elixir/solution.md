# [Rust / Elixir] do it backward with a HashMap

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/5981605/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/5981605/)

---

# Approach
Use a `HashMap` to keep track of the segments and their sums.
For example if there is a segment `&nums[lo..=hi]` with sum = `s`, 2 entries will be created as follows:
```Rust
bound.insert(lo, (hi, s));
bound.insert(hi, (lo, s));
```
The answers can be found much more easily backward than forward...
# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn maximum_segment_sum(nums: Vec<i32>, remove_queries: Vec<i32>) -> Vec<i64> {
        let mut ans = vec![0i64; nums.len()];
        let mut bound = HashMap::<i32, (i32, i64)>::new();
        for i in (1..nums.len()).rev() {
            let mut lo = remove_queries[i];
            let mut hi = lo;
            ans[i - 1] = nums[lo as usize] as i64;
            if let Some(&(lo2, s)) = bound.get(&(lo - 1)) {
                ans[i - 1] += s;
                lo = lo2;
            }
            if let Some(&(hi2, s)) = bound.get(&(hi + 1)) {
                ans[i - 1] += s;
                hi = hi2;
            }
            bound.insert(lo, (hi, ans[i - 1]));
            bound.insert(hi, (lo, ans[i - 1]));
            ans[i - 1] = ans[i - 1].max(ans[i]);
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec maximum_segment_sum(nums :: [integer], remove_queries :: [integer]) :: [integer]
  def maximum_segment_sum(nums, remove_queries) do
    t = List.to_tuple(nums)
    tl(remove_queries)
    |> List.foldr({[0], %{}}, fn i, {[head | tail], map} ->
      val = elem(t, i)
      {lo, l_val} = Map.get(map, i - 1, {i, 0})
      {hi, h_val} = Map.get(map, i + 1, {i, 0})
      sum = val + l_val + h_val
      map =
        Map.put(map, lo, {hi, sum})
        |> Map.put(hi, {lo, sum})
      {[max(sum, head), head | tail], map}
    end)
    |> elem(0)
  end
end
```