# Binary Search with a local function, no DP/Recursion

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/1900165/](https://leetcode.com/problems/split-array-largest-sum/solutions/1900165/)

---

```csharp
public class Solution
{
    public int SplitArray(int[] nums, int m)
    {
        int lo = nums.Max();
        int hi = nums.Sum();
            
        while (lo < hi)
        {
            int mid = lo + (hi - lo) / 2;
            if (IsHighEnough(mid)) hi = mid;
            else lo = mid + 1;
        }
        
        return lo;
        
        bool IsHighEnough(int target)
        {
            int sum = 0;
            int count = 1;

            foreach (int n in nums)
            {
                sum += n;
                if (sum > target)
                {
                    sum = n;
                    if (++count > m) return false;
                }
            }

            return true;
        }
    }
}
```