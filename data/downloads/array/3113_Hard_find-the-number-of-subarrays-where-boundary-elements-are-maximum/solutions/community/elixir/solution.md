# [Rust / Elixir] monotonic stack

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5625189/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5625189/)

---

# Code
```Rust []
impl Solution {
    pub fn number_of_subarrays(nums: Vec<i32>) -> i64 {
        let mut ans = nums.len() as i64;
        let mut stack = Vec::<(i32, i64)>::new();
        for &x in nums.iter() {
            while !stack.is_empty()
            && stack.last().unwrap().0 < x {
                stack.pop();
            }
            match stack.last_mut() {
                Some((y, c)) if *y == x => {
                    ans += *c;
                    *c += 1;
                }
                _ => stack.push((x, 1)),
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec number_of_subarrays(nums :: [integer]) :: integer
  def number_of_subarrays(nums) do
    solve(nums, [], 0)
  end

  defp solve([x | nums], [{y, _} | stack], ans) when y < x do
    solve([x | nums], stack, ans)
  end
  defp solve([x | nums], [{x, c} | stack], ans) do
    solve(nums, [{x, c + 1} | stack], ans + c + 1)
  end
  defp solve([x | nums], stack, ans) do
    solve(nums, [{x, 1} | stack], ans + 1)
  end
  defp solve([], _, ans), do: ans
end
```