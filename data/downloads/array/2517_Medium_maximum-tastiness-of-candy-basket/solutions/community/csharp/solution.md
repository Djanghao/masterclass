# C# Binary Search

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5338939/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5338939/)

---

```csharp
public class Solution
{
    public int MaximumTastiness(int[] price, int k)
    {
        Array.Sort(price);

        var left = 1;
        var right = price[^1] - price[0];

        while (left <= right)
        {
            var mid = left + (right - left) / 2;

            if (CheckTastiness(mid))
                left = mid + 1;
            else
                right = mid - 1;
        }

        return right;

        bool CheckTastiness(int tastiness)
        {
            var candies = 0;
            var prev = int.MinValue;

            foreach (var curr in price)
            {
                if (prev + tastiness <= curr)
                {
                    candies += 1;
                    prev = curr;

                    if (candies == k)
                        return true;
                }
            }

            return false;
        }
    }
}
```