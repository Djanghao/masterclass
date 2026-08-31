# [Elixir] Tail recursive implementation of official greedy solution

**Author:** tiedyedvortex
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/2035855/](https://leetcode.com/problems/jump-game-ii/solutions/2035855/)

---

Since we will never jump backwards, we can easily use a tail recursive approach to forget. The major difference is that instead of storing the current jumpable distance and next jumpable distance on an *absolute* basis (i.e. the position in the array) we pass it as a parameter on a *relative* basis. This means that every time we increment (i.e. every time we call the function tail-recursively) we have to decrease the current jump distance and the maximum known jump distance.

We also stop as soon as we are at the last position, which is when we have a head but no tail on our nums array. This requires pattern matching on [_head|[]] rather than [] as in most tail recursion.

```
defmodule Solution do
  @spec jump(nums :: [integer]) :: integer
  def jump(nums) do
    count_jumps(nums)
  end

  defp count_jumps(nums, jumps \\\\ 0, current_jump_end \\\\ 0, farthest \\\\ 0)

  defp count_jumps([_head | []], jumps, _current_jump_end, _farthest) do
    jumps
  end

  defp count_jumps([head | tail], jumps, current_jump_end, farthest) do
    new_farthest = max(farthest, head)
    if current_jump_end == 0 do
      count_jumps(tail, jumps + 1, new_farthest-1, new_farthest-1)
    else
      count_jumps(tail, jumps, current_jump_end-1, new_farthest-1)
    end
  end
end
```