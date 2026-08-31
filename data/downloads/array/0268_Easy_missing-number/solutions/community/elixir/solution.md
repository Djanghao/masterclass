# [Elixir] Bitwise xor

**Author:** tiedyedvortex
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-number/solutions/2085068/](https://leetcode.com/problems/missing-number/solutions/2085068/)

---

So, this is a good case where it's worth understanding *why* the bitwise XOR solution is better than the hashmap solution, in particular for a functional language like Elixir.

See, in a non-functional language that uses arrays, the value n can be determined in O(1) time by just measuring the size of nums. However, in a functional language, nums is a linked list, and measuring its length is O(n). This isn't necessarily a problem in terms of overall time complexity (we have to scan the array either way so it's going to be O(n) regardless) but it's generally good practice to avoid traversing the linked list twice if we can avoid it.

The other approach would be to use a hashset (MapSet in Elixir). And that would work; we'd instantiate an empty hashset and a counter value, and then pass them through a tail-recursive list traversal using [head | tail]. Each iteration would add head into the MapSet, increaming the counter by one, until we got to the end, in which case we have MapSet containing all elements but one. But, then we'd have an O(n) memory usage and a set of values we would have to enumerate over again using a *second* tail recursion, this time over the range (0..n). This would *work*...but it's clunky.

In this specific case, though, we have a trick. If we take the xor of all values in the range (0..n), and the xor of all the values in nums, then the result will be that the xor of all values will have been xord with the missing numbers. Then if we xor these partial and full values together, any bit corresponding to a number that appears in both (0..n) and nums will get flipped again and will cancel out. We'll be left with only the bits corresponding to the missing value! And we can do this in one tail-recursive reduction by noting that bxor(0, something) = something, so we can do the xor over (1..n) and get the same result so that we only have to do n operations and not n-1.

``` 
defmodule Solution do
  import Bitwise, only: [bxor: 2]
  
  @spec missing_number(nums :: [integer]) :: integer
  def missing_number(nums) do
    find_missing_number(nums)
  end

  defp find_missing_number(nums, n \\\\ 0, partial_xor \\\\ 0, full_xor \\\\ 0)
  defp find_missing_number([], _n, partial_xor, full_xor), do: bxor(partial_xor, full_xor)
  
  defp find_missing_number([head | tail], n, partial_xor, full_xor) do
    find_missing_number(tail, n+1, bxor(partial_xor, head), bxor(full_xor, n+1))
  end
end
```