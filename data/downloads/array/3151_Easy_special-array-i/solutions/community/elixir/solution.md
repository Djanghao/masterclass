# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-i/solutions/5406744/](https://leetcode.com/problems/special-array-i/solutions/5406744/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn is_array_special(nums: Vec<i32>) -> bool {
        for i in 1..nums.len(){
            if (nums[i-1] & 1) == (nums[i] &1){
                return false
            }
        }
        true
    }
}
```
```Elixir []
defmodule Solution do
  import Bitwise
  @spec is_array_special(nums :: [integer]) :: boolean
  def is_array_special([hd | tl]), do: check?(tl, (hd &&& 1))

  @spec check?(nums :: [integer], prev_rem :: boolean) :: boolean
  defp check?([], _), do: true
  defp check?([hd | _], prev_rem) when (hd &&& 1) == prev_rem, do: false
  defp check?([hd | tl], _), do: check?(tl, (hd &&& 1)) 
    
end
```
```Erlang []
-spec is_array_special(Nums :: [integer()]) -> boolean().
is_array_special([H | T]) -> check(T, H band 1).

-spec check(Nums :: [integer()], Prev :: boolean()) -> boolean().
check([], _) -> true;
check([H | _], Prev) when H band 1 =:= Prev -> false;
check([H | T], _) -> check(T, H band 1).
```
