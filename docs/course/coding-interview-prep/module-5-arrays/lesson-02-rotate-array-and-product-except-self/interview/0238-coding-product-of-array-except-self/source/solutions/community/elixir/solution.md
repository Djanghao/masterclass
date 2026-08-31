# Rust | Linear Time

**Author:** RBird111
**Votes:** 3
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/4876891/](https://leetcode.com/problems/product-of-array-except-self/solutions/4876891/)

---

# Code
```Rust []
impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        (0..nums.len())
            .map(|i| (i, nums.len() - i - 1))
            .fold(
                (vec![1; nums.len()], 1, 1),
                |(mut arr, pre, suf), (l, r)| {
                    arr[l] *= pre;
                    arr[r] *= suf;
                    (arr, nums[l] * pre, nums[r] * suf)
                },
            )
            .0
    }
}
```
```Elixir []
defmodule Solution do
  @spec product_except_self(nums :: [integer]) :: [integer]
  def product_except_self(n) do
    n |> solve(1) |> elem(0)
  end

  defp solve([], _), do: {[], 1}

  defp solve([h | t], prev) do
    {ls, next} = solve(t, h * prev)
    {[prev * next | ls], h * next}
  end
end
```