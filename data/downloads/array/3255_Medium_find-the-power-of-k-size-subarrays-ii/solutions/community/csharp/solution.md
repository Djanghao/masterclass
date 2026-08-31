# Simple solution in C#, Java (prefix sum)

**Author:** yeuhoahuuco
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5651019/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5651019/)

---

```java []
class Solution {
    public int[] resultsArray(int[] nums, int k) {
        int n = nums.length;
        int[] p = new int[n];
        p[0] = 0;
        for (int i = 1; i < n; i++)
        {
            p[i] = p[i - 1] + ((nums[i] == (nums[i - 1] + 1)) ? 1 : 0);
        }

        var ans = new int[n - k + 1];
        for (int i = 0; i < n - k + 1; i++)  
        {
            if (p[i + k - 1] == (p[i] + k - 1))
            {
                ans[i] = (nums[i + k - 1]);
            }
            else
            {
                ans[i] = -1;
            }
        }
        return ans;
    }
}
```
```csharp []
public class Solution {
    public int[] ResultsArray(int[] nums, int k) {
        int n = nums.Length;
        int[] p = new int[n];
        p[0] = 0;
        for (int i = 1; i < n; i++)
        {
            p[i] = p[i - 1] + ((nums[i] == (nums[i - 1] + 1)) ? 1 : 0);
        }

        var ans = new int[n - k + 1];
        for (int i = 0; i < n - k + 1; i++)  
        {
            if (p[i + k - 1] == (p[i] + k - 1))
            {
                ans[i] = (nums[i + k - 1]);
            }
            else
            {
                ans[i] = -1;
            }
        }
        return ans;
    }
}
```