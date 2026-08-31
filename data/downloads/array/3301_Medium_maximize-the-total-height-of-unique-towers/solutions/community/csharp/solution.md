# C# Solution

**Author:** apsnes
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844415/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844415/)

---

# Code
```csharp []
public class Solution {
    public long MaximumTotalSum(int[] maximumHeight)
    {
        Array.Sort(maximumHeight);
        int n = maximumHeight.Length;
        long sum = maximumHeight[n-1];

        for (int i = n - 2; i >= 0; i--)
        {
            if (maximumHeight[i] >= maximumHeight[i+1])
            {
                maximumHeight[i] = maximumHeight[i+1]-1;
            }
            if (maximumHeight[i] == 0)
            {
                return -1;
            }
            sum += maximumHeight[i];
        }
        return sum;
    }
}
```