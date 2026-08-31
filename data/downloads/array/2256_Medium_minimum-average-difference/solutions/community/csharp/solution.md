# It works, but looks clumsy

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2876780/](https://leetcode.com/problems/minimum-average-difference/solutions/2876780/)

---

Three ideas that I tried to implement here:
1. Avoid casting
2. Avoid inside-loop guard clauses, i.e. checks for edge cases like division by zero
3. Return early if the array is all zeroes

To 1: The only casting is done when summing up the array. Seems unavoidable.
To 2: Check the last index when returning (not inside the for loop).
```csharp
public class Solution
{
    public int MinimumAverageDifference(int[] nums)
    {
        long sum = nums.Sum(n => (long)n);
        if (sum == 0) return 0;

        int minIndex = 0;
        int len = nums.Length;
        long front = 0;
        long minDiff = long.MaxValue;

        for (int i = 1; i < len; i++)
        {
            front += nums[i - 1];
            long diff = Math.Abs((sum - front) / (len - i) - front / i);
            if (diff < minDiff) (minDiff, minIndex) = (diff, i - 1);
        }

        return sum / len < minDiff ? len - 1 : minIndex;
    }
}
```