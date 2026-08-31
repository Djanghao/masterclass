# Odd that this was labeled "medium"

**Author:** sleight42
**Votes:** 0
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/5193948/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/5193948/)

---

# Intuition
I'm confused. And this is not a humblebrag. This was a "medium" difficulty? This seemed trivial.

# Approach
Use a stack. Count heights downward, from right to left, so from Array length - 1 to 0. Compare the height of the current building to the height of the last building added to the stack. If the height is lower, add the index of the current building to the stack.

To get it faster, instead of sorting, I prepended when pushing to the stack rather than appending.

I'm curious how other solutions got faster and used less memory. Mine is somewhere around top 20% on both.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
# @param {Integer[]} heights
# @return {Integer[]}
def find_buildings(heights)
    views = []

    i = heights.length - 1
    while i >= 0
        if views.empty? || heights[i] > heights[views.first]
            views.unshift i
        end
        i -= 1
    end
    views
end

```