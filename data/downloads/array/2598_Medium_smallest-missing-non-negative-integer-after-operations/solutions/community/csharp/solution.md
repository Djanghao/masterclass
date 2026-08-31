# C#, Mod

**Author:** CDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3314216/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3314216/)

---

# Code
```
public class Solution 
{
    public int FindSmallestInteger(int[] nums, int value) 
    {
        int[] remainCount = new int[value];
        foreach (int num in nums)
        {
            int remain = ((num % value)+ value) %value;
            remainCount[remain]++;
        }
        for (int i = 0; i < int.MaxValue; i++)
        {
            if (remainCount[i % value] > 0)
                remainCount[i % value]--;
            else
                return i;
        }
        return int.MaxValue;
    }
}
```