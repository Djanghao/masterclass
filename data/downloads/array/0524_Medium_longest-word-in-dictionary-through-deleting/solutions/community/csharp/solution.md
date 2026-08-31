# C# Two Pointer Technique Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/5161177/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/5161177/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->The approach is to iterate through the dictionary and check if each word can be formed by deleting characters from the given string s. We will keep track of the longest valid word that can be formed. If there are multiple words with the same length, we will return the smallest lexicographical word.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Iterate through each word in the dictionary.
//  For each word, check if it is a subsequence of the given string 's' using the helper method 'IsSubsequence'.
//  If the word is a subsequence and it is longer than the current longest valid word, update the result.
//  If the word is the same length as the current longest valid word but is lexicographically smaller,
//  update the result.
//  Return the result after checking all the words in the dictionary.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n * m) since we perform the subsequence check for each word in the dictionary.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1) (ignoring input space). The space used by the 'IsSubsequence' method is constant 'O(1)' because we only use a few integer variables for the pointers and counters.
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public string FindLongestWord(string s, IList<string> dictionary) {
        string result = string.Empty;

        foreach (string word in dictionary) {
            if (IsSubsequence(s, word)) {
                if (word.Length > result.Length || (word.Length == result.Length && string.Compare(word, result, StringComparison.Ordinal) < 0)) {
                    result = word;
                }
            }
        }

        return result;
    }

    private bool IsSubsequence(string s, string target) {
        int i = 0;
        foreach (char c in s) {
            if (i < target.Length && c == target[i]) {
                i++;
            }
        }

        return i == target.Length;
    }
}
```