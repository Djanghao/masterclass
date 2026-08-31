# [Rust / Elixir] HashMap & sorting

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5292699/](https://leetcode.com/problems/relative-sort-array/solutions/5292699/)

---

With a size of just <= 1000, $$O(n*log(n))$$ is still fairly fast...

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
    pub fn relative_sort_array(mut arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
        let hash: HashMap<i32, usize> = arr2.iter().enumerate()
            .map(|(i, &x)| (x, i)).collect();
        arr1.sort_unstable_by_key(|&x|
            hash.get(&x).map_or((arr2.len(), x), |&i| (i, x))
        );
        arr1
    }
}
```
```Elixir []
defmodule Solution do
  @spec relative_sort_array(arr1 :: [integer], arr2 :: [integer]) :: [integer]
  def relative_sort_array(arr1, arr2) do
    map = Enum.with_index(arr2) |> Map.new()
    Enum.sort_by(arr1, &{Map.get(map, &1), &1})
  end
end
```