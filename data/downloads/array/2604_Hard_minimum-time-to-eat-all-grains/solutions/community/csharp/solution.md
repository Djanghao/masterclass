# C# solution beats 100%

**Author:** upskillNw
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/4307670/](https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/4307670/)

---

# Intuition
<!-- Binary Search: The algorithm performs a binary search on the time range. The lower bound is 0, and the upper bound is twice the distance between the furthest apart hen and grain

Check Function: Within the binary search, a Check function is used to determine if all grains can be eaten within a given time t. This function iterates over each hen and calculates the rightmost reach that hen can have given the time t. The logic takes into account whether a hen has to move left first to reach a grain and then right to reach further grains, or vice versa, using the remaining time optimally.

 -->

# Complexity
- Time complexity:
<!--O(nlogm)-->

- Space complexity:
<!-- O(1)-->

# Code
```
/*


*/

public class Solution {
    public int MinimumTime(int[] hens, int[] grains) {

        Array.Sort(hens);
        Array.Sort(grains);
        int nh = hens.Length, ng = grains.Length;
        int l = 0;
        int r = 2 * (Math.Max(grains[ng - 1], hens[nh - 1]) - Math.Min(grains[0], hens[0]));

        bool Check(int t)
        {
            int x = 0;
            foreach (int h in hens)
            {
                int rReach = t;
                if (grains[x] < h)
                {
                    int lCost = h - grains[x];
                    if (lCost > t)
                        return false;

                    rReach = Math.Max(0, Math.Max(t - 2 * lCost, (t - lCost) / 2));
                }

                if (h + rReach >= grains[x])
                {
                    x = BisectRight(grains, h + rReach, x);
                    if (x == ng)
                        return true;
                }
            }
            return false;
        }

        while (l < r)
        {
            int mid = l + (r - l) / 2;
            if (Check(mid))
                r = mid;
            else
                l = mid + 1;
        }

        return l;
    }

    private int BisectRight(int[] grains, int value, int lo)
    {
        int hi = grains.Length;
        while (lo < hi)
        {
            int mid = lo + (hi - lo) / 2;
            if (value < grains[mid]) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }
}


```