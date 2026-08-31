# Can You Eat Your Favorite Candie On Your Favorite Day

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/6121690/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/6121690/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
Time complexity:
O(n+m), where n = candiesCount.Length, m = queries.Length

Space complexity:
O(n), where n = candiesCount.Length
# Code
```csharp []
public class Solution {
    public bool[] CanEat(int[] candiesCount, int[][] queries) {
        var sums = new ulong[candiesCount.Length];
        sums[0] = (ulong)candiesCount[0];

        for (int i = 1; i < candiesCount.Length; i++)
        {
            sums[i] = sums[i - 1] + (ulong)candiesCount[i];
        }

        var result = new bool[queries.Length];

        for (int i = 0; i < queries.Length; i++)
        {
            var querie = queries[i];
            int type = querie[0];
            ulong day = (ulong)querie[1];
            ulong cap = (ulong)querie[2];
            
            ulong nonFavouriteCandies = (type > 0) ?
                sums[type - 1] :
                0;

            result[i] = ((sums[type] >= (day + 1)) && 
                (nonFavouriteCandies < ((day + 1) * cap)));
        }

        return result;
    }
}
```