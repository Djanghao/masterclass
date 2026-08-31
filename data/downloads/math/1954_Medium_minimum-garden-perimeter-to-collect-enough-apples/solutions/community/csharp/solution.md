# C# Binary Search

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/5322946/](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/5322946/)

---

```csharp
public class Solution
{
    public long MinimumPerimeter(long neededApples)
    {
        var left = 0;
        var right = int.MaxValue;

        while (left < right)
        {
            var mid = left + (right - left) / 2;

            if (CheckSideLength(mid))
                right = mid;
            else
                left = mid + 1;
        }

        return 4L * left;

        bool CheckSideLength(int length)
        {
            var total = 0L;

            for (var i = 1; i <= length / 2; i++)
            {
                total += 12L * i * i;

                if (total >= neededApples)
                    return true;
            }

            return false;
        }
    }
}
```