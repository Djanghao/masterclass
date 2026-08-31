# [Rust / Elixir] solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195539/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195539/)

---

# Intuition
We can try to group the integers into series, with difference between adjacent elements being 0 or k. (e.g. when `k = 3` and `nums = [10,11,11,12,14,15,16,17,18]`, there will be 4 series `[10]`, `[11,11,14,17]`, `[12,15,18]` and `[16]`)

Then we can notice that choosing integers in one series will only affect what other we can choose in the same series, but will never affect what we can choose in other series.

# Approach
A hash table is used to store the information of each series. We don't need to store the exact values, but just need to store the number of occurence for each distinct value.

For example when `k = 2` and `series = [2,4,4,6,8,10,10,10]`, we will store the information as `[1,2,1,1,3]`.

Bottom-up DP is used to find the number of combinations we can choose for each series (including choosing none). Multiply the results for each series and minus 1 (to exclude the empty subset), then we can get the answer.

# Complexity
- Time complexity: $$O(n*log(n))$$
- Space complexity: $$O(n)$$

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn beautiful_subsets(mut nums: Vec<i32>, k: i32) -> i32 {
        nums.sort_unstable();
        let mut hash = HashMap::<i32, Vec<i32>>::new();
        for &x in nums.iter() {
            if let Some(v) = hash.get_mut(&x) {
                *v.last_mut().unwrap() += 1;
            }
            else {
                let mut v = hash.remove(&(x - k)).unwrap_or(Vec::new());
                v.push(1);
                hash.insert(x, v);
            }
        }
        let mut ans = 1;
        for v in hash.values() {
            let mut acc = 1;
            let mut prev = 1;
            for &c in v.iter() {
                prev = prev * ((1 << c) - 1) + acc;
                std::mem::swap(&mut acc, &mut prev);
            }
            ans *= acc;
        }
        ans - 1
    }
}
```
```Elixir []
defmodule Solution do
  @spec beautiful_subsets(nums :: [integer], k :: integer) :: integer
  def beautiful_subsets(nums, k) do
    Enum.sort(nums)
    |> Enum.reduce(%{}, fn x, map ->
      case Map.get(map, x) do
        nil ->
          {list, map} = Map.pop(map, x - k, [])
          Map.put(map, x, [1 | list])
        [c | tail] -> Map.put(map, x, [c + 1 | tail])
      end
    end)
    |> Map.values()
    |> Enum.map(fn list ->
      Enum.reduce(list, {1, 1}, fn c, {acc, prev} ->
        {prev * (Bitwise.<<<(1, c) - 1) + acc, acc}
      end)
      |> elem(0)
    end)
    |> Enum.product()
    |> Kernel.-(1)
  end
end
```