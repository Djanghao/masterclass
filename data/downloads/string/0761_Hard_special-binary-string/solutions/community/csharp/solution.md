# C# The Best Solution in the word

**Author:** Ebrahem-Outlook
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-binary-string/solutions/5282977/](https://leetcode.com/problems/special-binary-string/solutions/5282977/)

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
public class Solution
{
    public string MakeLargestSpecial(string s)
    {
        // List to hold the special substrings.
        List<string> specials = new List<string>();
        int count = 0;
        int start = 0;

        // Iterate through the string to find special substrings.
        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == '1')
                count++;
            else
                count--;
            
            // When a special substring is found.
            if (count == 0)
            {
                // Recursively process the inner part of the substring.
                string inner = s.Substring(start + 1, i - start - 1);
                string processed = MakeLargestSpecial(inner);

                // Forn the special substring and add to the list.
                specials.Add("1" + processed + "0");

                // Update the start for the next potential special substring.
                start = i + 1;
            }
        }

        // Sort the special substrings in descending order.
        specials.Sort((a, b) => string.Compare(b, a, StringComparison.Ordinal));

        // Combine all the sorted special substrings into the final result.
        StringBuilder result = new StringBuilder();
        foreach (var special in specials)
        {
            result.Append(special);
        }

        return result.ToString();
    }

    
}
```