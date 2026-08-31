# 100% faster | java

**Author:** charioter
**Votes:** 0
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/4267160/](https://leetcode.com/problems/squirrel-simulation/solutions/4267160/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1)

# Code
```
class Solution {
    public int minDistance(int height, int width, int[] tree, int[] squirrel, int[][] nuts) {
         int totalDistance = 0;
        int minExtraDistance = Integer.MAX_VALUE;

        for (int[] nut : nuts) {
            int nutToTree = distance(nut, tree);
            int nutToSquirrel = distance(nut, squirrel);
            totalDistance += 2 * nutToTree;
            minExtraDistance = Math.min(minExtraDistance, nutToSquirrel - nutToTree);
        }

        return totalDistance + minExtraDistance;
    }
    private int distance(int[] point1, int[] point2) {
        return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
    }
}
```