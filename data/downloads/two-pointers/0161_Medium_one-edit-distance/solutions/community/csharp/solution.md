# C#, no method calls, no memory allocations, no string modification, one iteration

**Author:** mariuss
**Votes:** 1
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/4829600/](https://leetcode.com/problems/one-edit-distance/solutions/4829600/)

---

# Intuition
Iterate through the strings by index, compare character by character, and if there is a difference, let one index go ahead of the other.

# Approach
The goal of this approach was to avoid calling any methods, avoid any extra memory allocation, and iterate through the strings only once. Consequently, it is not written to be as easy to read as possible. The theory is that this should create an optimal solution from a time and space performance point of view. However, in a few runs, this code did not end up at the top of the performance metrics, even below other solutions doing more work. That may be because of the test samples being too small, or just exhibiting how well the .NET runtime manages strings.

There are other solutions which have a more logical and easy to follow approach, but could in practice run slower, even if the Big-O analysis are identical to the solution presented here.

In practice, I'm not sure if I would do this in an interview. I think I would opt for a less-optimal but easier to read solution.

# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(1)$$

# Code
```
public class Solution
{
    // Based on editorial
    public bool IsOneEditDistance(string s, string t)
    {
        // Make sure s is the longest string. Swap using C#7 tuple functionality. 
        // Avoid calling self with swapped parameters to save one callstack memory allocation.
        if (s.Length < t.Length)
        {
            (s, t) = (t, s);
        }

        // If the length difference is more than one it cannot possibly one edit distance.
        // At this point s is the equal length or longer so avoid call to Math.Abs().
        if (s.Length - t.Length > 1)
        {
            return false;
        }

        int diffCount = 0;

        // Compare character by character using two indices so that in the case of two strings of different
        // lengths, one index can be moved ahead. For performance (time and space), avoid using any method 
        // that would create new strings (i.e. modify a string or create a substring).
        for (int i = 0, j = 0; i < t.Length && j < s.Length; i++, j++)
        {
            if (t[i] != s[j])
            {
                if (++diffCount > 1)
                {
                    return false;
                }

                if (s.Length != t.Length)
                {
                    // We have a mismatch between the two strings and they are of equal length.
                    // Keep the index in the shorter string where it is and let the index
                    // in the longer string go one forward.
                    i--;
                }
            }
        }

        // If the length difference is 1 then it's an insert/delete scenario.
        return diffCount == 1 || s.Length - t.Length == 1;
    }
}
```