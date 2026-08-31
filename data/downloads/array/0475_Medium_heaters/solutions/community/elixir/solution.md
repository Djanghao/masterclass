# Recursive solution

**Author:** alvrrr
**Votes:** 0
**Link:** [https://leetcode.com/problems/heaters/solutions/4802911/](https://leetcode.com/problems/heaters/solutions/4802911/)

---

# Intuition
A house will always be heated by the heater right before (or equal) or right after it.
If we have both lists sorted, we can iterate the houses and then:
- drop the heaters while the current heater is < the current house (keeping track of the last one dropped)
- get the min of dist(house, last heater) and dist(house, next heater), this is how much it will take to heat the current house
- the max amount we see to heat a house is the answer

# Approach

Recur on (houses, heaters, last_reater, answer) with the idea above.
Answer is an argument of the recursion in order to enable TCO.

# Complexity
- Time complexity:
$$O(n logn)$$ (sorting the lists)

- Space complexity:
Linear

# Code
```
defmodule Solution do
  defp solve([], _, _, max) do
    max
  end

  defp solve([h], [], last_t, max) do
    max(
        abs(h-last_t),
        max
    )
  end

  defp solve([h | hs], [], last_t, max) do
    solve(hs, [], last_t, max(max, abs(h-last_t)))
  end

  defp solve([ h | hs ], [ t | ts ], _, max) when t < h do
    solve([ h | hs ], ts, t, max)
  end

  defp solve([ h | hs ], [ t | ts ], last_t, max) do
    min_dist = min(
        abs(h-t),
        abs(h-last_t)
    )
    new_max = max(min_dist, max)
    solve(hs, [ t | ts ], last_t, new_max)
  end

  def find_radius(houses, heaters) do
    [t | ts] = Enum.sort(heaters)
    solve(Enum.sort(houses), [t | ts], t, -1)
  end
end
```