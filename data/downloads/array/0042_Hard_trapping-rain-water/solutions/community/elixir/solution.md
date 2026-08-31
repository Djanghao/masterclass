# Elixir: Monotonic stack with recursive level filling (very efficient, 3 ms)

**Author:** pul-paulsen
**Votes:** 0
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/5861893/](https://leetcode.com/problems/trapping-rain-water/solutions/5861893/)

---

# Intuition
Use a monotonic stack keeping track of those elevations (and their indices), which can still trap water. 
Fill from left and always on the lowest common level of either side while counting the volume of the filled gap. 
An already filled "block" can be sufficiently condensed and represented by its right elevation. 
Filled blocks "inside" higher elevations define the ground level of new gaps and their height this must be subtracted from the newly filled height.
Fill the nested gaps recursively, until they are collapsed to one levelled "block". 
Discard lower blocks left of higher elevations, if they have no higher elevations left of them counter.

# Approach
Iterate efficiently:
- Do the iteration over the heights list with tail-recursion counting the index up, thus preventing an Enum.with_index
- Disregard 0 heights because they are no elevations
- Create elevation tuples (height and index) and handle them in a stack_and_fill function which updates the monotonic stack and the filled volume

Stack and fill:
- Use Elixirs great pattern matching and guarding to implement clauses for all relevant situations by the relation of the new elevation and the stack of previous elevations (which may already have been filled and condensed as "block")
- Use recursion to fill nested gaps level by level

# Complexity
- Time complexity: O(n)

- Space complexity: O(n); the stack can in the worst case at most get as big as the input (that would be a stair downwards, which at the end would trap no water at all...) 

# Code
I left inline comments about the clauses to explain, that they are handling
```elixir []
defmodule Solution do
  @spec trap(height :: [integer]) :: integer
  def trap(heights), do: trap(heights, 0, [], 0)

  defp trap(heights, index, stack, volume)  
  defp trap([], _, _, volume), do: volume
  defp trap([0 | heights], index, stack, volume), do: trap(heights, index + 1, stack, volume)
  defp trap([height | heights], index, stack, volume), 
    do: with(
        elevation = {height, index},
        {stack, volume} = stack_and_fill(stack, elevation, volume),
        do: trap(heights, index + 1, stack, volume))  
  
  # first elevation
  defp stack_and_fill([] = _empty_stack, elevation, volume), do: {[elevation], volume}

  # only lower or equal immediate predecessor (already filled level) 
  #   can't trap more water - just replace
  defp stack_and_fill([{p_h, p_i}], {h, i} = elevation, volume)
    when p_i == i - 1 and p_h <= h, do: {[elevation], volume}

  # equal predecessor -> fill (if gap) and replace (indicating filled block)
  defp stack_and_fill([{h, p_i} | stack], {h, i} = elevation, volume), 
    do: {
        [elevation | stack], 
        volume + h * (i - p_i - 1)} 

  # higher predecessor -> fill and add as block "inside"
  defp stack_and_fill([{p_h, p_i} | _] = stack, {h, i} = elevation, volume)
    when p_h > h, do: {[elevation | stack], volume + h * (i - p_i - 1)} 

  # lower predecessor with gap -> fill gap, add block "inside" and recur 
  #   -> creates the inside level for the next clauses
  defp stack_and_fill([{p_h, p_i} | stack], {h, i} = elevation, volume)
    when p_h <= h and p_i < i - 1, do: 
        stack_and_fill(
            [{p_h, i-1} | stack], 
            elevation, 
            volume + p_h * (i - p_i - 1))

  # lower immediate predecessor (already filled level inside) and lower pre-predecessor 
  #   -> fill above given level, replace inside level and recur
  defp stack_and_fill([{p_h, p_i}, {pp_h, pp_i} | stack], {h, i} = elevation, volume)
    when p_i == i - 1 and p_h < h and pp_h < h, 
    do: stack_and_fill(
        [{pp_h, i - 1} | stack], 
        elevation,
        volume + (pp_h - p_h) * (i - pp_i - 1)) 

  # lower immediate predecessor (already filled level inside) and higher pre-predecessor 
  #   -> fill above given level, and place filled block inside higher elevation
  defp stack_and_fill([{p_h, p_i}, {pp_h, pp_i} = pp | stack], {h, i} = elevation, volume)
    when p_i == i - 1 and p_h < h and pp_h > h, do: {
        [elevation, pp | stack], 
        volume + (h - p_h) * (i - pp_i - 1)}

  # lower immediate predecessor (already filled level inside) and equally high pre-predecessor 
  #   -> fill above given level, replace as filled block
  defp stack_and_fill([{p_h, p_i}, {h, pp_i} | stack], {h, i} = elevation, volume)
    when p_i == i - 1 and p_h < h, do: {
        [elevation | stack], 
        volume + (h - p_h) * (i - pp_i - 1)}

end
```