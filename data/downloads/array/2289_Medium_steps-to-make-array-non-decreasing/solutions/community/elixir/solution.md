# [Rust / Elixir] with monotonic stack

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/3104113/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/3104113/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)
# Rust
```rust
impl Solution {
    pub fn total_steps(nums: Vec<i32>) -> i32 {
        let mut ans = 0;
        let mut count = 0;
        let mut stack = Vec::new();
        for &x in nums.iter().rev() {
            while !stack.is_empty() && *stack.last().unwrap() < x {
                stack.pop();
                count += 1;
            }
            ans = ans.max(count);
            stack.push(x);
            count = 0.max(count - 1);
        }
        ans
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec total_steps(nums :: [integer]) :: integer
  def total_steps(nums) do
    Enum.reverse(nums)
    |> solve([], 0, 0)
  end
  
  defp solve([], _, _, ans), do: ans
  defp solve([x | nums], [y | stack], count, ans) when x > y do
    solve([x | nums], stack, count + 1, ans)
  end
  defp solve([x | nums], stack, count, ans) do
    solve(nums, [x | stack], max(count - 1, 0), max(ans, count))
  end
end
```