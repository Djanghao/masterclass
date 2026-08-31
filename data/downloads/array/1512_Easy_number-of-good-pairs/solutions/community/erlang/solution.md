# O(n) solution with HashMap and functional programming

**Author:** Darkie12
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/5688859/](https://leetcode.com/problems/number-of-good-pairs/solutions/5688859/)

---

# Code
```rust []
use std::collections::HashMap;
impl Solution {
    pub fn num_identical_pairs(nums: Vec<i32>) -> i32 {
        let mut seen: HashMap<i32, i32> = HashMap::new();
        nums.iter().fold(0, |mut count, &num| {
            match seen.get_mut(&num){
                Some(v) => {
                    count += *v;
                    *v += 1;
                },
                None => {seen.insert(num, 1);},
            }
            count
        })
    }
}
```
``` Erlang []
-spec num_identical_pairs(Nums :: [integer()]) -> integer().
num_identical_pairs(Nums) ->
    CountMap = lists:foldl(fun(Number, Acc) ->
        case maps:find(Number, Acc) of
            {ok, Count} -> maps:put(Number, Count + 1, Acc);
            error -> maps:put(Number, 1, Acc)
        end
    end, #{}, Nums),


    maps:fold(fun(_Key, Count, Acc) ->
        Acc + Count * (Count - 1) div 2
    end, 0, CountMap).
```
``` Elixir []
defmodule Solution do
  @spec num_identical_pairs(nums :: [integer()]) :: integer()
  def num_identical_pairs(nums) do
    nums
    |> Enum.reduce({%{}, 0}, fn num, {seen, count} ->
      updated_seen =
        case Map.get(seen, num) do
          nil ->
            Map.put(seen, num, 1)

          count_of_num ->
            updated_count = count_of_num + 1
            Map.put(seen, num, updated_count)
        end

      new_count = count + Map.get(seen, num, 0)
      {updated_seen, new_count}
    end)
    |> elem(1)
  end
end
```