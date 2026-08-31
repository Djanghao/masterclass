# [Rust / Elixir] Sorting & min heap

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3558210/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3558210/)

---

# Rust
`.sort_unstable_by_key()` is used to sort a Vec of indices in decreasing order of `nums2`.
Negative values are used with BinaryHeap to simulate a min-heap.
```rust
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_score(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> i64 {
        let mut indices: Vec<usize> = (0..nums1.len()).collect();
        indices.sort_unstable_by_key(|&i| -nums2[i]);
        let mut heap: BinaryHeap<i64> = indices[..k as usize].iter()
                                        .map(|&i| -nums1[i] as i64)
                                        .collect();
        let mut sum = -heap.iter().sum::<i64>();
        let mut ans = sum * nums2[indices[k as usize - 1]] as i64;

        for &i in indices[k as usize..].iter() {
            heap.push(-nums1[i] as i64);
            sum += nums1[i] as i64;
            sum += heap.pop().unwrap();
            ans = ans.max(sum * nums2[i] as i64);
        }
        ans
    }
}
```
# Elixir
`:gb_trees`, a ordered map is used here for the purpose of min-heap.
```elixir
defmodule Solution do
  @spec max_score(nums1 :: [integer], nums2 :: [integer], k :: integer) :: integer
  def max_score(nums1, nums2, k) do
    {left, right} =
      Enum.zip(nums1, nums2)
      |> Enum.sort_by(&(elem(&1, 1)), :desc)
      |> Enum.split(k)
    
    {sum, tree} =
      Enum.reduce(left, {0, :gb_trees.empty()}, fn {x, _}, {sum, tree} ->
        {sum + x, insert_to_tree(x, tree)}
      end)
    ans =
      List.last(left)
      |> elem(1)
      |> Kernel.*(sum)
    
    Enum.reduce(right, {ans, sum, tree}, fn {x, y}, {ans, sum, tree} ->
      {popped, tree} =
        insert_to_tree(x, tree)
        |> pop_smallest()
      sum = sum + x - popped
      {max(ans, sum * y), sum, tree}
    end)
    |> elem(0)
  end

  defp insert_to_tree(x, tree) do
    case :gb_trees.lookup(x, tree) do
      {:value, c} -> :gb_trees.update(x, c + 1, tree)
      :none -> :gb_trees.insert(x, 1, tree)
    end
  end

  defp pop_smallest(tree) do
    case :gb_trees.smallest(tree) do
      {x, 1} -> {x, :gb_trees.delete(x, tree)}
      {x, c} -> {x, :gb_trees.update(x, c - 1, tree)}
    end
  end
end
```