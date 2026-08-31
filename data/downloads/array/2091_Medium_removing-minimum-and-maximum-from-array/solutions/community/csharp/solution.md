# C# || Beats 100% || So Many If-Else

**Author:** sunil20000
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/6054524/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/6054524/)

---

```csharp []
public class Solution {
    public int MinimumDeletions(int[] nums) {
        int n = nums.Length;
        if(n == 1)
        {
            return 1;
        }
        else if(n == 2)
        {
            return 2;
        }

        int minIndex = 0, min = nums[0], maxIndex = 0, max = nums[0];
        
        for(int i = 1; i < n; i++)
        {
            if(nums[i] > max)
            {
                max = nums[i];
                maxIndex = i;
            }
            else if(nums[i] < min)
            {
                min = nums[i];
                minIndex = i;
            }
        }

        var minItemCountFromFront = minIndex + 1;
        var maxItemCountFromFront = maxIndex + 1;
        var minItemCountFromEnd = n - minIndex;
        var maxItemCountFromEnd = n - maxIndex;
        int item1 = 0, item2 = 0;

        if(minIndex < maxIndex)
        {
            item1 = (maxItemCountFromFront < minItemCountFromEnd) ? maxItemCountFromFront : minItemCountFromEnd;
            item2 = minIndex + 1 + n - maxIndex;
        }
        else
        {
            item1 = (minItemCountFromFront < maxItemCountFromEnd) ? minItemCountFromFront : maxItemCountFromEnd;
            item2 = maxIndex + 1 + n - minIndex;
        }

        return Math.Min(item1, item2);
    }
}
```