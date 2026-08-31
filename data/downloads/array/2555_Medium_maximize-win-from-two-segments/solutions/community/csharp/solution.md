# C#, Sliding Window

**Author:** CDev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3141604/](https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3141604/)

---

# Code
```
public class Solution 
{
    public int MaximizeWin(int[] prizePositions, int k) 
    {
        int n = prizePositions.Length;
        int[] rightSize = new int[n];
        int[] leftSize = new int[n];

        int left = 0;
        int right = 0;
        for (; right < n; right++)
        {
            while (left < right && prizePositions[right] - prizePositions[left] > k)
            {
                left++;
            }
            leftSize[right] = right - left + 1;
        }

        right = n-1;
        for (left = n-1;left >= 0; left--)
        {
            while (left < right && prizePositions[right] - prizePositions[left] > k)
            {
                right--;
            }
            rightSize[left] = right - left + 1;
        }

        int result = 0;
        int leftMax = 0;
        for (int i = 0; i < n; i++)
        {
            result = Math.Max(result, leftMax + rightSize[i]);
            leftMax = Math.Max(leftMax, leftSize[i]);
        }
        return result;
    }
}
```