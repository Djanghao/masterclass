# C# Mod

**Author:** CDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3230891/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3230891/)

---

# Code
```
public class Solution 
{
    public int[] DivisibilityArray(string word, int m) 
    {
        int n = word.Length;
        int[] result = new int[n];
        long sum = 0;
        for (int i = 0; i < n; i++)
        {
            sum = (sum * 10 + word[i]-'0')%m;
            result[i] = (sum == 0) ? 1 : 0;
        }
        return result;
    }
}
```