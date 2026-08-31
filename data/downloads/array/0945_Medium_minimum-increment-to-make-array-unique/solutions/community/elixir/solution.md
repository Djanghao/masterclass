# [Rust / Elixir] 2 approaches

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5310176/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5310176/)

---

# Approach
Counting sort with Rust, sorting with Elixir.
But same approach for counting number of moves.
# Code
```Rust []
impl Solution {
    pub fn min_increment_for_unique(nums: Vec<i32>) -> i32 {
        let min = *nums.iter().min().unwrap() as usize;
        let max = *nums.iter().max().unwrap() as usize;
        let mut count = vec![0; max - min + 1];
        for &x in nums.iter() {
            count[x as usize - min] += 1;
        }

        let mut ans = 0;
        for i in 0..count.len() - 1 {
            if count[i] > 1 {
                ans += count[i] - 1;
                count[i + 1] += count[i] - 1;
            }
        }
        let last = *count.last().unwrap();
        ans + last * (last - 1) / 2
    }
}
```
```Elixir []
defmodule Solution do
  @spec min_increment_for_unique(nums :: [integer]) :: integer
  def min_increment_for_unique(nums) do
    [nil | nums] # to make the result of Enum.reduce {ans, nil, 1}
    |> Enum.frequencies()
    |> Enum.sort()
    |> Enum.reduce({0, -1, 1}, &do_reduce/2)
    |> elem(0)
  end
  
  defp do_reduce({x, c_x}, {ans, x, c_y}), do: {ans, x, c_x + c_y}
  defp do_reduce({x, c_x}, {ans, _, 1}), do: {ans, x, c_x}
  defp do_reduce({x, c_x}, {ans, y, c_y}) do
    do_reduce({x, c_x}, {ans + c_y - 1, y + 1, c_y - 1})
  end
end
```