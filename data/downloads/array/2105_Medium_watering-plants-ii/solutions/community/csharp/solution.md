# Simple O(n) solution with simulation.

**Author:** Drugged_Monkey
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/4854889/](https://leetcode.com/problems/watering-plants-ii/solutions/4854889/)

---

# Intuition
I'll simulate situation.

# Approach
Just one note: I simulate problem for `left` and `right` sides of `plants` if number of plants is `even` and add condition at the end of solution for middle element `m` in case of `odd` number of plants.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
public sealed class Solution 
{
    public int MinimumRefill(int[] plants, int capacityA, int capacityB) 
    {
        int cA = capacityA, cB = capacityB, l = plants.Length, r = 0, p = 0;

        for(int a = 0; a < l / 2; a++)
        {
            if(cA < plants[a])
            {
                cA = capacityA;
                r++;
            }

            cA -= plants[a];

            var b = l - a - 1;

            if(cB < plants[b])
            {
                cB = capacityB;
                r++;
            }

            cB -= plants[b];
        }

        if(l % 2 == 1 && l > 1)
        {
            var m = plants[l / 2];

            if(cA < m && cB < m)
            {
                r++;
            }
        }

        return r;
    }
}
```