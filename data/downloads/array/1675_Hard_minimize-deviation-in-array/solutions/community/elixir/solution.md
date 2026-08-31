# [Rust / Elixir] Max heap solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/3223572/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/3223572/)

---

# Approach
1. multiply all odd elements in `nums` by 2, and then put all elements into a max heap.
2. Repeatedly extract the largest element, divide by 2, and put back into the heap, while keeping track of the minimum element and the minimum deviation (ie. answer).
3. Do 2. until the largest element cannot be divided by 2 (is odd).
# Rust
```rust
use std::collections::BinaryHeap;

impl Solution {
    pub fn minimum_deviation(nums: Vec<i32>) -> i32 {
        let mut low = i32::MAX;
        let mut heap = BinaryHeap::with_capacity(nums.len());
        for mut x in nums.into_iter() {
            if x & 1 == 1 {
                x <<= 1;
            }
            low = low.min(x);
            heap.push(x);
        }
        let mut ans = i32::MAX;
        loop {
            let high = heap.pop().unwrap();
            ans = ans.min(high - low);
            if high & 1 == 1 {
                break ans;
            }
            low = low.min(high >> 1);
            heap.push(high >> 1);
        }
    }
}
```
# Elixir
A `:gb_sets` is used instead of a heap.
```elixir
defmodule Solution do
  @spec minimum_deviation(nums :: [integer]) :: integer
  def minimum_deviation(nums) do
    {nums, low} =
      Enum.map_reduce(nums, nil, fn x, low ->
        if rem(x, 2) == 0 do
          {x, min(low, x)}
        else
          {x * 2, min(low, x * 2)}
        end
      end)
    :gb_sets.from_list(nums)
    |> solve(low, nil)
  end

  defp solve(set, low, ans) do
    {high, set} = :gb_sets.take_largest(set)
    ans = min(ans, high - low)
    if rem(high, 2) == 0 do
      half = div(high, 2)
      :gb_sets.add(half, set)
      |> solve(min(low, half), ans)
    else
      ans
    end
  end
end
```