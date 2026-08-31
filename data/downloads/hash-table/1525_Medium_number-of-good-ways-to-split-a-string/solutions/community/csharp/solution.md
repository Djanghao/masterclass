# C# Two Pass Algorithm

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/5665127/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/5665127/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, we need to split the string at different points and count how many distinct characters are present in the left and right parts of the string. We'll use two passes over the string\u2014one from the left to the right and another from the right to the left\u2014to calculate the number of distinct characters on both sides efficiently.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Two Arrays:
//  *leftDistinct[i]: Stores the number of distinct characters in the substring s[0...i].
//  *rightDistinct[i]: Stores the number of distinct characters in the substring s[i...n-1].
//  First Pass (Left to Right): 
//  *We traverse the string from left to right and use a HashSet to keep track of distinct characters seen 
//  so far. We store the size of the set (i.e., the number of distinct characters) at each index in 
//  leftDistinct.
//  Second Pass (Right to Left):
//  *We do a similar traversal but from right to left, storing the number of distinct characters at each 
//  index in rightDistinct.
//  Count Good Splits:
//  *For each possible split point i, compare leftDistinct[i] with rightDistinct[i + 1]. If they are equal, 
//  it means that the split at this point is a "good split".
//  Return the Count:
//  *Finally, the number of good splits is returned.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the length of the string.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution
{
    public int NumSplits(string s)
    {
        int n = s.Length;
        int[] leftDistinct = new int[n];
        int[] rightDistinct = new int[n];

        HashSet<char> leftSet = new HashSet<char>();
        HashSet<char> rightSet = new HashSet<char>();

        // Traverse from left to right
        for (int i = 0; i < n; i++)
        {
            leftSet.Add(s[i]);
            leftDistinct[i] = leftSet.Count;
        }

        // Traverse from right to left
        for (int i = n - 1; i >= 0; i--)
        {
            rightSet.Add(s[i]);
            rightDistinct[i] = rightSet.Count;
        }

        int goodSplits = 0;
        // Count the good splits
        for (int i = 0; i < n - 1; i++)
        {
            if (leftDistinct[i] == rightDistinct[i + 1])
            {
                goodSplits++;
            }
        }

        return goodSplits;
    }
}
```