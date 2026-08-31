# C# Solution

**Author:** Renasci2022
**Votes:** 2
**Link:** [https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4482472/](https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4482472/)

---

# Intuition
- Evenly split input string into two strings, and reverse the second one. Thus our aim is to rearrange characters to make these two strings the same.
- For each character in `s1`, find its corresponding character in `s2`, and save the indexes in `binds`.
- If a character is in the rearrange range, it means the character can appear in any position in this range. Thus, update `range1` for characters in `s1`, so as `s2`.
- If `range1.left > range2.right` or `range2.left > range1.right`, that means however you rearrange these characters, these two characters (in one bind) cannot be aligned. Thus this query is denied.

Sorry for the lack of clarity. Without images it's hard to explain my thought,

# Complexity
- Time complexity: $O(n)$ for preprocess, $O(n)$ for each query.
The expected complexity for each query should be smaller, but I can't prove it.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool[] CanMakePalindromeQueries(string s, int[][] queries)
    {
        bool[] result = new bool[queries.Length];

        // Preprocess
        string s1 = s[..(s.Length / 2)];
        string s2 = s[(s.Length / 2)..];
        s2 = new string(s2.Reverse().ToArray());

        List<(int, int)> binds = new();
        int[] indexes = new int[26];
        for (int i = 0; i < s1.Length; i++)
        {
            bool found = false;
            for (int j = indexes[s1[i] - 'a']; j < s2.Length; j++)
            {
                if (s1[i] == s2[j])
                {
                    indexes[s1[i] - 'a'] = j + 1;
                    if (i != j)
                    {
                        binds.Add((i, j));
                    }
                    found = true;
                    break;
                }
            }
            if (!found)
            {
                return result;
            }
        }

        // Process
        foreach (var (index, query) in queries.Select((value, index) => (index, value)))
        {
            int left1 = query[0];
            int right1 = query[1];
            int left2 = s.Length - query[3] - 1;
            int right2 = s.Length - query[2] - 1;

            result[index] = true;
            foreach (var bind in binds)
            {
                (int left, int right) range1 = (bind.Item1, bind.Item1);
                (int left, int right) range2 = (bind.Item2, bind.Item2);
                if (bind.Item1 >= left1 && bind.Item1 <= right1)
                {
                    range1 = (left1, right1);
                }
                if (bind.Item2 >= left2 && bind.Item2 <= right2)
                {
                    range2 = (left2, right2);
                }
                if (range1.left > range2.right || range2.left > range1.right)
                {
                    result[index] = false;
                    break;
                }
            }
        }

        return result;
    }
}
```