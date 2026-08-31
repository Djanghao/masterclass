# C# BFS

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/5293625/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/5293625/)

---

# Code
```
/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Sea {
 *     public bool HasShips(int[] topRight, int[] bottomLeft);
 * }
 */

class Solution {
    public int CountShips(Sea sea, int[] topRight, int[] bottomLeft)
    {
        var bottom = bottomLeft[0];
        var left = bottomLeft[1];
        var top = topRight[0];
        var right = topRight[1];

        var queue = new Queue<(int, int, int, int)>();
        queue.Enqueue((left, right, bottom, top));
        var res = (top - bottom + 1) * (right - left + 1);
        while (queue.Count > 0)
        {
            var (l, r, b, t) = queue.Dequeue();
            if (!sea.HasShips(new int[] {r, t}, new int[] {l, b}))
            {
                res -= (t - b + 1) * (r - l + 1);
            }
            else if (t != b || l != r)
            {
                var rm = (l + r) / 2;
                var cm = (t + b) / 2;
                queue.Enqueue((l, rm, b, cm));
                queue.Enqueue((rm + 1, r, b, cm));
                queue.Enqueue((l, rm, cm + 1, t));
                queue.Enqueue((rm + 1, r, cm + 1, t));
            }
        }
        return res;
    }
}
```