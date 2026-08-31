# Best C# solution

**Author:** DharaniKarthick
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/4113016/](https://leetcode.com/problems/count-the-repetitions/solutions/4113016/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
//using System;
//using System.Collections.Generic;

public class Solution
{
    public int GetMaxRepetitions(string s1, int n1, string s2, int n2)
    {
        List<int> rec = new List<int> { 0 };
        Dictionary<int, int> track = new Dictionary<int, int>();
        int ct = 0, start = 0, ptr1 = 0, ptr2 = 0;

        if (!IsSubset(s2, s1))
            return 0;

        s1 = new string(s1.Where(ch => s2.Contains(ch)).ToArray());

        while (true)
        {
            
            foreach (char ch in s2)
            {
                ptr1 = s1.IndexOf(ch, start);
                if (ptr1 == -1)
                {
                    ct++;
                    ptr1 = s1.IndexOf(ch);
                }
                start = ptr1 + 1;
            }

            rec.Add(ct + 1);

            if (rec[^1] > n1)
                return (rec.Count - 2) / n2;

            ptr1 = start;

            if (!track.ContainsKey(ptr1))
                track[ptr1] = rec.Count - 1;
            else
                break;
        }

        int cycleStart = rec[track[start]];
        int cycle1 = ct + 1 - cycleStart;
        int cycle2 = rec.Count - 1 - track[start];
        int rest = n1 - cycleStart;
        int rem = cycleStart + rest % cycle1;

        ptr2 = 0;
        while (rec[ptr2] <= rem)
            ptr2++;

        return (cycle2 * (rest / cycle1) + ptr2 - 1) / n2;
    }

    private bool IsSubset(string s2, string s1)
    {
        foreach (char ch in s2)
        {
            if (s1.IndexOf(ch) == -1)
                return false;
        }
        return true;
    }
}

```