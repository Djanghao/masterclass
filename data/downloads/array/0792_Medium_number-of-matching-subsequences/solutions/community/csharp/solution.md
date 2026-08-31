# Count Matching Subsequences in a String

**Author:** Subham-Bose
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/6054192/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/6054192/)

---

# Intuition
The problem requires us to check how many words from a given list are subsequences of a given string s. A subsequence is a sequence derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

The first thought was to iterate through each word in the list and check if it is a subsequence of the given string s using a helper function.

# Approach
1. Iterate through Words: We iterate over each word in the input array words.
2. Subsequence Check: For each word, we use a helper function IsSubsequence that checks if it is a subsequence of the string s.
Initialize a pointer for the word (smallIndex).
Traverse through the string s using another pointer.
If characters match, move the smallIndex pointer forward.
If smallIndex reaches the length of the word, it means all characters in the word have been matched, so we return true.
3. Count Matches: If the helper function returns true, increment the count of matching subsequences.
4. Return Result: Finally, return the count of matching subsequences.

This approach checks each word individually and uses a linear scan for the subsequence check.

# Complexity
- Time complexity:O(n\xD7m)
where n is the length of s and m is the total number of characters in all words combined. The helper function IsSubsequence runs in O(n) time for each word.

- Space complexity:O(1) 
as we do not use any extra data structures apart from a few pointers.
# Code
```csharp []
public class Solution
{
    public int NumMatchingSubseq(string s, string[] words)
    {
        int count = 0;

        // Iterate through each word in the array of words
        for (int i = 0; i < words.Length; i++)
        {
            // Check if the current word is a subsequence of s
            if (IsSubsequence(s, words[i])) 
                count++;
        }

        return count;
    }

    // Helper function to determine if a word is a subsequence of the string s
    bool IsSubsequence(string str, string smallString)
    {
        int smallIndex = 0;

        // Traverse through the string str
        for (int i = 0; i < str.Length; i++)
        {
            // If characters match, move the smallIndex pointer forward
            if (smallString[smallIndex] == str[i])
            {
                smallIndex++;
            }

            // If all characters of the word are matched, return true
            if (smallIndex == smallString.Length)
                return true;
        }

        // If not all characters are matched, return false
        return false;
    }
}

```