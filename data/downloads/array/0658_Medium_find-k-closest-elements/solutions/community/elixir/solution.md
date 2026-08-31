# Elixir Priority Queue & Rust Binary Search  Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/2637159/](https://leetcode.com/problems/find-k-closest-elements/solutions/2637159/)

---

```elixir
defmodule Solution do
  @spec find_closest_elements(arr :: [integer], k :: integer, x :: integer) :: [integer]
  def find_closest_elements(arr, k, x) do
    arr
    |> Enum.reduce(:gb_sets.new(), fn n, acc ->
      acc = :gb_sets.add({abs(n - x), n, :rand.uniform()}, acc)

      if :gb_sets.size(acc) > k do
        {_, acc} = :gb_sets.take_largest(acc)
        acc
      else
        acc
      end
    end)
    |> :gb_sets.to_list()
    |> Enum.map(fn {_, n, _} -> n end)
    |> Enum.sort()
  end
end
```

```rust
impl Solution {
    pub fn find_closest_elements(arr: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
        let k = k as usize;
        let mut l = 0;
        let mut r = arr.len() - k;
        while l < r {
            let mid = (l + r) / 2;
            if x - arr[mid] > arr[mid + k] - x {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        arr[l..l + k].to_vec()
    }
}
```