# C# Solutions with dictionary

**Author:** Luchunpen
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/5091282/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/5091282/)

---

On my Github you can try FastDictionary for the simple keys, which works 2 times faster than built-in https://github.com/LuchunPen/Fast-Hash-Collection.

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```
public class Solution 
{
    public int[] FindThePrefixCommonArray(int[] A, int[] B) 
    {
        Dictionary<int, int> freq = new Dictionary<int, int>();
        int[] result = new int[A.Length];
        for (int i = 0; i < A.Length; i++)
        {
            freq.Clear();
            for (int j = 0; j < i + 1; j++)
            {
                int a = A[j];
                if (!freq.ContainsKey(a)) { freq.Add(a, 1); }
                else { freq[a] = freq[a] + 1; }
            }

            int common = 0;
            for (int j = 0; j < i + 1; j++)
            {
                int b = B[j];
                if (!freq.ContainsKey(b)) { continue; }
                int count = freq[b];
                if (count > 0) 
                { 
                    count--; 
                    freq[b] = count;
                    common++;
                }
            }
            result[i] = common;
        }

        return result;
    }
}
```