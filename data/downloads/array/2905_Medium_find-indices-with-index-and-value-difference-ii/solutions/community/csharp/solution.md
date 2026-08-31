# C# One-Pass

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/5378533/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/5378533/)

---

```csharp
public class Solution
{
    public int[] FindIndices(int[] nums, int indexDifference, int valueDifference)
    {
        var min = (Val: int.MaxValue, Idx: -1);
        var max = (Val: int.MinValue, Idx: -1);

        for (int i = indexDifference; i < nums.Length; i++)
        {
            var j = i - indexDifference;

            if (nums[j] < min.Val)
                min = (nums[j], j);

            if (nums[j] > max.Val)
                max = (nums[j], j);

            if (nums[i] - min.Val >= valueDifference)
                return [min.Idx, i];

            if (max.Val - nums[i] >= valueDifference)
                return [max.Idx, i];
        }

        return [-1, -1];
    }
}
```