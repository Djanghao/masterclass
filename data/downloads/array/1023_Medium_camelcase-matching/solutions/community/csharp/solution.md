# O(n) C# solution with clear code and comments

**Author:** DiscoMANNNN
**Votes:** 1
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/3061513/](https://leetcode.com/problems/camelcase-matching/solutions/3061513/)

---

# Intuition
Took a little to get my head around the problem. Since the pattern is ordered, we can iterate through the string and the query at the same time.

# Approach
Initially set up the iteration over the strings, then built out a function that determined if a given string fit the pattern.

# Complexity
- Time complexity:
O(n) where n is the sum of all characters in all queries

- Space complexity:
O(m) where m is the number of strings in queries

# Code
```
public class Solution {
    public IList<bool> CamelMatch(string[] queries, string pattern) {
        var result = new List<bool>();

        // Iterate over each string in queries
        foreach(var query in queries)
        {
            result.Add(ValidateMatchingPattern(query, pattern));
        }

        // Return whether or not each query agrees with the pattern
        return result;
    }

    private bool ValidateMatchingPattern(string query, string pattern)
    {
        // Keep track of where we are in the pattern
        int patternIndex = 0;

        // Iterate through our query, and see that it matches the pattern
        foreach(char currentCharacter in query)
        {
            // If we find the next character in the pattern present in our query, increment our pattern index
            if(patternIndex < pattern.Length && currentCharacter == pattern[patternIndex])
            {
                patternIndex++;
                continue;
            }

            // If the character is lower, it is considered insertable, and we continue
            if(char.IsLower(currentCharacter))
            {
                continue;
            }

            // An upper case letter cannot be inserted, so we return false
            return false;
        }

        // Confirm that we saw all characters the pattern describes in the query
        return patternIndex == pattern.Length;
    }
}
```