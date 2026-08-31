# [Rust / Elixir] with math

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/5798202/](https://leetcode.com/problems/power-of-heroes/solutions/5798202/)

---

# Intuition
After `nums` is sorted in non-decreasing order, we can use this formula to find the sum of powers of all groups having `j` being the largest index:
$$(\\sum_{i=0}^{j - 1}nums[j]^2*nums[i]*2^{j-i-1}) + nums[j]^3$$
Using a variable `acc` to keep track of the value of the
$$\\sum_{i=0}^{j - 1}nums[i]*2^{j-i-1}$$ part, we can calculate the sum efficiently.

# Complexity
- Time complexity: $$O(n*log(n))$$ due to sorting.

- Space complexity: $$O(1)$$ (Rust).

# Code
```Rust []
impl Solution {
    pub fn sum_of_power(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();
        let large = 1_000_000_007i64;
        let mut acc = 0i64;
        let mut ans = 0i64;
        for x in nums.iter().map(|&x| x as i64) {
            let sqr = (x * x) % large;
            let cube = (sqr * x) % large;
            let mul = (sqr * acc) % large;
            ans = (ans + mul + cube) % large;
            acc = (acc * 2 + x) % large;
        }
        ans as i32
    }
}
```
```Elixir []
defmodule Solution do
  @large 1_000_000_007

  @spec sum_of_power(nums :: [integer]) :: integer
  def sum_of_power(nums) do
    Enum.sort(nums)
    |> Enum.reduce({0, 0}, fn x, {ans, acc} ->
      ans = rem(ans + x * x * (x + acc), @large)
      acc = rem(acc * 2 + x, @large)
      {ans, acc}
    end)
    |> elem(0)
  end
end
```