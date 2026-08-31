# Simple Greedy Linear Time

**Author:** threepenguins
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/5812948/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/5812948/)

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
```csharp []
public class Solution
{
    private int[] getCount(string s1)
    {
        var cnts = new int[26];
        foreach(var c in s1)
        {
            cnts[c-'a']++;
        }
        return cnts;
    }

    private bool canBeat(string s1, int[] countsOther)
    {
        foreach(var c in s1)
        {
            // get lowest that meets criteria
            bool hit = false;
            for (int i = (c-'a'); i < 26; i++)
            {
                if (countsOther[i] > 0)
                {
                    countsOther[i]--;
                    hit = true;
                    break;
                }
            }
            if(!hit)
            {
            return false;
            }

        }
        return true;

    }

    public bool CheckIfCanBreak(string s1, string s2)
    {
        var cnts1 = getCount(s1);
        var cnts2 = getCount(s2);
        if (canBeat(s1, cnts2))
        {
            return true;
        }
        return canBeat(s2, cnts1);

    }
}
```