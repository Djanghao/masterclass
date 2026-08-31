# 🟢🔴🟢 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/5849416/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/5849416/)

---

# Intuition
The task is to find the maximum distance between two houses of different colors in a list. A brute-force approach would be to compare each pair of houses and track the maximum distance between houses with different colors.

# Approach
- Initialize `maxDist` to 0.
- Use two nested loops: the outer loop iterates through each house, and the inner loop checks all the subsequent houses.
- For every pair of houses, if the colors are different, calculate the distance between them (`j - i`).
- Keep track of the maximum distance found where the colors of the two houses are different.

### Example Walkthrough:
**Example Input**:  
`colors = [1, 1, 1, 6, 1, 1, 1]`

1. Start with `maxDist = 0`.
2. For each house, iterate through all subsequent houses:
   - Compare house 0 with house 3: different colors, distance = 3.
   - Compare house 0 with house 6: same color, continue.
   - Continue comparing each pair of houses.
3. The maximum distance found is between house 0 and house 3.

**Output**:  
`3`

# Complexity
- **Time complexity**:  
  The time complexity is $$O(n^2)$$ because we are using two nested loops to compare each house with all subsequent houses.

- **Space complexity**:  
  The space complexity is $$O(1)$$ because no additional data structures proportional to the input size are used.

# Code
```dart
class Solution {
  int maxDistance(List<int> colors) {
    int maxDist = 0;
    for (int i = 0; i < colors.length; i++) {
      for (int j = i + 1; j < colors.length; j++) {
        if (colors[i] != colors[j]) {
          maxDist = max(maxDist, j - i);
        }
      }
    }
    return maxDist;
  }
}
