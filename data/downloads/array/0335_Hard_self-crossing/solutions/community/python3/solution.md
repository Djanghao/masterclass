# 335: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 8
**Link:** [https://leetcode.com/problems/self-crossing/solutions/3244854/](https://leetcode.com/problems/self-crossing/solutions/3244854/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The algorithm checks three possible cases for each line of the path, starting from the 3rd line. If any of the cases is true, the function returns True, meaning the path crosses itself. If none of the cases is true after looping through all the lines, the function returns False, meaning the path does not cross itself.

The three cases are:

1. The current line crosses the line 3 steps before it.
2. The current line crosses the line 4 steps before it.
3. The current line crosses the line 5 steps before it.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
  def isSelfCrossing(self, x: List[int]) -> bool:
    # If there are less than 4 values in the array, the path can't cross itself
    if len(x) <= 3:
      return False

    # Loop through the array starting from the 3rd index
    for i in range(3, len(x)):
      # Case 1: current line crosses the line 3 steps before it
      #           _______
      #         |      |
      #         |      |
      # ________|______| <-- current line
      #         |          |
      #         |          |
      #         |__________| <-- line 3 steps before
      if x[i - 2] <= x[i] and x[i - 1] <= x[i - 3]:
        return True
      
      # Case 2: current line crosses the line 4 steps before it
      #         _____
      #        |      |
      #        |      |
      #        |      |________
      #        |               |
      #        |               |
      #        |_______________| <-- current line
      #              line 4 steps before
      if i >= 4 and x[i - 1] == x[i - 3] and x[i - 2] <= x[i] + x[i - 4]:
        return True
      
      # Case 3: current line crosses the line 5 steps before it
      #         ______
      #        |      |
      #        |      |
      #        |______| <-- line 5 steps before
      #               |
      #               |
      #         ______|_______
      #        |              |
      #        |              |
      #        |______________| <-- current line
      if i >= 5 and x[i - 4] <= x[i - 2] and x[i - 2] <= x[i] + x[i - 4] and x[i - 1] <= x[i - 3] and x[i - 3] <= x[i - 1] + x[i - 5]:
        return True

    # If no crossing has been found, the path does not cross itself
    return False

```