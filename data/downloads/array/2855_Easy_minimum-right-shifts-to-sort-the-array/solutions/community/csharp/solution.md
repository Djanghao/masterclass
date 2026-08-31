# C# Concise

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/5080634/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/5080634/)

---

```csharp
public class Solution
{
    public int MinimumRightShifts(IList<int> nums)
    {
        var shifts = 0;

        for (var i = 1; i <= nums.Count; i++)
            if (nums[i - 1] > nums[i % nums.Count])
                shifts = shifts == 0 ? nums.Count - i : -1;

        return shifts;
    }
}
```