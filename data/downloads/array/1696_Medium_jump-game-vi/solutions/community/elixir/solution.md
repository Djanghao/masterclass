# [Rust / Elixir] Heap & monotonic queue solutions

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/3306755/](https://leetcode.com/problems/jump-game-vi/solutions/3306755/)

---

# Heap
`:gb_sets` is used for Elixir, due to built-in heaps being not available.
```Rust []
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_result(nums: Vec<i32>, k: i32) -> i32 {
        let mut last = 0;
        let mut heap: BinaryHeap<(i32, i32)> = BinaryHeap::new();
        for i in 0..nums.len() {
            while !heap.is_empty()
            && heap.peek().unwrap().1 < i as i32 - k {
                heap.pop();
            }
            last = heap.peek().unwrap_or(&(0, 0)).0 + nums[i];
            heap.push((last, i as i32));
        }
        last
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_result(nums :: [integer], k :: integer) :: integer
  def max_result([head | tail], k) do
    set = :gb_sets.from_list([{head, -1}])
    Enum.with_index(tail)
    |> Enum.reduce({head, set, k}, &do_reduce/2)
    |> elem(0)
  end

  defp do_reduce({x, i}, {ans, set, k}) do
    {y, j} = :gb_sets.largest(set)
    if i - j > k do
      do_reduce({x, i}, {ans, :gb_sets.delete({y, j}, set), k})
    else
      {x + y, :gb_sets.add({x + y, i}, set), k}
    end
  end
end
```
# Monotonic queue
```Rust []
use std::collections::VecDeque;

impl Solution {
    pub fn max_result(mut nums: Vec<i32>, k: i32) -> i32 {
        let mut queue = VecDeque::new();
        queue.push_back(0usize);
        for i in 1..nums.len() {
            while !queue.is_empty() && i - *queue.front().unwrap() > k as usize {
                queue.pop_front();
            }
            nums[i] += nums[*queue.front().unwrap()];
            while !queue.is_empty() && nums[i] > nums[*queue.back().unwrap()] {
                queue.pop_back();
            }
            queue.push_back(i);
        }
        *nums.last().unwrap()
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_result(nums :: [integer], k :: integer) :: integer
  def max_result([head | tail], k) do
    q = :queue.from_list([{head, -1}])
    Enum.with_index(tail)
    |> Enum.reduce({head, q, k}, &do_reduce/2)
    |> elem(0)
  end

  defp do_reduce({x, i}, {ans, q, k}) do
    {y, j} = :queue.head(q)
    if i - j > k do
      do_reduce({x, i}, {ans, :queue.tail(q), k})
    else
      {x + y, enqueue(q, {x + y, i}), k}
    end
  end

  defp enqueue(q, {x, i}) do
    case :queue.peek_r(q) do
      {:value, {y, _}} when y <= x ->
        :queue.liat(q)
        |>  enqueue({x, i})
      _ -> :queue.in({x, i}, q)
    end
  end
end
```