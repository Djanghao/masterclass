# Rust : rfold, Elixir : foldr

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3856149/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3856149/)

---

# Code
```Rust []
impl Solution {
    pub fn max_array_value(nums: Vec<i32>) -> i64 {
        nums.into_iter()
            .map(|x| x as i64)
            .rfold(0, |acc, x| if x <= acc { acc + x } else { x })
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_array_value(nums :: [integer]) :: integer
  def max_array_value(nums) do
    List.foldr(nums, 0, fn x, acc ->
      if x <= acc, do: acc + x, else: x
    end)
  end
end
```