# Java - Checking the distance between the points

**Author:** Ganeish
**Votes:** 1
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/5050120/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/5050120/)

---

# Intuition
To solve this problem, one approach is to sort the positions of the stones in ascending order to understand their relative positions. This allows for a clear analysis of the distances between adjacent stones.


# Approach
The first step in the approach involves sorting the positions of the stones. After sorting, we can examine the distances between adjacent stones. If the distances between adjacent stones are both 1, then no moves are needed to arrange the stones optimally. Otherwise, we need to calculate the minimum and maximum moves required based on the configurations of the stones.


# Complexity
- Time complexity: $$O(n log(n)) = O(3 log(3)) = O(1.5)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int[] numMovesStones(int a, int b, int c) {
        int[] arr = new int[] {a, b, c};
        Arrays.sort(arr);
        int x = arr[0];
        int y = arr[1];
        int z = arr[2];
        if (y - x == 1 && z - y == 1) return new int[]{0, 0};
        return new int[] {
            getMin(x, y, z), getMax(x, y, z)
        };
    }

    public int getMin(int x, int y, int z) {
        if (y - x == 1 || z - y == 1) return 1;
        if (y - x == 2 || z - y == 2) return 1;
        return 2;
    }

    public int getMax(int x, int y, int z) {
        return (y-x)-1 + (z-y)-1;
    }
}
```