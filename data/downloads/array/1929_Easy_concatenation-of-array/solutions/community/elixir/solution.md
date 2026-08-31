# ++

**Author:** booniepepper
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/5968528/](https://leetcode.com/problems/concatenation-of-array/solutions/5968528/)

---

# Code
```elixir []
defmodule Solution do
  @spec get_concatenation(nums :: [integer]) :: [integer]
  def get_concatenation(nums) do
    nums ++ nums
  end
end
```