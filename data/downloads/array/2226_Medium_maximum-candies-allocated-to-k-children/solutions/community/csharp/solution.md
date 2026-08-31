# Two Pointers , Binary Search, Beats 100%

**Author:** denikstech
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/6034949/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/6034949/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Two Pointer , Binary Search

# Complexity
- Time complexity:
O(log n)

- Space complexity:
O(1)

# Code
```csharp []
public class Solution {
    public int MaximumCandies(int[] candies, long k) {

         int lp = 1;
         int rp = candies.Max();

        while (lp <= rp)
        {
            int m = (rp + lp) / 2;

            if (CanDistribute(m))
            {
                lp = m + 1;
            }
            else
            {
                rp = m - 1;
            }



        }

        bool CanDistribute(int m)
        {
            var children = 0L;
            foreach (var pile in candies)
            {
                if ((children += pile / m) >= k)
                {
                    return true;
                }
            }
            return false;
        }

        return rp;

    }
}
```