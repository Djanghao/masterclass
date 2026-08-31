# 🔥Easy solution using Two Pointer Technique, Beats 100% of Time and Space Complexity 🔥

**Author:** m3n99
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4469455/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4469455/)

---

# Intuition
The goal is to find the minimum cost based on certain conditions while traversing through the given string and corresponding list. The approach involves comparing colors and their associated time values to optimize the cost.

# Approach
The algorithm employs a pointer-based approach, iterating through the colors and associated time values. It compares adjacent colors and chooses the minimum time value based on specified conditions. By updating the pointers accordingly, the algorithm determines the minimum cost.

# Complexity
- Time complexity: **O(n)**
  The algorithm has a linear time complexity, where n is the length of the input string. The traversal of the string and list is done in a single pass.

- Space complexity: **O(1)**
  The space complexity is constant, as the algorithm uses a fixed amount of extra space that does not depend on the input size. This is achieved by utilizing only a few variables to keep track of pointers and the result.

# Code
```
class Solution {
  int minCost(String colors, List<int> neededTime) {
    // Initialize left pointer and result
    int l = 0, res = 0;

    // Iterate through the colors and neededTime
    for(int r = 1; r < colors.length; r++) {
        if(colors[l] == colors[r]) {
            if(neededTime[l] < neededTime[r]) {
                // Add the time at left pointer to the result
                res += neededTime[l];
                // Move the left pointer to the right pointer
                l = r;
            } else {
                // If the time at right pointer is less than or equal to left pointer
                // Add the time at right pointer to the result
                res += neededTime[r];
            }
        } else {
            // If the colors are different, move the left pointer to the right pointer
            l = r;
        }
    }
    
    return res;
  }
}
```