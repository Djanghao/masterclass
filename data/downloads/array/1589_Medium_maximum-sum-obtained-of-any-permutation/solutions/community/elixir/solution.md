# [Rust / Elixir] Prefix sum -> Sorting -> Greedy

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/3926054/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/3926054/)

---

# Approach
1. Use prefix sum approach to sum up the number of times each `nums[i]` will be added to the total sum. (Let `count` be the result)
2. Sort both `count` and `nums` because we want the larger integers to be added the more times.
3. Add up the total sum while doing modulo $$10^9 + 7$$.

# Complexity
- Time complexity: $$O(n*log(n) + m)$$

- Space complexity: $$O(n)$$

Where `n = nums.len()` and `m = requests.len()`.

# Code
```Rust []
impl Solution {
    pub fn max_sum_range_query(mut nums: Vec<i32>, requests: Vec<Vec<i32>>) -> i32 {
        let n = nums.len();
        let mut count = vec![0i32; n];
        for v in requests.iter() {
            count[v[0] as usize] += 1;
            if v[1] as usize + 1 < n {
                count[v[1] as usize + 1] -= 1;
            }
        }
        for i in 1..n {
            count[i] += count[i - 1];
        }
        count.sort_unstable();
        nums.sort_unstable();
        let mut ans = 0i64;
        for i in 0..nums.len() {
            ans += nums[i] as i64 * count[i] as i64;
            ans %= 1_000_000_007i64;
        }
        ans as i32
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_sum_range_query(nums :: [integer], requests :: [[integer]]) :: integer
  def max_sum_range_query(nums, requests) do
    Enum.reduce(requests, %{}, fn [s, e], map ->
      Map.update(map, s, 1, &(&1 + 1))
      |> Map.update(e + 1, -1, &(&1 - 1))
    end)
    |> then(fn map ->
      Enum.map(0..length(nums) - 1, &Map.get(map, &1, 0))
    end)
    |> Enum.scan(&+/2)
    |> Enum.sort()
    |> Enum.zip_reduce(Enum.sort(nums), 0, fn c, x, acc ->
      rem(acc + c * x, 1_000_000_007)
    end)
  end
end
```