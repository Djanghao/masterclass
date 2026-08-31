# [Elixir] Hashmap and tail recursion

**Author:** tiedyedvortex
**Votes:** 9
**Link:** [https://leetcode.com/problems/two-sum/solutions/2035620/](https://leetcode.com/problems/two-sum/solutions/2035620/)

---

Basic use of a hashmap and head/tail pattern matching.

We start at position 0 with an empty "seen" map. We take the head of the list and see if we have its complement (target-head) in the map. If we do, we're done; pull that prior index out of the map and return it along with the position we're currently at.

If we haven't seen it, then we put our current index in the map *if we haven't seen it before*. So if we had an array like [1, 2, 2, 6] and a target of 7, there would be no point in storing the second 2 value, because we already checked that 2+2 != 7. 

Then we do tail recursion by calling the function itself on the tail of the list, incrementing position as we do so to keep track.

```
defmodule Solution do
  @spec two_sum(nums :: [integer], target :: integer) :: [integer]
  def two_sum(nums, target) do
    find_two_sum(nums, target)
  end

  def find_two_sum([head|tail], target, position \\\\ 0, seen \\\\ %{}) do
    if Map.has_key?(seen, target-head) do
      [Map.get(seen, target-head), position]
    else
      find_two_sum(tail, target, position+1, Map.put_new(seen, head, position))
    end
  end
end
```

EDIT: One footnote: this implementation takes advantage of the fact that the problem constraints specify that one and only one solution exists. This lets us avoid defining the base case where the tail recursion goes off the end of the list. This is, however, bad practice and in a real code environment we'd probably want to define and handle that case. If you called two_sum([0,0,0,], 1) on the above solution, you'd get an "Undefined Function" error or something because the tail recursion would call find_two_sum with [], that doesn't match any definition and crash the program.

Because functional programming generally ends up nesting functions deeply, you don't want something deep in your function hierarchy to throw an uncaught exception that crashes the whole execution. Instead it's generally better to have each function gracefully exit in an "error" state and leave it up to the calling function what the proper interpretation should be. The convention for Elixir would be to return a tuple of either {:ok, result} or {:err, reason} that can later be unpacked and processed--other functional languages have equivalents, such as Maybe in Haskell/F# or Result in Rust.