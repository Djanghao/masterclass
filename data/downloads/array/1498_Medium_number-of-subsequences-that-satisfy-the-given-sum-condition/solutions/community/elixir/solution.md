# [Rust / Elixir] same concept different approaches

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3492967/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3492967/)

---

# Rust
Sorting -> Binary Search -> Two Pointers
```Rust
impl Solution {
    pub fn num_subseq(mut nums: Vec<i32>, target: i32) -> i32 {
        nums.sort_unstable();
        let mut hi = nums.partition_point(|&x| x <= target / 2);
        if hi == 0 {
            return 0;
        }
        hi -= 1;
        let large = 1_000_000_007;
        let mut combi = 1;
        let mut ans = 0;
        for lo in (0..=hi).rev() {
            while hi + 1 < nums.len() && nums[hi + 1] + nums[lo] <= target {
                hi += 1;
                combi = (combi * 2) % large;
            }
            ans = (ans + combi) % large;
            combi = (combi * 2) % large;
        }
        ans
    }
}
```
# Elixir
Sorting -> Split to 2 lists -> Consume the 2 lists with fold
```Elixir
defmodule Solution do
  @large 1_000_000_007

  @spec num_subseq(nums :: [integer], target :: integer) :: integer
  def num_subseq(nums, target) do
    Enum.sort(nums)
    |> Enum.split_while(&(&1 <= target / 2))
    |> then(fn {left, right} ->
      List.foldr(left, {0, 1, right, target}, &do_fold/2)
    end)
    |> elem(0)
  end

  defp do_fold(lo, {ans, combi, [hi | right], target}) when lo + hi <= target do
    do_fold(lo, {ans, rem(combi * 2, @large), right, target})
  end
  defp do_fold(lo, {ans, combi, right, target}) do
    {rem(ans + combi, @large), rem(combi * 2, @large), right, target}
  end
end
```