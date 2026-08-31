# Elixir Functional Solution

**Author:** 9kqtuKP8J2
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/5896910/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/5896910/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The naive approach, of starting from each bar in the histogram and looking left and right to see how far a rectangle of that height can extend, is clearly going to be inefficient ($$O(n^2)$$).  To avoid this, we need a method to keep just enough information about what we've seen so far to enable us to compute the biggest rectangles we can construct, when we get enough information to figure out what those are.

# Approach
<!-- Describe your approach to solving the problem. -->
For a left-to-right sequence of _non-decreasing_ heights, we need to defer computing the maximum area rectangle bounded by each height, because we do not know how far to the _right_ such a rectangle may extend.  So we keep a stack (LIFO) of these non-decreasing heights (paired with their $$x$$ coordinates, for simplicity of computation).  

When a height comes along which breaks the streak, we now know the furthest to the right any taller rectangle must terminate, so we can pop all taller heights from the stack and compute the areas of the corresponding rectangles.  (The left $$x$$ coordinate for each rectangle we find by peeking at the next element of the stack.)

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$O(n)$$, for a stack of non-decreasing heights.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec largest_rectangle_area(heights :: [integer]) :: integer
  def largest_rectangle_area(heights) do
    max_area_iter(Enum.with_index(heights), [])
  end

  def peek_x1(stack) do
    case stack do
        [] -> 
            -1
        [{_h1, x1} | _] ->
            x1
    end
  end

  def max_area_iter(posns, stack, xmax \\\\ 0, amax \\\\ 0) do
    case {posns, stack} do
      {[], []} -> 
        amax
      {[], [{ht, _xt} | rest]} ->
        area = ht * (xmax - peek_x1(rest))
        max_area_iter([], rest, xmax, max(amax, area))
      {[{hn, xn} | resn], []} -> 
        max_area_iter(resn, [{hn, xn}], xn, amax)
      {[{hn, xn} | resn], [{ht, _xt} | rest]} ->
        if hn >= ht do
          max_area_iter(resn, [{hn, xn} | stack], xn, amax)
        else
          area = ht * (xn - peek_x1(rest) - 1)
          max_area_iter(posns, rest, xn, max(amax, area))
        end
    end
  end
end
```