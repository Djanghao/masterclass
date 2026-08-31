# [Rust / Elixir] patience sort

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/5464646/](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/5464646/)

---

# Approach
Use patience sort to find the longest non-decreasing subsequence for each:
`arr.iter().skip(i).step_by(k)` or
`Enum.drop(i) |> Enum.take_every(k)`,
where `0 <= i < k`.

# Complexity
- Time complexity: $$O(n*log(n / k))$$

- Space complexity: $$O(n)$$

# Code
```Rust []
impl Solution {
    pub fn k_increasing(arr: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut ans = 0;
        let mut patience = Vec::<i32>::new();
        for i in 0..k {
            patience.clear();
            for j in (i..arr.len()).step_by(k) {
                let p = patience.partition_point(|&x| x <= arr[j]);
                if p == patience.len() {
                    patience.push(arr[j]);
                }
                else {
                    patience[p] = arr[j];
                    ans += 1;
                }
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec k_increasing(arr :: [integer], k :: integer) :: integer
  def k_increasing(arr, k) do
    Enum.chunk_every(arr, k, k, Stream.cycle([nil]))
    |> Enum.zip_with(fn list ->
      Enum.with_index(list)
      |> Enum.reduce({0, :gb_sets.new()}, fn tuple, {ans, sets} ->
        {ans, sets} =
          case :gb_sets.iterator_from(tuple, sets) |> :gb_sets.next() do
            {ele, _} -> {ans + 1, :gb_sets.delete(ele, sets)}
            :none -> {ans, sets}
          end
        {ans, :gb_sets.add(tuple, sets)}
      end)
      |> elem(0)
    end)
    |> Enum.sum()
  end
end
```