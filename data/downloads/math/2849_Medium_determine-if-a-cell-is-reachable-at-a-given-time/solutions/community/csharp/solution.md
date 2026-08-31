# O(1) easy to understand in 1 min

**Author:** ChewyHams
**Votes:** 3
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262745/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262745/)

---

# Intuition
Forget all position and path, it's a pure math question. The coordinate doesn't matter (you can swap values to make sure it is always top left to bottom right, if you have to).

The only thing matter is the shortest time to reach another point. As long as it is reachable, we can waste time by travel around adjacent and reach in exact time.

Therefore, just calculate the shortest time: first, diagnostic will be fast way to shorten length both X and Y, then go straight to reach destiny.

The tricky part is same posistion, in this case, either t = 0, or t > 1 will satisfy.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public bool IsReachableAtTime(int sx, int sy, int fx, int fy, int t) {
        if (sx == fx  && sy == fy)
        {
            return t == 0 || t > 1;
        }


        int d1 = Math.Abs(sy - fy);
        int d2 = Math.Abs(sx - fx);

        int minStep = Math.Min(d1, d2) + Math.Abs(d1 - d2);

        return minStep <= t;
    }
}
```